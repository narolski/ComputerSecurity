from django.urls import path
from . import views

from django.conf.urls import url
from django.contrib.auth import views as auth_views

urlpatterns = [
    path('', views.home, name='home'),
    path('transfers/home', views.home, name="home"),

    path('transfers/new', views.new_transfer, name="new_transfer"),
    path('transfers/confirm', views.confirm_transfer, name="confirm_transfer"),
    path('transfers/complete', views.complete_transfer, name="complete_transfer"),
    path('transfers/history', views.history, name="history"),
]