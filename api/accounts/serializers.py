from rest_framework import serializers

from accounts.models import User


class UserSerializer(serializers.ModelSerializer):

    password = serializers.CharField(write_only=True)
    token = serializers.SerializerMethodField()

    class Meta:
        model = User
        fields = "__all__"
        read_only_fields = ["groups", "user_permissions"]

    def get_token(self, obj):
        return obj.token

    def create(self, validated_data):
        password = validated_data.pop("password")

        obj = User.objects.create(**validated_data)
        obj.set_password(password)
        obj.save()

        return obj


class LoginSerializer(serializers.Serializer):

    username = serializers.CharField(required=True)
    password = serializers.CharField(required=True)
