from django.urls import path

# Imports
from . import views

app_name = 'inmueblesapp'
urlpatterns = [
    path('list/', views.EdificacionesListAV.as_view(), name='list-all-inmuebles'),                  # /inmueble/list/
    path('<int:pk>/', views.EdificacionDetailAV.as_view(), name='get-inmueble-by-id'),              # /inmueble/1/
    path('empresa/list/', views.EmpresaListAV.as_view(), name='list-all-empresas'),                 # /inmueble/empresa/list/
    path('empresa/<int:pk>/', views.EmpresaDetailAV.as_view(), name='get-empresa-by-id'),           # /inmueble/empresa/1/
    path('comentario/list/', views.ComentarioListGAV.as_view(), name='list-all-comentarios'),       # /inmueble/comentario/list/
]