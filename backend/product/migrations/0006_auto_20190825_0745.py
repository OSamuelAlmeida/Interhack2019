# Generated by Django 2.2.4 on 2019-08-25 10:45

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('product', '0005_auto_20190825_0356'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='meta',
            name='intended_date',
        ),
        migrations.RemoveField(
            model_name='meta',
            name='published_date',
        ),
    ]
