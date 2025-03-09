from django.http import JsonResponse
from rest_framework.response import Response
from rest_framework.decorators import api_view

# Imports
from ..models import Inmueble
from .serializers import InmuebleSerializer

# List all inmuebles
@api_view(['GET', 'POST'])
def list_all_inmuebles(request) -> Response:
    if request.method == 'GET':
        inmuebles = Inmueble.objects.all()
        serializer = InmuebleSerializer(inmuebles, many=True)
        return Response(serializer.data)
    elif request.method == 'POST':
        deserializer = InmuebleSerializer(data=request.data)
        if deserializer.is_valid():
            deserializer.save()
            return Response(deserializer.data, status=201)
        return Response(deserializer.errors, status=400)

# Get inmueble by id
@api_view(['GET'])
def get_inmueble_by_id(request, id) -> Response:
    inmueble = Inmueble.objects.get(id=id)
    serializer = InmuebleSerializer(inmueble)
    return Response(serializer.data)