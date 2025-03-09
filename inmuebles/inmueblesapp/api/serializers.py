from rest_framework import serializers

class InmuebleSerializer(serializers.Serializer):
    id = serializers.IntegerField(read_only=True)
    nombre = serializers.CharField(max_length=100)
    direccion = serializers.CharField(max_length=200)
    pais = serializers.CharField(max_length=100)
    ciudad = serializers.CharField(max_length=100)
    descripcion = serializers.CharField()
    imagen = serializers.CharField(max_length=300)
    active = serializers.BooleanField(default=True)
