# Generated by Django 4.0.5 on 2022-07-02 20:01

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('chat', '0005_remove_messagechannel_channel_type'),
    ]

    operations = [
        migrations.AddField(
            model_name='messagechannel',
            name='channel_type',
            field=models.IntegerField(default=0),
            preserve_default=False,
        ),
    ]
