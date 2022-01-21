from rest_framework.permissions import BasePermission


class IsObjectOwner(BasePermission):
    """
    Object-level permission to only allow creators of an object to edit it.
    """

    message = "You must be the creator of this object."

    def has_object_permission(self, request, view, obj):
        field_name = "owner"
        obj_owner = getattr(obj, field_name)
        return obj_owner == request.user
