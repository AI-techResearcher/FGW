from django.urls import path
from rest_framework_simplejwt.views import TokenRefreshView

from .views import EmailTokenObtainPairView, RegisterView,reset_password

urlpatterns = [
    path('register', RegisterView.as_view(), name='token_obtain_pair'),
    path('login', EmailTokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('login/refresh', TokenRefreshView.as_view(), name='token_refresh'),

    path('reset-password', reset_password, name='reset_password'),
]
