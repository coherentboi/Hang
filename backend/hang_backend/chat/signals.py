from django.db.models.signals import post_save
from django.dispatch import receiver

from chat.models import Message, UserMessage, MessageChannelUsers, GroupChat
from notifications.models import Notification
from real_time_ws.utils import send_rtws_message


def get_message_prefix(content):
    if len(content) > 35:
        prefix = content[:35]
        content = prefix + "..."
    return content


@receiver(post_save)
def message_post_save(sender, instance, created, **kwargs):
    if not issubclass(sender, Message) or not created:
        return
    mcu_set = MessageChannelUsers.objects.filter(message_channel=instance.message_channel).all()
    sender = instance.user if isinstance(instance, UserMessage) else None
    for mcu in mcu_set:
        if mcu.user == sender:
            continue
        if mcu.has_read:
            if instance.message_channel.channel_type == "DM":
                Notification.objects.create_notification(user=mcu.user,
                                                         title=instance.message_channel.users.exclude(mcu.user.id),
                                                         description=get_message_prefix(instance.content))
                send_rtws_message(mcu.user, "direct_message")
            else:
                assert isinstance(instance.message_channel, GroupChat)
                Notification.objects.create_notification(user=mcu.user,
                                                         title=instance.message_channel.name,
                                                         description=get_message_prefix(instance.content))
                send_rtws_message(mcu.user, "group_chat")
        mcu.has_read = False
        mcu.save()
