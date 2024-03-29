# chats/routing.py
from django.urls import re_path

from . import consumers

# Registers the ChatConsumer.
websocket_urlpatterns = [
    re_path(r"ws/chats/(?P<room_name>\w+)/$", consumers.ChatConsumer.as_asgi()),
]
