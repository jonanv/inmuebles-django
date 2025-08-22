from django.urls import path

# Imports
from . import views

app_name = 'inmueblesapp'
urlpatterns = [
    path('list/', views.InmueblesListAV.as_view(), name='list-all-inmuebles'),
    path('<int:id>/', views.InmuebleDetailAV.as_view(), name='get-inmueble-by-id'),
]