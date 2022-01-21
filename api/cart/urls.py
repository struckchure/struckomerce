from django.urls import path

from cart.api import CartAPI, CartAddItemAPI, CartItemDetailsAPI, CartUpdateItemAPI

app_name = "cart"

urlpatterns = [
    path("", CartAPI.as_view(), name="cart-details"),
    path(
        "details/<uuid:cart_item_uuid>/",
        CartItemDetailsAPI.as_view(),
        name="details-item",
    ),
    path("add-item/", CartAddItemAPI.as_view(), name="add-item"),
    path(
        "update-item/<uuid:cart_item_uuid>/",
        CartUpdateItemAPI.as_view(),
        name="update-item",
    ),
]
