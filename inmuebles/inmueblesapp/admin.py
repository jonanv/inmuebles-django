from django.contrib import admin

from .models import Empresa, Inmueble

# Register your models here.
admin.site.register(Inmueble)
admin.site.register(Empresa)