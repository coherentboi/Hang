# Generated by Django 4.1.3 on 2023-04-13 13:05

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('hang_events', '0009_hangevent_address'),
    ]

    operations = [
        migrations.AddField(
            model_name='hangevent',
            name='google_calendar_event_id',
            field=models.CharField(default=None, max_length=256, null=True),
        ),
    ]
