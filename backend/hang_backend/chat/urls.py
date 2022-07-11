# chat/urls.py
from django.urls import path

from . import views

urlpatterns = [
    path('create_dm/', views.CreateDM.as_view(), name='CreateDM'),
    path('list_channels/', views.ListMessageChannels.as_view(), name='ListMessageChannels'),
]
