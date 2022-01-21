from django.urls import path

from store.api.products import (
    ProductCreateAPI,
    ProductDetailsAPI,
    ProductListAPI,
    ProductUpdateAPI,
)

urlpatterns = [
    path("products/list/", ProductListAPI.as_view(), name="list-product"),
    path(
        "<slug:store_slug>/products/create/",
        ProductCreateAPI.as_view(),
        name="create-product",
    ),
    path(
        "products/<slug:product_slug>/update/",
        ProductUpdateAPI.as_view(),
        name="update-product",
    ),
    path(
        "products/<slug:product_slug>/details/",
        ProductDetailsAPI.as_view(),
        name="details-product",
    ),
]
