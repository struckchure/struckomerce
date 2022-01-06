from rest_framework import serializers

from store.models import Store


class StoreSerializer(serializers.ModelSerializer):

    owner = serializers.SerializerMethodField()

    class Meta:
        model = Store
        fields = "__all__"
        read_only_fields = ["owner", "slug"]

    def get_owner(self, obj):
        return obj.owner.username
