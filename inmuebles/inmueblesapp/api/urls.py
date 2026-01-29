from django.urls import path

# Imports
from . import views

app_name = 'inmueblesapp'
urlpatterns = [
    path('edificacion/', views.EdificacionesListAV.as_view(), name='list-all-inmuebles'),                  # /inmueble/list/
    path('edificacion/<int:pk>/', views.EdificacionDetailAV.as_view(), name='get-inmueble-by-id'),              # /inmueble/1/
    
    path('empresa/', views.EmpresaListAV.as_view(), name='list-all-empresas'),                 # /inmueble/empresa/list/
    path('empresa/<int:pk>/', views.EmpresaDetailAV.as_view(), name='get-empresa-by-id'),           # /inmueble/empresa/1/
    
    path('edificacion/<int:pk>/comentario/', views.ComentarioList.as_view(), name='list-all-comentarios'),       # /inmueble/comentario/list/
    path('edificacion/comentario/<int:pk>/', views.ComentarioDetail.as_view(), name='get-comentario-by-id'), # /inmueble/comentario/list/
]