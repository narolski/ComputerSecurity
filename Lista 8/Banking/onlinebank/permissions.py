from rest_framework import permissions

class IsOwner(permissions.BasePermission):
    message = "The logged in user cannot access requested data because he's not the owner"

    def has_object_permissions(self, request, view, object):
        return request.user == object.from_account