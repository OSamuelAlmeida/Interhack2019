# Generated by Django 2.2.4 on 2019-08-25 06:56

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('product', '0004_usersettings'),
    ]

    operations = [
        migrations.AlterField(
            model_name='meta',
            name='status',
            field=models.IntegerField(choices=[(1, 'Pendente'), (2, 'Em andamento'), (3, 'Concluída'), (4, 'Cancelada')], default=1),
        ),
        migrations.AlterField(
            model_name='usersettings',
            name='type',
            field=models.IntegerField(choices=[(0, 'Administrador'), (1, 'Comum')], default=1),
        ),
    ]