# Generated by Django 4.1.3 on 2023-04-11 14:15

import datetime
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('calendars', '0005_googlecalendaraccesstoken_refresh_token'),
    ]

    operations = [
        migrations.AddField(
            model_name='googlecalendaraccesstoken',
            name='last_generated',
            field=models.DateTimeField(default=datetime.datetime.now),
        ),
    ]
