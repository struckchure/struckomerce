from django.db import models
from inflection import re

from ecommerce.utils import BaseModel
from accounts.models import User
from store.models import Product


class CartItem(BaseModel):

    user = models.ForeignKey(User, on_delete=models.CASCADE)
    item = models.ForeignKey(Product, on_delete=models.CASCADE)
    quantity = models.PositiveIntegerField(default=1)

    class Meta:
        verbose_name = "Cart item"
        verbose_name_plural = "Cart items"

    def __str__(self):
        return self.user.username

    @property
    def owner(self):
        return self.user


class Cart(object):
    def __init__(self, **filters):
        self.user_cart_items = CartItem.objects.filter(**filters)

    @property
    def cart_items(self):
        return self.user_cart_items

    def add_cart_items(self, *cart_item_data):
        bulk_create_cart_items = CartItem.objects.bulk_create(
            [CartItem(**data) for data in cart_item_data]
        )

        return bulk_create_cart_items
