from rest_framework.response import Response
from rest_framework.decorators import api_view
from rest_framework import status

# Imports
from ..models import Inmueble
from .serializers import InmuebleSerializer

# List all inmuebles
@api_view(['GET', 'POST'])
def list_all_inmuebles(request) -> Response:
    if request.method == 'GET':
        inmuebles = Inmueble.objects.all()
        serializer = InmuebleSerializer(inmuebles, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)
    elif request.method == 'POST':
        deserializer = InmuebleSerializer(data=request.data)
        if deserializer.is_valid():
            deserializer.save()
            return Response(deserializer.data, status=status.HTTP_201_CREATED)
        return Response(deserializer.errors, status=status.HTTP_400_BAD_REQUEST)

# Get inmueble by id
@api_view(['GET', 'PUT', 'DELETE'])
def get_inmueble_by_id(request, id) -> Response:
    if request.method == 'GET':
        try:
            inmueble = Inmueble.objects.get(id=id)
            serializer = InmuebleSerializer(inmueble)
            return Response(serializer.data, status=status.HTTP_200_OK)
        except Inmueble.DoesNotExist:
            return Response({'error': 'El inmueble no existe'}, status=status.HTTP_404_NOT_FOUND)      
    elif request.method == 'PUT':
        try:
            inmueble = Inmueble.objects.get(id=id)
            deserializer = InmuebleSerializer(inmueble, data=request.data)
            if deserializer.is_valid():
                deserializer.save()
                return Response(deserializer.data, status=status.HTTP_200_OK)
            return Response(deserializer.errors, status=status.HTTP_400_BAD_REQUEST)
        except Inmueble.DoesNotExist:
            return Response({'error': 'El inmueble no existe'}, status=status.HTTP_404_NOT_FOUND)
    elif request.method == 'DELETE':
        try:
            inmueble = Inmueble.objects.get(id=id)
            inmueble.delete()
            return Response({'message': 'Inmueble eliminado con éxito'}, status=status.HTTP_204_NO_CONTENT)
        except Inmueble.DoesNotExist:
            return Response({'error': 'El inmueble no existe'}, status=status.HTTP_404_NOT_FOUND)