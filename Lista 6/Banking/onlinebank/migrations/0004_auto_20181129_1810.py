# Generated by Django 2.1.3 on 2018-11-29 17:10

from django.conf import settings
import django.core.validators
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('onlinebank', '0003_auto_20181129_1753'),
    ]

    operations = [
        migrations.AlterField(
            model_name='transfer',
            name='from_account',
            field=models.ForeignKey(editable=False, on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL),
        ),
        migrations.AlterField(
            model_name='transfer',
            name='title',
            field=models.CharField(max_length=60),
        ),
        migrations.AlterField(
            model_name='transfer',
            name='to_account',
            field=models.CharField(max_length=26, validators=[django.core.validators.RegexValidator(message='Bank account must have 26 digits.', regex='^\\d{26}$')]),
        ),
        migrations.AlterField(
            model_name='transferrequest',
            name='from_account',
            field=models.ForeignKey(editable=False, on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL),
        ),
        migrations.AlterField(
            model_name='transferrequest',
            name='title',
            field=models.CharField(max_length=60),
        ),
    ]
