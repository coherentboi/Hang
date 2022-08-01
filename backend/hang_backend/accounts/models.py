from django.contrib.auth.models import User
from django.db import models


class FriendRequest(models.Model):
    from_user = models.ForeignKey(User, on_delete=models.CASCADE, related_name="sent_friend_requests")
    to_user = models.ForeignKey(User, on_delete=models.CASCADE, related_name="received_friend_requests")
    declined = models.BooleanField(default=False)  # Shows whether the friend request has been declined by `to_user`.


class EmailAuthToken(models.Model):
    id = models.CharField(max_length=20, primary_key=True)
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    created_at = models.DateTimeField(auto_now_add=True)


class UserDetails(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE, primary_key=True)
    is_verified = models.BooleanField(default=False)  # Shows whether the user has been verified by email.

    friends = models.ManyToManyField(User, related_name="+")
    blocked_users = models.ManyToManyField(User, related_name="+")



# TODO: hang requests
# time, location, budget, user list, needs and tasks
#
