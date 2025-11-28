from django.urls import path

# Imports
from . import views

app_name = 'inmueblesapp'
urlpatterns = [
    path('list/', views.EdificacionesListAV.as_view(), name='list-all-inmuebles'),          # /inmueble/list/
    path('<int:id>/', views.EdificacionDetailAV.as_view(), name='get-inmueble-by-id'),     # /inmueble/1/
    path('empresa/list/', views.EmpresaListAV.as_view(), name='list-all-empresas'),     # /inmueble/empresa/list/
]