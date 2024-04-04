from rest_framework import serializers
from exceptions import  Exception409,Exception400
from .models import Chat

class ChatSerializer(serializers.ModelSerializer):
    class Meta:
        model = Chat
        fields = "__all__"
        