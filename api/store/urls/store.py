from django.urls import path, include

from store.api.store import CreateStoreAPI, DetailStoreAPI, UpdateStoreAPI

urlpatterns = [
    path("create/", CreateStoreAPI.as_view(), name="create-store"),
    path("details/<slug:slug>/", DetailStoreAPI.as_view(), name="details-store"),
    path("update/<slug:slug>/", UpdateStoreAPI.as_view(), name="update-store"),
]
