from rest_framework import serializers

# Imports
from ..models import Inmueble

class InmuebleSerializer(serializers.ModelSerializer):
    class Meta:
        model = Inmueble
        fields = '__all__'

    def validate(self, data):
        if data['direccion'] == data['pais']:
            raise serializers.ValidationError('La dirección no puede ser igual al país')
        return data
        
    def validate_imagen(self, data):
        if len(data) < 2:
            raise serializers.ValidationError('La url de la imagen es demasiado corta')
        return data






# def column_long_validator(value):
#     if len(value) < 2:
#         raise serializers.ValidationError('El valor es demasiado corto')

# class InmuebleSerializer(serializers.Serializer):
#     id = serializers.IntegerField(read_only=True)
#     nombre = serializers.CharField()
#     direccion = serializers.CharField(validators=[column_long_validator])
#     pais = serializers.CharField(validators=[column_long_validator])
#     ciudad = serializers.CharField()
#     descripcion = serializers.CharField()
#     imagen = serializers.CharField()
#     active = serializers.BooleanField(default=True)

#     def create(self, validated_data):
#         return Inmueble.objects.create(**validated_data)
    
#     def update(self, instance, validated_data):
#         instance.nombre = validated_data.get('nombre', instance.nombre)
#         instance.direccion = validated_data.get('direccion', instance.direccion)
#         instance.pais = validated_data.get('pais', instance.pais)
#         instance.ciudad = validated_data.get('ciudad', instance.ciudad)
#         instance.descripcion = validated_data.get('descripcion', instance.descripcion)
#         instance.imagen = validated_data.get('imagen', instance.imagen)
#         instance.active = validated_data.get('active', instance.active)
#         instance.save()
#         return instance
    
#     def delete(self, instance):
#         instance.delete()
#         return instance
    
#     def validate(self, data):
#         if data['direccion'] == data['pais']:
#             raise serializers.ValidationError('La dirección no puede ser igual al país')
#         return data
        
#     def validate_imagen(self, data):
#         if len(data) < 2:
#             raise serializers.ValidationError('La url de la imagen es demasiado corta')
#         return data