# Generated by Django 4.1.3 on 2023-04-07 14:41

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('calendars', '0002_manualtimerange_importedtimerange_and_more'),
    ]

    operations = [
        migrations.AlterField(
            model_name='manualtimerange',
            name='type',
            field=models.CharField(choices=[('busy', 'busy'), ('free', 'free')], max_length=4),
        ),
    ]
