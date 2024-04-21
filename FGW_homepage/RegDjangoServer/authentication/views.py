from rest_framework.response import Response
from rest_framework.status import HTTP_201_CREATED, HTTP_400_BAD_REQUEST
from rest_framework import status
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated,AllowAny
from rest_framework.views import APIView
from rest_framework_simplejwt.views import TokenObtainPairView
from exceptions import Exception404,Exception400
from .serializers import UserSerializer, MyTokenObtainPairSerializer
from django.contrib.auth.hashers import make_password
from django.contrib.auth import update_session_auth_hash
from django.contrib.auth import get_user_model
from django.contrib.auth.models import User
User = get_user_model()




# Create your views here.
class RegisterView(APIView):
    http_method_names = ['post']
    def post(self, *args, **kwargs):
        serializer = UserSerializer(data=self.request.data)
        if serializer.is_valid():
            get_user_model().objects.create_user(**serializer.validated_data)
            # raise Exception201(f"Account have Created with this {serializer.data['email']} email")
            return Response(status=HTTP_201_CREATED, data={'email': serializer.data['email'],'status_code':201})
        return Response(status=HTTP_400_BAD_REQUEST, data={'errors': serializer.errors})


class EmailTokenObtainPairView(TokenObtainPairView):
    permission_classes = (AllowAny,)
    serializer_class = MyTokenObtainPairSerializer




@api_view(['POST'])
# @permission_classes([IsAuthenticated])
def reset_password(request):
    if request.method == 'POST':
        user = User.objects.get(pk=request.data['user'])
        password = request.data.get('password')
        cpassword = request.data.get('cpassword')

        if not password or not cpassword:
            return Response({'error': 'Both current password and new password are required.'}, status=status.HTTP_400_BAD_REQUEST)


        if password !=cpassword:
            return Response({'error': 'Both passwords should be same!.'}, status=status.HTTP_400_BAD_REQUEST)


        # Update the password
        user.set_password(cpassword)
        user.save()

        # Update the session auth hash to prevent the user from being logged out
        update_session_auth_hash(request, user)

        return Response({'message': 'Password updated successfully.',"status":200}, status=status.HTTP_200_OK)

    return Response({'error': 'Invalid request method.'}, status=status.HTTP_400_BAD_REQUEST)
