# Generated by Django 5.0.1 on 2024-02-28 13:42

from django.db import migrations, models


class Migration(migrations.Migration):
    dependencies = [
        ("language", "0021_profile_profile_image"),
    ]

    operations = [
        migrations.AddField(
            model_name="exercise",
            name="description",
            field=models.CharField(default="", max_length=200),
        ),
        migrations.AddField(
            model_name="exercise",
            name="instruction",
            field=models.TextField(default=""),
        ),
        migrations.AddField(
            model_name="exercise",
            name="type",
            field=models.CharField(default="multiple_choice", max_length=100),
        ),
    ]
