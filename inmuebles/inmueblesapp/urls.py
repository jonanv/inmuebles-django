from django.urls import path
from . import views

app_name = 'inmueblesapp'
urlpatterns = [
    path('list/', views.list_all_inmuebles, name='list-all-inmuebles'),
]