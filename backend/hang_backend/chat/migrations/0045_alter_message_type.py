# Generated by Django 4.1.3 on 2023-02-27 14:54

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('chat', '0044_message_type'),
    ]

    operations = [
        migrations.AlterField(
            model_name='message',
            name='type',
            field=models.CharField(max_length=40),
        ),
    ]
