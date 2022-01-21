from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated
from rest_framework.generics import get_object_or_404

from ecommerce.utils import View
from ecommerce.permissions import IsObjectOwner
from cart.models import Cart, CartItem
from cart.serializers import CartItemSerializer


class CartAPI(View):
    permission_classes = [IsAuthenticated]
    serializer_class = CartItemSerializer

    def get(self, request):
        cart_items = Cart(user=request.user).cart_items
        serialized_cart_items = self.get_serializer(cart_items, many=True)

        return Response({"data": serialized_cart_items.data})


class CartAddItemAPI(View):

    permission_classes = [IsAuthenticated]
    serializer_class = CartItemSerializer

    def post(self, request):
        cart_item_data = request.data

        cart_item_serializer = self.get_serializer(data=cart_item_data)
        cart_item_serializer.is_valid(raise_exception=True)
        cart_item_serializer.save(user=request.user)

        return Response({"data": cart_item_serializer.data})


class CartItemDetailsAPI(View):

    permission_classes = [IsAuthenticated, IsObjectOwner]
    serializer_class = CartItemSerializer

    def get(self, request, cart_item_uuid):
        cart_item = self.get_object(
            request.user,
            get_object_or_404(CartItem, id=cart_item_uuid),
            field_name="user",
        )

        serialized_cart_item = self.get_serializer(cart_item)

        return Response({"data": serialized_cart_item.data})


class CartUpdateItemAPI(View):

    permission_classes = [IsAuthenticated, IsObjectOwner]
    serializer_class = CartItemSerializer

    def put(self, request, cart_item_uuid):
        # check object permissions
        cart_item = self.get_object(
            CartItem,
            id=cart_item_uuid,
        )

        cart_item_data = request.data

        cart_item_serializer = self.get_serializer(
            cart_item, data=cart_item_data, partial=True
        )
        cart_item_serializer.is_valid(raise_exception=True)
        cart_item_serializer.save()

        return Response(
            {"data": cart_item_serializer.data, "message": "Cart item updated"}
        )

    def delete(self, request, cart_item_uuid):
        # check object permissions
        cart_item = self.get_object(
            CartItem,
            id=cart_item_uuid,
        )

        cart_item.delete()

        return Response({"message": "Cart item deleted"})
