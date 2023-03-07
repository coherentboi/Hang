# Generated by Django 4.1.3 on 2023-03-02 14:41

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('chat', '0045_alter_message_type'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='message',
            name='type',
        ),
        migrations.AddField(
            model_name='groupchatnamechangedmessage',
            name='type',
            field=models.CharField(default='group_chat_name_changed_message', max_length=40),
        ),
        migrations.AddField(
            model_name='groupchatuseraddedmessage',
            name='type',
            field=models.CharField(default='group_chat_user_added_message', max_length=40),
        ),
        migrations.AddField(
            model_name='groupchatuserremovedmessage',
            name='type',
            field=models.CharField(default='group_chat_user_removed_message', max_length=40),
        ),
        migrations.AddField(
            model_name='usermessage',
            name='type',
            field=models.CharField(default='user_message', max_length=40),
        ),
    ]
