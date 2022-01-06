from django.db import models
import uuid


class BaseModel(models.Model):

    id = models.SlugField(primary_key=True, default=uuid.uuid4)
    created = models.DateTimeField(auto_now_add=True)
    updated = models.DateTimeField(auto_now=True)

    class Meta:
        abstract = True
