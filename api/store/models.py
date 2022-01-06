from django.db import models

from accounts.models import User
from ecommerce.utils import BaseModel


class Store(BaseModel):

    name = models.CharField(max_length=255, blank=False)
    owner = models.ForeignKey(User, on_delete=models.CASCADE)
    description = models.TextField(blank=True)
    address = models.TextField(blank=True)
    email = models.EmailField(blank=True)
    slug = models.SlugField(max_length=255, blank=False, unique=True)

    class Meta:
        verbose_name = "Store"
        verbose_name_plural = "Store"

    def __str__(self):
        return self.name

    def save(self, *args, **kwargs):
        if not self.slug:
            self.unique_slugify(self.name, "slug")

        super(Store, self).save(*args, **kwargs)
