from django.contrib.auth import get_user_model
from rest_framework import serializers
from rest_framework_simplejwt.serializers import TokenObtainPairSerializer 
from exceptions import  Exception409,Exception400
User = get_user_model()

class MyTokenObtainPairSerializer(TokenObtainPairSerializer):
    @classmethod
    def get_token(cls, user):
        token = super(MyTokenObtainPairSerializer, cls).get_token(user)

        # Add custom claims
        token['id'] = user.id
        token['email'] = user.email
        # token['image'] = user.image
        return token

    # def validate_password(self, value):
    #     if len(value)<8:
    #         raise Exception400("Password should be 5 character long!")
    #     return value


class UserSerializer(serializers.ModelSerializer):
    email = serializers.EmailField()
    # created_at=serializers.DateTimeField(read_only=True, format="%A, %d %B %Y, %I:%M %p")
    class Meta:
        model = User
        fields = ('name','email', 'password')
        
    def validate_email(self, value):
        lower_email = value.lower()
        if User.objects.filter(email__iexact=lower_email).exists():
            raise Exception409("user with this email address already exists.")
        return lower_email

    def validate_password(self, value):
        if len(value)<5:
            raise Exception400("Password should be 5 character long!")
        return value

    def create(self, validated_data):
        user = User.objects.create(
            name=validated_data['name'],
            email=validated_data['email'],
        )
        user.set_password(validated_data['password'])
        user.save()
        return user