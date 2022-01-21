from rest_framework.generics import get_object_or_404
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated
from rest_framework.status import (
    HTTP_201_CREATED,
    HTTP_204_NO_CONTENT,
)

from ecommerce.utils import View
from ecommerce.permissions import IsObjectOwner
from store.models import Store, Product
from store.serializers.products import CreateProductSerializer, ProductSerializer


class ProductListAPI(View):

    queryset = Product.objects.order_by("-updated")
    serializer_class = ProductSerializer

    def get(self, request):
        query_params = request.query_params

        store = get_object_or_404(Store, slug=query_params.get("store"))
        queryset = (
            self.get_queryset().filter(store=store) if store else self.get_queryset()
        )

        serialized_products = self.get_serializer(queryset, many=True)

        return Response({"data": serialized_products.data})


class ProductCreateAPI(View):

    serializer_class = CreateProductSerializer
    permission_classes = [IsAuthenticated, IsObjectOwner]

    def post(self, request, store_slug):
        store = self.get_object(Store, slug=store_slug)

        product_data = request.data
        product_serializer = self.get_serializer(data=product_data)
        product_serializer.is_valid(raise_exception=True)
        product_serializer.save(store=store)

        return Response(
            {
                "message": "Product has been created",
                "data": ProductSerializer(product_serializer.instance).data,
            },
            status=HTTP_201_CREATED,
        )


class ProductDetailsAPI(View):

    serializer_class = ProductSerializer

    def get(self, request, product_slug):
        product = self.get_object(Product, slug=product_slug)
        product_serializer = self.get_serializer(product)

        return Response({"data": product_serializer.data})


class ProductUpdateAPI(View):

    serializer_class = CreateProductSerializer
    permission_classes = [IsAuthenticated, IsObjectOwner]

    def put(self, request, product_slug):
        product_data = request.data
        product = get_object_or_404(Product, slug=product_slug)

        # check object permission
        self.get_object(Store, slug=product.store.slug)

        product_update_serializer = self.get_serializer(
            product, data=product_data, partial=True
        )
        product_update_serializer.is_valid(raise_exception=True)
        product_update_serializer.save()

        return Response(
            {
                "message": "Product has been updated",
                "data": ProductSerializer(product_update_serializer.instance).data,
            }
        )

    def delete(self, request, product_slug):
        product = get_object_or_404(Product, slug=product_slug)

        # check object permission
        self.get_object(Store, slug=product.store.slug)

        product.delete()

        return Response(
            {"message": "Product has been deleted"}, status=HTTP_204_NO_CONTENT
        )
