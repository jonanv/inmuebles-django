from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status, mixins, generics

# Imports
from ..models import Edificacion, Empresa, Comentario
from .serializers import EdificacionSerializer, EmpresaSerializer, ComentarioSerializer

# COMPONENTS CLASS WITH APIView
# EdificacionesListAV: edificaciones list Api View
class EdificacionesListAV(APIView):             # APIView reconoce los métodos HTTP (get, post, put, delete, etc) por eso no necesita decoradores
    def get(self, request) -> Response:
        edificaciones = Edificacion.objects.all()
        serializer = EdificacionSerializer(edificaciones, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)
    
    def post(self, request) -> Response:
        deserializer = EdificacionSerializer(data=request.data)
        if deserializer.is_valid():
            deserializer.save()
            return Response(deserializer.data, status=status.HTTP_201_CREATED)
        return Response(deserializer.errors, status=status.HTTP_400_BAD_REQUEST)

# EdificacionDetailAV: edificaciones detail Api View
class EdificacionDetailAV(APIView):
    def get(self, request, pk) -> Response:
        try:
            edificacion = Edificacion.objects.get(pk=pk)
        except Edificacion.DoesNotExist:
            return Response({'error': 'El inmueble no existe'}, status=status.HTTP_404_NOT_FOUND)
        
        serializer = EdificacionSerializer(edificacion)
        return Response(serializer.data, status=status.HTTP_200_OK)

    def put(self, request, pk) -> Response:
        try:
            edificacion = Edificacion.objects.get(pk=pk)
        except Edificacion.DoesNotExist:
            return Response({'error': 'El inmueble no existe'}, status=status.HTTP_404_NOT_FOUND)
        
        deserializer = EdificacionSerializer(edificacion, data=request.data)
        if deserializer.is_valid():
            deserializer.save()
            return Response(deserializer.data, status=status.HTTP_200_OK)
        return Response(deserializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def delete(self, request, pk) -> Response:
        try:
            edificacion = Edificacion.objects.get(pk=pk)
        except Edificacion.DoesNotExist:
            return Response({'error': 'El inmueble no existe'}, status=status.HTTP_404_NOT_FOUND)
        
        edificacion.delete()
        return Response({'message': 'Inmueble eliminado con éxito'}, status=status.HTTP_204_NO_CONTENT)
    
class EmpresaListAV(APIView):
    def get(self, request) -> Response:
        empresas = Empresa.objects.all()
        serializer = EmpresaSerializer(
            empresas, 
            many=True, 
            context={'request': request} # Necesario para HyperlinkedRelatedField
        )
        return Response(serializer.data, status=status.HTTP_200_OK)
    
    def post(self, request) -> Response:
        deserializer = EmpresaSerializer(data=request.data)
        if deserializer.is_valid():
            deserializer.save()
            return Response(deserializer.data, status=status.HTTP_201_CREATED)
        return Response(deserializer.errors, status=status.HTTP_400_BAD_REQUEST)
    
class EmpresaDetailAV(APIView):
    def get(self, request, pk) -> Response:
        try:
            empresa = Empresa.objects.get(pk=pk)
        except Empresa.DoesNotExist:
            return Response({'error': 'La empresa no existe'}, status=status.HTTP_404_NOT_FOUND)
        
        serializer = EmpresaSerializer(empresa, context={'request': request}) # Necesario para HyperlinkedRelatedField
        return Response(serializer.data, status=status.HTTP_200_OK)

    def put(self, request, pk) -> Response:
        try:
            empresa = Empresa.objects.get(pk=pk)
        except Empresa.DoesNotExist:
            return Response({'error': 'La empresa no existe'}, status=status.HTTP_404_NOT_FOUND)
        
        deserializer = EmpresaSerializer(empresa, data=request.data)
        if deserializer.is_valid():
            deserializer.save()
            return Response(deserializer.data, status=status.HTTP_200_OK)
        return Response(deserializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def delete(self, request, pk) -> Response:
        try:
            empresa = Empresa.objects.get(pk=pk)
        except Empresa.DoesNotExist:
            return Response({'error': 'La empresa no existe'}, status=status.HTTP_404_NOT_FOUND)
        
        empresa.delete()
        return Response({'message': 'Empresa eliminada con éxito'}, status=status.HTTP_204_NO_CONTENT)

class ComentarioListGAV(mixins.ListModelMixin, mixins.CreateModelMixin, generics.GenericAPIView):
    # Metodos GET y POST para Comentarios utilizando mixins y generics
    # Metodos genericos con mixins -> ListModelMixin (GET) y CreateModelMixin (POST)
    queryset = Comentario.objects.all()         # queryset de todos los comentarios, siempre es necesario definirlo en GenericAPIView
    serializer_class = ComentarioSerializer     # serializer_class Serializer para Comentario, siempre es necesario definirlo en GenericAPIView

    def get(self, request, *args, **kwargs) -> Response:
        return self.list(request, *args, **kwargs)
    
    def post(self, request, *args, **kwargs) -> Response:
        return self.create(request, *args, **kwargs)
    
# class ComentarioListAV(APIView):
#     def get(self, request) -> Response:
#         comentarios = Comentario.objects.all()
#         serializer = ComentarioSerializer(comentarios, many=True)
#         return Response(serializer.data, status=status.HTTP_200_OK)
    
#     def post(self, request) -> Response:
#         deserializer = ComentarioSerializer(data=request.data)
#         if deserializer.is_valid():
#             deserializer.save()
#             return Response(deserializer.data, status=status.HTTP_201_CREATED)
#         return Response(deserializer.errors, status=status.HTTP_400_BAD_REQUEST)
# FUNCTIONS WITH SERIALIZERS
# from rest_framework.decorators import api_view

# # List all inmuebles
# @api_view(['GET', 'POST'])
# def list_all_inmuebles(request) -> Response:
#     if request.method == 'GET':
#         inmuebles = Inmueble.objects.all()
#         serializer = InmuebleSerializer(inmuebles, many=True)
#         return Response(serializer.data, status=status.HTTP_200_OK)
#     elif request.method == 'POST':
#         deserializer = InmuebleSerializer(data=request.data)
#         if deserializer.is_valid():
#             deserializer.save()
#             return Response(deserializer.data, status=status.HTTP_201_CREATED)
#         return Response(deserializer.errors, status=status.HTTP_400_BAD_REQUEST)

# # Get inmueble by id
# @api_view(['GET', 'PUT', 'DELETE'])
# def get_inmueble_by_id(request, id) -> Response:
#     if request.method == 'GET':
#         try:
#             inmueble = Inmueble.objects.get(id=id)
#             serializer = InmuebleSerializer(inmueble)
#             return Response(serializer.data, status=status.HTTP_200_OK)
#         except Inmueble.DoesNotExist:
#             return Response({'error': 'El inmueble no existe'}, status=status.HTTP_404_NOT_FOUND)      
#     elif request.method == 'PUT':
#         try:
#             inmueble = Inmueble.objects.get(id=id)
#             deserializer = InmuebleSerializer(inmueble, data=request.data)
#             if deserializer.is_valid():
#                 deserializer.save()
#                 return Response(deserializer.data, status=status.HTTP_200_OK)
#             return Response(deserializer.errors, status=status.HTTP_400_BAD_REQUEST)
#         except Inmueble.DoesNotExist:
#             return Response({'error': 'El inmueble no existe'}, status=status.HTTP_404_NOT_FOUND)
#     elif request.method == 'DELETE':
#         try:
#             inmueble = Inmueble.objects.get(id=id)
#             inmueble.delete()
#             return Response({'message': 'Inmueble eliminado con éxito'}, status=status.HTTP_204_NO_CONTENT)
#         except Inmueble.DoesNotExist:
#             return Response({'error': 'El inmueble no existe'}, status=status.HTTP_404_NOT_FOUND)