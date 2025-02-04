from rest_framework import permissions

# class IsOwner(permissions.BasePermission):

#     def has_permission(self, request, view, obj):

#         if request.method == "DELETE":

#             _id = request.parser_context.get("kwargs", {}).get("_id")
#             addedBy = request.query_params.get("userId")

#             response = Request.get({"_id": _id})

#             if response.get("userId") == addedBy:
#                 return True
#             return False

#     def has_delete_permission(self, request, obj=None):
#         return request.user.is_superuser


class IsOwner(permissions.BasePermission):

    def has_object_permission(self, request, view, obj):

        if request.method == "DELETE":
            return True
        return obj.userId == request.user

    
    def has_delete_permission(self, request, obj=None):
        return request.user.is_superuser


class IsRoomUser(permissions.BasePermission):

    def has_permission(self, request, view):

        if request.user.is_staff:
            return True
        return super().has_permission(request, view)