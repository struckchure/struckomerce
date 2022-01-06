from rest_framework.generics import GenericAPIView as View, get_object_or_404
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response
from rest_framework.status import HTTP_205_RESET_CONTENT

from ecommerce.permissions import IsObjectOwner
from store.models import Store
from store.serializers.store import StoreSerializer


class CreateStoreAPI(View):

    permission_classes = [IsAuthenticated]
    serializer_class = StoreSerializer

    def post(self, request):
        store_data = request.data

        store_create_serializer = self.get_serializer(data=store_data)
        store_create_serializer.is_valid(raise_exception=True)
        store_create_serializer.save(owner=request.user)

        return Response(
            {"message": "Store has been created", "data": store_create_serializer.data}
        )


class DetailStoreAPI(View):

    serializer_class = StoreSerializer

    def get(self, request, slug):
        store = get_object_or_404(Store, slug=slug)

        store_serializer = self.get_serializer(store)

        return Response({"data": store_serializer.data})


class UpdateStoreAPI(View):

    permission_classes = [IsAuthenticated, IsObjectOwner]
    serializer_class = StoreSerializer

    def get_object(self, slug):
        store = get_object_or_404(Store, slug=slug)
        self.check_object_permissions(self.request, store)

        return store

    def put(self, request, slug):
        store = self.get_object(slug)
        store_data = request.data

        store_update_serializer = self.get_serializer(
            store, data=store_data, partial=True
        )
        store_update_serializer.is_valid(raise_exception=True)
        store_update_serializer.save()

        return Response(
            {"message": "Store has been updated", "data": store_update_serializer.data}
        )

    def delete(self, request, slug):
        store = self.get_object(slug)

        store.delete()

        return Response(
            {"message": "Store has been deleted"}, status=HTTP_205_RESET_CONTENT
        )
