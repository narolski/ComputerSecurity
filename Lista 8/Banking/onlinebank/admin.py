from django.contrib import admin
from .models import TransferRequest
from .models import Transfer

admin.site.register(TransferRequest)
admin.site.register(Transfer)