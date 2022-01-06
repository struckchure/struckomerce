from django.db import models
from django.contrib.auth.models import AbstractUser
from rest_framework.authtoken.models import Token

from ecommerce.base import BaseModel


class User(BaseModel, AbstractUser):

    first_name = models.CharField(max_length=255, blank=True)
    last_name = models.CharField(max_length=255, blank=True)
    username = models.CharField(max_length=200, blank=False, unique=True)
    email = models.EmailField(max_length=255, blank=False, unique=True)

    USERNAME_FIELD = "username"
    REQUIRED_FIELDS = ["email"]

    class Meta:
        verbose_name = "User"
        verbose_name_plural = "Users"

    def __str__(self):
        return self.username

    @property
    def token(self):
        token, _ = Token.objects.get_or_create(user_id=self.id)
        return token.key
