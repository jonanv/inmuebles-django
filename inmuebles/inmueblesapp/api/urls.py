from django.urls import path

# Imports
from . import views

app_name = 'inmueblesapp'
# urlpatterns = [
#     path('list/', views.list_all_inmuebles, name='list-all-inmuebles'),
#     path('<int:id>/', views.get_inmueble_by_id, name='get-inmueble-by-id'),
# ]

urlpatterns = [
    path('list/', views.InmueblesListAV.as_view(), name='list-all-inmuebles'),
    path('<int:id>/', views.InmuebleDetailAV.as_view(), name='get-inmueble-by-id'),
]