# Generated by Django 2.1.3 on 2018-11-29 16:53

from django.conf import settings
import django.core.validators
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
        ('onlinebank', '0002_transfer_title'),
    ]

    operations = [
        migrations.CreateModel(
            name='TransferRequest',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('to_account', models.CharField(max_length=26, validators=[django.core.validators.RegexValidator(message='Bank account must have 26 digits.', regex='^\\d{26}$')])),
                ('title', models.CharField(default='Przelew', max_length=60)),
                ('amount', models.DecimalField(decimal_places=2, max_digits=22)),
                ('from_account', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='+', to=settings.AUTH_USER_MODEL)),
            ],
        ),
        migrations.RemoveField(
            model_name='account',
            name='owner',
        ),
        migrations.RemoveField(
            model_name='transfer',
            name='date',
        ),
        migrations.AlterField(
            model_name='transfer',
            name='from_account',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='+', to=settings.AUTH_USER_MODEL),
        ),
        migrations.AlterField(
            model_name='transfer',
            name='title',
            field=models.CharField(default='Przelew', max_length=60),
        ),
        migrations.AlterField(
            model_name='transfer',
            name='to_account',
            field=models.CharField(max_length=26),
        ),
        migrations.DeleteModel(
            name='Account',
        ),
    ]
