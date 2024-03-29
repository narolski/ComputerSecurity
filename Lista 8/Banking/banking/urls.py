"""banking URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/2.1/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
import django_registration
from django.contrib import admin
from django.urls import path, include
from django.conf.urls import url

from django.contrib.auth import views as auth_views
from django.views.generic.base import TemplateView

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', include('onlinebank.urls')),
    url(r'^accounts/', include('django.contrib.auth.urls')),
    url(r'^accounts/', include('django_registration.backends.one_step.urls'), name="register"),
    path('accounts/login/', auth_views.LoginView.as_view(template_name='registration/login.html'), name="login"),
    path('accounts/logout/', auth_views.LogoutView.as_view(template_name='registration/logout.html'), name="logout"),
    url('accounts/password_reset/^', include('django.contrib.auth.urls')),
]
