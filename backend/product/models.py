#from django.conf import settings
from django.db import models
from django.utils import timezone
from django.contrib.auth.models import User
from django.db.models import Count, Q

class Group(models.Model):
    name = models.CharField(max_length=50)
    description = models.TextField()
    logo_url = models.URLField()
    email = models.EmailField(default='default@default.com')

    def __str__(self):
        return self.name

    @classmethod
    def orderGroup(cls):
        groups = Group.objects.annotate(n=Count('meta', filter=Q(meta__status=3))).order_by('-n')
        return groups


class Meta(models.Model):
    title = models.CharField(max_length=50, default='title')
    description = models.TextField()
    #published_date = models.DateField(default=timezone.now)
    #intended_date = models.DateField()
    group = models.ForeignKey(Group, default=1, verbose_name="Group", on_delete=models.CASCADE)
    STATUS_CHOICES = (
        (1, "Pendente"),
        (2, "Em andamento"),
        (3, "Concluída"),
        (4, "Cancelada")
    )
    status = models.IntegerField(choices=STATUS_CHOICES, default=1)
    
    def __str__(self):
        return self.title

class UserSettings(models.Model):
    user = models.ForeignKey(User, default=1, verbose_name="User", on_delete=models.CASCADE)
    group = models.ForeignKey(Group, blank=True, verbose_name="Group", on_delete=models.CASCADE)
    TYPE_CHOICES = (
        (0, "Administrador"),
        (1, "Comum")
    )
    type = models.IntegerField(choices=TYPE_CHOICES, default=1)



