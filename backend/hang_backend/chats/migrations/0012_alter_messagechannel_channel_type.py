# Generated by Django 4.0.6 on 2022-07-19 14:23

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('chats', '0011_alter_message_id'),
    ]

    operations = [
        migrations.AlterField(
            model_name='messagechannel',
            name='channel_type',
            field=models.CharField(choices=[('DM', 'Direct Message'), ('GC', 'Group Chat')], max_length=2),
        ),
    ]
