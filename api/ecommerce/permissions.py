from rest_framework.permissions import BasePermission

from accounts.models import User


class IsObjectOwner(BasePermission):
    """
    Object-level permission to only allow creators of an object to edit it.
    """

    message = "You must be the creator of this object."

    def has_object_permission(self, request, view, obj):
        obj_owner = getattr(obj, "owner")
        return obj_owner == request.user
