# Generated by Django 2.1.3 on 2018-12-09 20:29

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('onlinebank', '0007_auto_20181209_2127'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='feedback',
            name='from_account',
        ),
    ]
