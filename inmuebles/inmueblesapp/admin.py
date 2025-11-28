from django.contrib import admin

from .models import Empresa, Edificacion

# Register your models here.
admin.site.register(Edificacion)
admin.site.register(Empresa)