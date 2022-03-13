# from django.test import TestCase
# from django.urls import reverse
# from rest_framework.test import APIClient
# from rest_framework.status import HTTP_200_OK, HTTP_201_CREATED


# class ViewTestCase(TestCase):
#     def setUp(self):
#         self.user_data = {
#             "username": "john",
#             "email": "john@test.com",
#             "password": "john_test_99+",
#         }
#         self.store_data = {"name": "John's Super Store"}

#         self.client = APIClient()
#         self.response = self.client.post(
#             reverse("accounts:register"), self.user_data, format="json"
#         )

#         self.user_token = self.response.data["data"]["token"]

#     def test_api_can_create_store(self):
#         # create store

#         self.response = self.client.post(
#             reverse("store:create-store"),
#             self.store_data,
#             HTTP_AUTHORIZATION=self.user_token,
#         )
#         print(self.response.data["data"])
#         self.assertEqual(self.response.status_code, HTTP_201_CREATED)

#     def test_api_can_store_owner_update_store(self):
#         new_store_data = {"name": "John's Book Store"}

#         self.response = self.client.put(
#             reverse("store:update-store", args=[self.response.data["data"]["slug"]]),
#             new_store_data,
#             HTTP_AUTHORIZATION=self.user_token,
#         )

#         self.assertEqual(self.response.status_code, HTTP_200_OK)
#         self.assertEqual({"name": self.response.data["data"]["name"]}, new_store_data)
