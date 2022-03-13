# from django.test import TestCase
# from django.urls import reverse
# from rest_framework.test import APIClient
# from rest_framework.status import (
#     HTTP_200_OK,
#     HTTP_201_CREATED,
#     HTTP_205_RESET_CONTENT,
#     HTTP_401_UNAUTHORIZED,
# )

# from accounts.models import User


# class ModelTestCase(TestCase):
#     def setUp(self):
#         self.user_data = {
#             "username": "john",
#             "email": "john@test.com",
#             "password": "john_test_99+",
#         }
#         self.user = User(**self.user_data)

#     def test_model_can_create_user(self):
#         self.user.set_password(self.user_data["password"])
#         self.user.save()

#         user_exists = User.objects.filter(username=self.user_data["username"]).exists()

#         self.assertEqual(True, user_exists)


# class ViewTestCase(TestCase):
#     def setUp(self):
#         self.client = APIClient()
#         self.user_data = {
#             "username": "john",
#             "email": "john@test.com",
#             "password": "john_test_99+",
#         }
#         self.response = self.client.post(
#             reverse("accounts:register"), self.user_data, format="json"
#         )

#     def test_api_can_register_user(self):
#         self.assertEqual(self.response.status_code, HTTP_201_CREATED)

#     def test_api_can_login_user(self):
#         user_creds = self.user_data
#         user_creds.pop("email")

#         self.response = self.client.post(
#             reverse("accounts:login"), user_creds, format="json"
#         )

#         self.assertEqual(self.response.status_code, HTTP_200_OK)
#         self.assertEqual(len(self.response.data["data"]["token"]) > 0, True)

#     def test_api_can_logout_user(self):
#         token = self.response.data["data"]["token"]

#         # get user profile before logout

#         self.response = self.client.get(
#             reverse("accounts:profile"), HTTP_AUTHORIZATION=f"Token {token}"
#         )
#         self.assertEqual(self.response.status_code, HTTP_200_OK)

#         # logout / destroy token

#         logout_response = self.client.get(
#             reverse("accounts:logout"), HTTP_AUTHORIZATION=f"Token {token}"
#         )
#         self.assertEqual(logout_response.status_code, HTTP_205_RESET_CONTENT)

#         # get user profile after logout with old token

#         self.response = self.client.get(
#             reverse("accounts:profile"), HTTP_AUTHORIZATION=f"Token {token}"
#         )
#         self.assertEqual(self.response.status_code, HTTP_401_UNAUTHORIZED)

#     def test_api_can_update_user_profile(self):
#         token = self.response.data["data"]["token"]

#         profile_update_data = {"first_name": "John", "last_name": "Doe"}

#         # update user profile

#         self.response = self.client.post(
#             reverse("accounts:profile"),
#             profile_update_data,
#             HTTP_AUTHORIZATION=f"Token {token}",
#         )

#         self.assertEqual(self.response.status_code, HTTP_200_OK)
#         self.assertAlmostEqual(
#             {
#                 "first_name": self.response.data["data"]["first_name"],
#                 "last_name": self.response.data["data"]["last_name"],
#             },
#             profile_update_data,
#         )
