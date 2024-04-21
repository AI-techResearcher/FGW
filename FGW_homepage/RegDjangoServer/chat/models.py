from django.db import models
from django.contrib.auth import get_user_model
from django.contrib.auth.models import User
User = get_user_model()


# Create your models here.
class Chat(models.Model):
    user = models.ForeignKey(User, on_delete = models.CASCADE)
    chat_history = models.JSONField(default=dict)

    class Meta:
        verbose_name = ("Chat")
        verbose_name_plural = ("Chats")

    def __str__(self):
        return str(self.user)

