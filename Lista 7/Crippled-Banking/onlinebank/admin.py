from django.contrib import admin
from .models import TransferRequest
from .models import Transfer, Feedback

@admin.register(TransferRequest)
class TransferRequestAdmin(admin.ModelAdmin):
    fields = ('from_account', 'to_account', 'title', 'amount', 'date')

@admin.register(Transfer)
class TransferAdmin(admin.ModelAdmin):
    fields = ('from_account', 'to_account', 'title', 'amount', 'date')

@admin.register(Feedback)
class FeedbackAdmin(admin.ModelAdmin):
    fields = ('content', )
