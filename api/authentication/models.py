from django.contrib.auth.base_user import BaseUserManager
from django.db import models
from django.contrib.auth.models import AbstractUser
from django.utils.translation import gettext_lazy as _

class CustomUserManager(BaseUserManager):

    def create_user(self, email, password, **extra_fields):
        """
        Create and save a User with the given email and password.
        """
        if not email:
            raise ValueError(_('The Email must be set'))
        email = self.normalize_email(email)
        user = self.model(email=email, **extra_fields)
        user.set_password(password)
        user.save()
        return user

    def create_superuser(self, email, password, **extra_fields):
        """
        Create and save a SuperUser with the given email and password.
        """
        extra_fields.setdefault('is_staff', True)
        extra_fields.setdefault('is_superuser', True)
        extra_fields.setdefault('is_active', True)

        if extra_fields.get('is_staff') is not True:
            raise ValueError(_('Superuser must have is_staff=True.'))
        if extra_fields.get('is_superuser') is not True:
            raise ValueError(_('Superuser must have is_superuser=True.'))
        return self.create_user(email, password, **extra_fields)


class User(AbstractUser):
    username=models.CharField(_('Username'),max_length=255,null=True,blank=True)
    name=models.CharField(_('Name'),max_length=255,null=True,blank=True)
    email = models.EmailField(_('Email Address'), unique=True)
    address=models.CharField(_('Address'),max_length=255,null=True,blank=True)
    city=models.CharField(_('City'),max_length=255,null=True,blank=True)
    postal_code=models.CharField(_('Postal Code'),max_length=255,null=True,blank=True)
    country=models.CharField(_('Country'),max_length=255,null=True,blank=True)
    tax_id=models.CharField(_('Tax ID'),max_length=255,null=True,blank=True)
    working_location=models.CharField(_('Working Professional'),max_length=255,null=True,blank=True)
    institution=models.CharField(_('Educational Institution'),max_length=255,null=True,blank=True)
    # image=models.ImageField(upload_to ='/images/',default="authentication/images/default.jpg")
    created_at=models.DateTimeField(auto_now=True)
    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = []
    objects = CustomUserManager()

    def __str__(self):
        return self.email

    class Meta:
      db_table="users"
      verbose_name="User"

