from rest_framework.generics import GenericAPIView as View
from rest_framework.response import Response
from rest_framework import status
from rest_framework.permissions import IsAuthenticated
from rest_framework.authtoken.models import Token
from django.contrib.auth import authenticate, login, logout

from accounts.serializers import UserSerializer, LoginSerializer


class RegisterUserAPI(View):

    serializer_class = UserSerializer

    def post(self, request):
        user_data = request.data

        user_register_serializer = self.get_serializer(data=user_data)
        user_register_serializer.is_valid(raise_exception=True)
        user_register_serializer.save()

        return Response(
            {
                "message": "Registration Successful",
                "data": user_register_serializer.data,
            }
        )


class LoginUserAPI(View):

    serializer_class = LoginSerializer

    def post(self, request):
        user_creds = request.data

        user_login_serializer = self.get_serializer(data=user_creds)
        user_login_serializer.is_valid(raise_exception=True)

        user = authenticate(**user_login_serializer.data)

        if not user:
            return Response(
                {"messsage": "Invalid credentials"}, status=status.HTTP_401_UNAUTHORIZED
            )

        login(request, user)

        return Response(
            {"message": "Login successful", "data": UserSerializer(user).data}
        )


class LogoutUserAPI(View):

    permission_classes = [IsAuthenticated]

    def get(self, request):
        user_token = Token.objects.filter(user=request.user)
        if user_token.exists():
            user_token.delete()

        logout(request)

        return Response(
            {"message": "You are currently logged out"},
            status=status.HTTP_205_RESET_CONTENT,
        )


class ProfileUserAPI(View):

    serializer_class = UserSerializer
    permission_classes = [IsAuthenticated]

    def get(self, request):
        user_serializer = self.get_serializer(request.user)

        return Response({"data": user_serializer.data})

    def post(self, request):
        user_data = request.data

        user_serializer = self.get_serializer(
            request.user, data=user_data, partial=True
        )
        user_serializer.is_valid(raise_exception=True)
        user_serializer.save()

        return Response(
            {"message": "User has been updated", "data": user_serializer.data}
        )
