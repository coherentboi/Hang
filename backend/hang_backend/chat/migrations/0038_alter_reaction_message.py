# Generated by Django 4.1.3 on 2023-01-23 00:59

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('chat', '0037_remove_usermessage_content_and_more'),
    ]

    operations = [
        migrations.AlterField(
            model_name='reaction',
            name='message',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='reactions', to='chat.usermessage'),
        ),
    ]
