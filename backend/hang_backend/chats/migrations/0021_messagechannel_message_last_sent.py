# Generated by Django 4.0.6 on 2022-08-23 18:13

from django.db import migrations, models
import django.utils.timezone


class Migration(migrations.Migration):

    dependencies = [
        ('chats', '0020_alter_groupchat_owner_alter_message_user'),
    ]

    operations = [
        migrations.AddField(
            model_name='messagechannel',
            name='message_last_sent',
            field=models.DateTimeField(auto_now_add=True, default=django.utils.timezone.now),
            preserve_default=False,
        ),
    ]
