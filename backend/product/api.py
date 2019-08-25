from product.models import Group, Meta, UserSettings
from django.contrib.auth.models import User
from rest_framework import viewsets, permissions, filters
from .serializers import GroupSerializer, MetaSerializer, UserSerializer, UserSettingsSerializer

class GroupViewSet(viewsets.ModelViewSet):
    queryset = Group.objects.all()
    permission_classes = [
        permissions.AllowAny
    ]
    serializer_class = GroupSerializer
    filter_backends = [filters.SearchFilter]
    search_fields = ['name']

class MetaViewSet(viewsets.ModelViewSet):
    queryset = Meta.objects.all()
    permission_classes = [
        permissions.AllowAny
    ]
    serializer_class = MetaSerializer
    filter_backends = [filters.SearchFilter]
    search_fields = ['title']

class UserViewSet(viewsets.ModelViewSet):
    queryset = User.objects.all()
    permission_classes = [
        permissions.AllowAny
    ]
    serializer_class = UserSerializer

class UserSettingsViewSet(viewsets.ModelViewSet):
    queryset = UserSettings.objects.all()
    permission_classes = [
        permissions.AllowAny
    ]
    serializer_class = UserSettingsSerializer

class CountGroupViewSet(viewsets.ModelViewSet):
    queryset = Group.orderGroup()
    permission_classes = [
        permissions.AllowAny
    ]
    serializer_class = GroupSerializer
