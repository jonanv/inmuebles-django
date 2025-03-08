from django.db import models

# Create your models here.
# Inmueble model
class Inmueble(models.Model):
    nombre = models.CharField(max_length=100)
    direccion = models.CharField(max_length=200)
    pais = models.CharField(max_length=100)
    ciudad = models.CharField(max_length=100)
    descripcion = models.TextField()
    imagen = models.ImageField(upload_to='inmuebles', null=True, blank=True)
    active = models.BooleanField(default=True)

    def __str__(self):
        return self.nombre