from django.db import models
from django.contrib.auth.models import AbstractUser
from django.core.exceptions import ValidationError
from rest_framework.authtoken.models import Token

from ecommerce.utils import BaseModel


class User(BaseModel, AbstractUser):

    # validate username - lowercase/uppercase
    def validate_username_case(username):
        __usernames = [
            username.lower()
            for username in User.objects.values_list("username", flat=True)
        ]

        if username in __usernames:
            raise ValidationError("User with this username already exists.")

    first_name = models.CharField(max_length=255, blank=True)
    last_name = models.CharField(max_length=255, blank=True)
    username = models.CharField(
        max_length=200, blank=False, unique=True, validators=[validate_username_case]
    )
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
