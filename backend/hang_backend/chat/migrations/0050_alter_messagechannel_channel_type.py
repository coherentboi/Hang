# Generated by Django 4.1.3 on 2023-04-16 02:30

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('chat', '0049_alter_reaction_message_hangeventuserremovedmessage_and_more'),
    ]

    operations = [
        migrations.AlterField(
            model_name='messagechannel',
            name='channel_type',
            field=models.CharField(choices=[('DM', 'Direct Message'), ('GC', 'Group Chat'), ('HE', 'Hang Event')], max_length=2),
        ),
    ]
