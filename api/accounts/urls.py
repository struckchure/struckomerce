from django.urls import path

from accounts.api import LoginUserAPI, LogoutUserAPI, ProfileUserAPI, RegisterUserAPI

urlpatterns = [
    path("register/", RegisterUserAPI.as_view(), name="register"),
    path("login/", LoginUserAPI.as_view(), name="login"),
    path("logout/", LogoutUserAPI.as_view(), name="logout"),
    path("profile/", ProfileUserAPI.as_view(), name="profile"),
]
