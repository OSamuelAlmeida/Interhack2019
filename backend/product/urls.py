from rest_framework import routers
from .api import GroupViewSet, MetaViewSet, UserViewSet, UserSettingsViewSet, CountGroupViewSet

router = routers.DefaultRouter()
router.register('api/group/count', CountGroupViewSet, 'count')
router.register('api/group', GroupViewSet, 'group')
router.register('api/meta', MetaViewSet, 'meta')
router.register('api/user', UserViewSet, 'user')
router.register('api/usersettings', UserSettingsViewSet, 'usersettings')

urlpatterns = router.urls
