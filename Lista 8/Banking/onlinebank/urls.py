from django.urls import path
from . import views
from rest_framework import routers

from django.conf.urls import url, include
from django.contrib.auth import views as auth_views

from rest_framework_simplejwt.views import (
    TokenObtainPairView,
    TokenRefreshView,
    TokenVerifyView,
)

router = routers.DefaultRouter(trailing_slash = False)
router.register (r'transfers', views.TransfersViewSet)
router.register (r'registration', views.UserRegistrationViewSet)
router.register (r'requests', views.TransferRequestsViewSet)

urlpatterns = [
    path('', views.home, name='home'),
    # path('transfers/home', views.home, name="home"),
    path('transfers/new', views.new_transfer, name="new_transfer"),
    path('transfers/confirm', views.confirm_transfer, name="confirm_transfer"),
    path('transfers/complete', views.complete_transfer, name="complete_transfer"),
    path('transfers/history', views.history, name="history"),
    path('api/v1/', include(router.urls)),
    url(r'^api/token/$', TokenObtainPairView.as_view(), name='token_obtain_pair'),
    url(r'^api/token/refresh/$', TokenRefreshView.as_view(), name='token_refresh'),
    url(r'^api/token/verify/$', TokenVerifyView.as_view(), name='token_verify'),
    path('api/accept', views.accept_transfer, name="accept_transfer"),
]