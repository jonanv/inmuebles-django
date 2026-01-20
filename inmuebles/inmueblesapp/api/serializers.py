from rest_framework import serializers

# Imports
from ..models import Edificacion, Empresa, Comentario

# Serializer with ModelSerializer
class ComentarioSerializer(serializers.ModelSerializer):
    class Meta:
        model = Comentario
        fields = '__all__'
        
class EdificacionSerializer(serializers.ModelSerializer):  # ModelSerializer hereda de Serializer, por lo que hereda todas sus funcionalidades, se caracteriza por mapear automáticamente los campos del modelo
    # longitud_direccion = serializers.SerializerMethodField()    # Campo adicional que no existe en el modelo, se crea con SerializerMethodField
    comentarios = ComentarioSerializer(many=True, read_only=True)  # Nested Serializer -> Muestra todos los detalles de cada Comentario asociado a la Edificacion

    class Meta:
        model = Edificacion
        fields = '__all__'          # Indica que se van a serializar todos los campos del modelo
        # fields = ['id', 'nombre', 'pais', 'descripcion', 'imagen', 'active']
        # exclude = ['id']

class EmpresaSerializer(serializers.HyperlinkedModelSerializer):
    url = serializers.HyperlinkedIdentityField(view_name='inmueblesapp:get-empresa-by-id')
    
    edificacionlist = EdificacionSerializer(many=True, read_only=True)  # Nested Serializer -> Muestra todos los detalles de cada Edificacion asociada a la Empresa
    # edificacionlist = serializers.StringRelatedField(many=True)         # Muestra el __str__ de cada Edificacion asociada a la Empresa
    # edificacionlist = serializers.PrimaryKeyRelatedField(many=True, read_only=True)         # Muestra solo los IDs de cada Edificacion asociada a la Empresa
    # edificacionlist = serializers.HyperlinkedRelatedField(
    #     many=True, 
    #     read_only=True, 
    #     view_name='inmueblesapp:get-inmueble-by-id' # Debe llevar el app_name definido en urls.py
    # )  # Muestra enlaces a los detalles de cada Edificacion asociada a la Empresa

    class Meta:
        model = Empresa
        fields = '__all__'






# Methods for InmuebleSerializer

    # def get_longitud_direccion(self, object):
    #     cantidad_caracteres = len(object.direccion)
    #     return cantidad_caracteres

    # def validate(self, data):
    #     if data['direccion'] == data['pais']:
    #         raise serializers.ValidationError('La dirección no puede ser igual al país')
    #     return data
        
    # def validate_imagen(self, data):
    #     if len(data) < 2:
    #         raise serializers.ValidationError('La url de la imagen es demasiado corta')
    #     return data









# Serializer with Core Arguments

# def column_long_validator(value):
#     if len(value) < 2:
#         raise serializers.ValidationError('El valor es demasiado corto')

# class InmuebleSerializer(serializers.Serializer):
#     id = serializers.IntegerField(read_only=True)         # Core Arguments -> read_only=True
#     nombre = serializers.CharField()
#     direccion = serializers.CharField(validators=[column_long_validator])
#     pais = serializers.CharField(validators=[column_long_validator])
#     ciudad = serializers.CharField()
#     descripcion = serializers.CharField()
#     imagen = serializers.CharField()
#     active = serializers.BooleanField(default=True)       # Core Arguments -> default=True

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
    
#     def validate(self, data):                   # Es una función preexistente en serializers.Serializer, acá se está sobreescribiendo
#         if data['direccion'] == data['pais']:
#             raise serializers.ValidationError('La dirección no puede ser igual al país')
#         return data
        
#     def validate_imagen(self, data):           # validate solo para el campo imagen validate_<nombre_campo>
#         if len(data) < 2:
#             raise serializers.ValidationError('La url de la imagen es demasiado corta')
#         return data