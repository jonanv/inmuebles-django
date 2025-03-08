from django.urls import path
from . import views

app_name = 'inmueblesapp'
urlpatterns = [
    path('list/', views.list_inmuebles, name='inmueble-list'),
]