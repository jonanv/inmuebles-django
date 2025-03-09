from django.http import JsonResponse
from rest_framework.response import Response
from rest_framework.decorators import api_view

# Imports
from ..models import Inmueble
from .serializers import InmuebleSerializer

# Create your views here.
@api_view(['GET'])
def list_all_inmuebles(request) -> Response:
    inmuebles = Inmueble.objects.all()
    serializer = InmuebleSerializer(inmuebles, many=True)
    return Response(serializer.data)

@api_view(['GET'])
def get_inmueble_by_id(request, id) -> Response:
    inmueble = Inmueble.objects.get(id=id)
    serializer = InmuebleSerializer(inmueble)
    return Response(serializer.data)