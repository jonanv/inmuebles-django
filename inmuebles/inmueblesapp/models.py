from django.db import models

# Create your models here.
# Edificacion model
class Edificacion(models.Model):
    direccion = models.CharField(max_length=200)
    pais = models.CharField(max_length=100)
    ciudad = models.CharField(max_length=100)
    descripcion = models.TextField()
    imagen = models.CharField(max_length=300)
    active = models.BooleanField(default=True)
    create = models.DateTimeField(auto_now_add=True)
    modified = models.DateTimeField(auto_now=True)

    def __str__(self) -> str:
        return self.direccion
    
# Empresa model
class Empresa(models.Model):
    nombre = models.CharField(max_length=250)
    website = models.URLField(max_length=250)       # URLField para URLs
    active = models.BooleanField(default=True)
    create = models.DateTimeField(auto_now_add=True)
    modified = models.DateTimeField(auto_now=True)

    def __str__(self) -> str:
        return self.nombre