from rest_framework import permissions

class AdminOrReadOnly(permissions.IsAdminUser):
    # Permite acceso de solo lectura a usuarios no autenticados, pero requiere permisos de administrador para métodos que modifican datos (POST, PUT, DELETE)
    def has_permission(self, request, view) -> bool:
        if request.method == 'GET':
            return True
        
        staff_permission = bool(request.user and request.user.is_staff)
        return staff_permission