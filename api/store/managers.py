from django.db import models


class CategoryManager(models.Manager):
    def get_queryset(self):
        from store.models import StoreLabel

        return super().get_queryset().filter(label_type=StoreLabel.LABEL_TYPES.CATEGORY)

    def create(self, *args, **kwargs):
        from store.models import StoreLabel

        kwargs["label_type"] = StoreLabel.LABEL_TYPES.CATEGORY
        return super(CategoryManager, self).create(*args, **kwargs)


class TagManager(models.Manager):
    def get_queryset(self):
        from store.models import StoreLabel

        return super().get_queryset().filter(label_type=StoreLabel.LABEL_TYPES.TAG)

    def create(self, *args, **kwargs):
        from store.models import StoreLabel

        kwargs["label_type"] = StoreLabel.LABEL_TYPES.TAG
        return super(TagManager, self).create(*args, **kwargs)
