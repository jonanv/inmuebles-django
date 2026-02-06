from django.db import models
from django.core.validators import MinValueValidator, MaxValueValidator

# Create your models here.

# Empresa model
class Empresa(models.Model):
    nombre = models.CharField(max_length=250)
    website = models.URLField(max_length=250)       # URLField para URLs
    active = models.BooleanField(default=True)
    create = models.DateTimeField(auto_now_add=True)
    modified = models.DateTimeField(auto_now=True)

    def __str__(self) -> str:
        return self.nombre

# Edificacion model
class Edificacion(models.Model):
    direccion = models.CharField(max_length=200)
    pais = models.CharField(max_length=100)
    ciudad = models.CharField(max_length=100)
    descripcion = models.TextField()
    imagen = models.CharField(max_length=300)
    active = models.BooleanField(default=True)
    empresa = models.ForeignKey(Empresa, on_delete=models.CASCADE, related_name="edificacionlist")
    create = models.DateTimeField(auto_now_add=True)
    modified = models.DateTimeField(auto_now=True)

    def __str__(self) -> str:
        return self.direccion
    
# Comentario model
class Comentario(models.Model):
    calificacion = models.PositiveBigIntegerField(validators=[MinValueValidator(1), MaxValueValidator(5)])
    texto = models.CharField(max_length=200, null=True)
    edificacion = models.ForeignKey(Edificacion, on_delete=models.CASCADE, related_name="comentarios")
    active = models.BooleanField(default=True)
    create = models.DateTimeField(auto_now_add=True)
    modified = models.DateTimeField(auto_now=True)

    def __str__(self) -> str:
        return str(self.calificacion) + " - " + self.edificacion.direccion