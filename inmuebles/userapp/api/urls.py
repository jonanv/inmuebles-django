from django.urls import path
from rest_framework.authtoken.views import obtain_auth_token

# Imports
from . import views

urlpatterns = [
    path('login/', obtain_auth_token, name='login'),  # Endpoint para obtener el token de autenticación
    path('registrar/', views.registrar_view, name='registrar'),  # Endpoint para registrar un nuevo usuario
]