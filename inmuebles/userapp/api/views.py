from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status

# Imports
from .serializers import RegistrarSerializer

@api_view(['POST'])
def registrar_view(request):
    if request.method == 'POST':
        serializer = RegistrarSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)