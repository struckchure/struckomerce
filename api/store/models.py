from django.db import models
from django.core.exceptions import ValidationError
from django.utils.text import slugify
from django.utils.translation import gettext_lazy as _
import os

from ecommerce.utils import BaseModel
from accounts.models import User
from store.managers import CategoryManager, TagManager


class Store(BaseModel):

    name = models.CharField(max_length=255, blank=False)
    owner = models.ForeignKey(User, on_delete=models.CASCADE)
    description = models.TextField(blank=True)
    address = models.TextField(blank=True)
    email = models.EmailField(blank=True)
    slug = models.SlugField(max_length=255)

    def __str__(self):
        return self.name

    def save(self, *args, **kwargs):
        if not self.slug:
            self.unique_slugify(self.name, "slug")

        super(Store, self).save(*args, **kwargs)


class StoreLabel(BaseModel):
    class LABEL_TYPES(models.TextChoices):
        CATEGORY = "CT", "Category"
        TAG = "TG", "Tag"

    # validate tag_name - lowercase/uppercase
    def validate_tag_name_case(tag_name):
        __tag_names = [
            tag_name.lower()
            for tag_name in User.objects.values_list("tag_name", flat=True)
        ]

        if tag_name in __tag_names:
            raise ValidationError("Tag with this name already exists.")

    name = models.CharField(max_length=255, validators=[validate_tag_name_case])
    description = models.TextField(blank=True)
    label_type = models.CharField(
        max_length=100, choices=LABEL_TYPES.choices, default=LABEL_TYPES.CATEGORY
    )
    slug = models.SlugField(max_length=100)

    def __str__(self):
        return self.name

    def save(self, *args, **kwargs):
        if not self.slug:
            self.unique_slugify(self.name, "slug")

        super(StoreLabel, self).save(*args, **kwargs)


class Category(StoreLabel):

    objects = CategoryManager()

    class Meta:
        proxy = True


class Tag(StoreLabel):

    objects = TagManager()

    class Meta:
        proxy = True

    def save(self, *args, **kwargs):
        self.name = slugify(self.name).lower()

        super(Tag, self).save(*args, **kwargs)


class Image(BaseModel):

    image = models.ImageField(blank=False)
    description = models.TextField(blank=True)

    @property
    def image_url(self):
        return os.getenv("API_HOST_URL", "http://localhost:8000") + self.image.url


class Product(BaseModel):

    store = models.ForeignKey(Store, on_delete=models.CASCADE)
    category = models.ForeignKey(
        Category, related_name="product_category", on_delete=models.SET_NULL, null=True
    )
    tags = models.ManyToManyField(Tag, related_name="product_tags", blank=True)
    name = models.CharField(max_length=255, blank=False)
    images = models.ManyToManyField(Image, blank=True)
    description = models.TextField(blank=True)
    price = models.DecimalField(max_digits=10, blank=False, decimal_places=2)
    slug = models.SlugField(max_length=255)

    def __str__(self):
        return self.name

    def save(self, *args, **kwargs):
        if not self.slug:
            self.unique_slugify(self.name, "slug")

        super(Product, self).save(*args, **kwargs)

    def set_category(self, name):
        category, created = Category.objects.get_or_create(name=name)
        if not created:
            category.save()

        self.category = category
        self.save()

    def add_images(self, *images):
        for __image in images:
            image = Image.objects.create(**__image)
            image.save()

            self.images.add(image)

    def add_tags(self, *names):
        for name in names:
            tag_qs = Tag.objects.filter(name=name)
            if not tag_qs.exists():
                tag = Tag.objects.create(name=name)
            else:
                tag = tag_qs.first()
            tag.save()

            self.tags.add(tag)
