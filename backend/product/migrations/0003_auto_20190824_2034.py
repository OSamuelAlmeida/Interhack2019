# Generated by Django 2.2.4 on 2019-08-24 23:34

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('product', '0002_auto_20190824_1740'),
    ]

    operations = [
        migrations.AddField(
            model_name='group',
            name='email',
            field=models.EmailField(default='default@default.com', max_length=254),
        ),
        migrations.AddField(
            model_name='meta',
            name='status',
            field=models.IntegerField(choices=[(1, 'Pendente'), (2, 'Em andamento'), (3, 'Conclúida'), (4, 'Cancelada')], default=1),
        ),
        migrations.AddField(
            model_name='meta',
            name='title',
            field=models.CharField(default='title', max_length=50),
        ),
    ]
