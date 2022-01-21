# Generated by Django 4.0.1 on 2022-01-13 09:08

import accounts.models
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('accounts', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='user',
            name='username',
            field=models.CharField(max_length=200, unique=True, validators=[accounts.models.User.validate_username_case]),
        ),
    ]
