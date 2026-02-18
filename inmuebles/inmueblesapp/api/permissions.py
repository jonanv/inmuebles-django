from rest_framework import permissions

class AdminOrReadOnly(permissions.IsAdminUser):
    # Permite acceso de solo lectura a usuarios no autenticados, pero requiere permisos de administrador para métodos que modifican datos (POST, PUT, DELETE)
    def has_permission(self, request, view) -> bool:
        if request.method == 'GET':
            return True
        
        staff_permission = bool(request.user and request.user.is_staff)
        return staff_permission
    
class ComentarioUserOrReadOnly(permissions.BasePermission):
    # Permite acceso de solo lectura a usuarios no autenticados, pero permite a los usuarios autenticados modificar solo sus propios comentarios
    def has_object_permission(self, request, view, obj) -> bool:
        if request.method in permissions.SAFE_METHODS:
            return True
        else:
            return obj.comentario_user == request.user