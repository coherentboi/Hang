# Generated by Django 4.0.6 on 2022-07-28 01:51

from django.conf import settings
from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
        ('accounts', '0007_alter_settings_user'),
    ]

    operations = [
        migrations.RenameModel(
            old_name='Settings',
            new_name='UserDetails',
        ),
    ]
