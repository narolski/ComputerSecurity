from django import forms

from .models import TransferRequest
from .models import Transfer

class NewTransferForm(forms.ModelForm):

    class Meta:
        model = TransferRequest
        fields = ('to_account', 'amount', 'title')