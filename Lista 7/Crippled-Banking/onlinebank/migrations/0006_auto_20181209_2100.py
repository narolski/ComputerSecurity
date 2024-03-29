# Generated by Django 2.1.3 on 2018-12-09 20:00

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('onlinebank', '0005_transfer_date'),
    ]

    operations = [
        migrations.AlterField(
            model_name='transfer',
            name='date',
            field=models.DateTimeField(),
        ),
        migrations.AlterField(
            model_name='transfer',
            name='from_account',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL),
        ),
        migrations.AlterField(
            model_name='transferrequest',
            name='from_account',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL),
        ),
    ]
