from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
# from rest_framework.authtoken.models import Token
from rest_framework_simplejwt.tokens import RefreshToken
from django.contrib import auth

# Imports
from .serializers import RegistrarSerializer

@api_view(['POST'])
def registrar_view(request) -> Response:
    if request.method == 'POST':
        serializer = RegistrarSerializer(data=request.data)
        data = {}

        if serializer.is_valid():
            account = serializer.save()
            data['response'] = 'Usuario registrado exitosamente.'
            data['username'] = account.username
            data['email'] = account.email
            data['first_name'] = account.first_name
            data['last_name'] = account.last_name
            data['phone_number'] = account.phone_number

            # token = Token.objects.get(user=account).key
            # data['token'] = token

            refresh = RefreshToken.for_user(account)
            data['token'] = {
                'refresh': str(refresh),
                'access': str(refresh.access_token)
            }

            return Response(data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    
@api_view(['POST'])
def logout_view(request) -> Response:
    if request.method == 'POST':
        request.user.auth_token.delete()  # Elimina el token del usuario para cerrar sesión
        return Response({'response': 'Sesión cerrada exitosamente.'}, status=status.HTTP_200_OK)
    return Response({'error': 'Método no permitido.'}, status=status.HTTP_405_METHOD_NOT_ALLOWED)

@api_view(['POST'])
def login_view(request) -> Response:
    data = {}
    if request.method == 'POST':
        email = request.data.get('email')
        password = request.data.get('password')

    account = auth.authenticate(email=email, password=password)

    if account is not None:
        data['response'] = 'Inicio de sesión exitoso.'
        data['username'] = account.username
        data['email'] = account.email
        data['first_name'] = account.first_name
        data['last_name'] = account.last_name
        data['phone_number'] = account.phone_number

        refresh = RefreshToken.for_user(account)
        data['token'] = {
            'refresh': str(refresh),
            'access': str(refresh.access_token)
        }

        return Response(data, status=status.HTTP_200_OK)
    return Response({'error': 'Credenciales incorrectas.'}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)