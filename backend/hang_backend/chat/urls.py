from django.urls import path

from . import views

app_name = "chats"

urlpatterns = [
    path("direct_message", views.ListCreateDirectMessageView.as_view(), name="DirectMessage"),
    path("direct_message/<str:pk>", views.RetrieveDirectMessageView.as_view(), name="DirectMessage"),
    path("group_chat", views.ListCreateGroupChatView.as_view(), name="GroupChat"),
    path("group_chat/<str:pk>", views.RetrieveUpdateDestroyGroupChatView.as_view(), name="GroupChat"),
]
