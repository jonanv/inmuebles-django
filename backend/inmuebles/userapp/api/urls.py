from django.urls import path
from rest_framework.authtoken.views import obtain_auth_token
from rest_framework_simplejwt.views import TokenObtainPairView, TokenRefreshView

# Imports
from . import views

urlpatterns = [
    path('login/', obtain_auth_token, name='login'),  # Endpoint para obtener el token de autenticación
    path('login-app/', views.login_view, name='login-app'),  # Endpoint para iniciar sesión y obtener el token JWT Personalizado

    path('registrar/', views.registrar_view, name='registrar'),  # Endpoint para registrar un nuevo usuario
    path('logout/', views.logout_view, name='logout'),  # Endpoint para cerrar sesión (eliminar el token)
    
    path('api/token/', TokenObtainPairView.as_view(), name='token_obtain_pair'),  # Endpoint para obtener el token JWT
    path('api/token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),  # Endpoint para refrescar el token JWT
]