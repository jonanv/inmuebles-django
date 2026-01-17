from django.contrib import admin

from .models import Empresa, Edificacion, Comentario

# Register your models here.
admin.site.register(Edificacion)
admin.site.register(Empresa)
admin.site.register(Comentario)