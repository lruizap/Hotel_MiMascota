# Generated by Django 4.2 on 2023-05-19 10:24

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('Store', '0010_alter_picture_image'),
    ]

    operations = [
        migrations.AlterField(
            model_name='picture',
            name='image',
            field=models.ImageField(upload_to='images/'),
        ),
    ]
