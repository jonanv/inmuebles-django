from rest_framework import serializers

# Imports
from ..models import Account

class RegistrarSerializer(serializers.ModelSerializer):
    password2 = serializers.CharField(style={'input_type': 'password'}, write_only=True)

    class Meta:
        model = Account
        fields = ['username', 'email', 'password', 'password2', 'first_name', 'last_name', 'phone_number']
        extra_kwargs = {
            'password': {'write_only': True}
        }

    def save(self) -> Account:
        password = self.validated_data['password']
        password2 = self.validated_data['password2']

        if password != password2:
            raise serializers.ValidationError({'password': 'Las contraseñas no coinciden.'})
        
        if Account.objects.filter(email=self.validated_data['email']).exists():
            raise serializers.ValidationError({'email': 'El correo electrónico ya está registrado.'})
        
        # account = User(
        #     email = self.validated_data['email'], 
        #     username = self.validated_data['username']
        # )

        account = Account.objects.create_user(
            username = self.validated_data['username'],
            email = self.validated_data['email'],
            password = self.validated_data['password'],
            first_name = self.validated_data['first_name'],
            last_name = self.validated_data['last_name'],
        )
        account.set_password = self.validated_data['password']
        account.phone_number = self.validated_data['phone_number']

        # account.set_password(password)
        account.save()
        return account