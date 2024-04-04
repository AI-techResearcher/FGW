from rest_framework.response import Response
from rest_framework.status import HTTP_201_CREATED, HTTP_400_BAD_REQUEST
from rest_framework.decorators import api_view,permission_classes
from exceptions import Exception404,Exception400
from .serializers import ChatSerializer
from .models import Chat

from django.contrib.auth import get_user_model
from django.contrib.auth.models import User
User = get_user_model()
import json
# Create your views here.

@api_view(['GET','POST'])
def chat(request):
    if request.method == 'GET':
        chat_history = Chat.objects.all()
        serializer = ChatSerializer(chat_history,many=True)
        data = {
            "status_code" : 200,
            "data":serializer.data
        }
        return Response(data)

    if request.method == 'POST':
        # user_id = request.data['user']
        # user = {}

        # if user_id:
        #     user = Chat.objects.get(pk=user_id)

        # request.data['user'] = user
        # data = {user:user,chat}
        # chat = request.data['chat']
        serializer = ChatSerializer(data = request.data)
        if serializer.is_valid():
            serializer.save()
            data = {
            "status_code" : 201,
            "data":serializer.data
            }
            return Response(data)
        return Response(serializer.errors)