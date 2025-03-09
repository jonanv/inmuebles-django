from rest_framework import serializers

# Imports
from ..models import Inmueble

class InmuebleSerializer(serializers.Serializer):
    id = serializers.IntegerField(read_only=True)
    nombre = serializers.CharField(max_length=100)
    direccion = serializers.CharField(max_length=200)
    pais = serializers.CharField(max_length=100)
    ciudad = serializers.CharField(max_length=100)
    descripcion = serializers.CharField()
    imagen = serializers.CharField(max_length=300)
    active = serializers.BooleanField(default=True)

    def create(self, validated_data):
        return Inmueble.objects.create(**validated_data)
    
    def update(self, instance, validated_data):
        instance.nombre = validated_data.get('nombre', instance.nombre)
        instance.direccion = validated_data.get('direccion', instance.direccion)
        instance.pais = validated_data.get('pais', instance.pais)
        instance.ciudad = validated_data.get('ciudad', instance.ciudad)
        instance.descripcion = validated_data.get('descripcion', instance.descripcion)
        instance.imagen = validated_data.get('imagen', instance.imagen)
        instance.active = validated_data.get('active', instance.active)
        instance.save()
        return instance
    
    def delete(self, instance):
        instance.delete()
        return instance