# Generated by Django 4.1.3 on 2022-11-13 03:35

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('chat', '0025_alter_message_reply'),
    ]

    operations = [
        migrations.AddField(
            model_name='message',
            name='emoji',
            field=models.JSONField(default='[]'),
        ),
    ]
