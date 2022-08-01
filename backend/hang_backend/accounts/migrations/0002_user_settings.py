from django.contrib.auth.models import User
from django.db import migrations

from accounts.models import UserDetails


def update_setting(apps, schema_editor):
    users = User.objects.all()
    for user in users:
        setting = UserDetails(user=user, is_verified=False)
        setting.save()


class Migration(migrations.Migration):
    dependencies = [
        ('accounts', '0001_initial'),
    ]

    operations = [
        migrations.RunPython(update_setting),
    ]
