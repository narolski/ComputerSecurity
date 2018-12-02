from django.contrib.auth.models import User
from django.core.validators import RegexValidator
from django.db import models


# Create your models here.

class TransferRequest(models.Model):
    IBAN_validator = RegexValidator(regex=r'^\d{26}$', message="Bank account must have 26 digits.")

    from_account = models.ForeignKey(User, editable=False, on_delete=models.CASCADE)
    to_account = models.CharField(validators=[IBAN_validator], null=False, max_length=26)
   
    title = models.CharField(max_length=60, blank=False, null=False)
    amount = models.DecimalField(max_digits=22, decimal_places=2)

    def __str__(self):
        return "Request from: {}, to: {}, for amount: {}, title: {}".format(self.from_account, self.to_account, self.amount, self.title)


class Transfer(models.Model):
    IBAN_validator = RegexValidator(regex=r'^\d{26}$', message="Bank account must have 26 digits.")

    from_account = models.ForeignKey(User, editable=False, on_delete=models.CASCADE)
    to_account = models.CharField(validators=[IBAN_validator], null=False, max_length=26)
   
    title = models.CharField(max_length=60, blank=False, null=False)
    amount = models.DecimalField(max_digits=22, decimal_places=2)
    date = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return "Transfer from: {}, to: {}, for amount: {}, title: {}".format(self.from_account, self.to_account, self.amount, self.title)
