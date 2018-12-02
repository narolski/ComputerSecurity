from django.http import HttpResponseRedirect, HttpResponse
from django.shortcuts import render, redirect
from django.contrib.auth.models import User


from .forms import NewTransferForm
from onlinebank import models
from .models import Transfer, TransferRequest
# Create your views here.

def home(request):
    return render(request, 'onlinebank/home.html', {})

def new_transfer(request):
    if request.method == 'POST':
        form = NewTransferForm(request.POST)

        if form.is_valid():
            req = form.save(commit=False)
            req.from_account = request.user
            req.save()
            
            return redirect('confirm_transfer')

    else:
        form = NewTransferForm()

    return render(request, 'onlinebank/new_transfer.html', {'form': form})

def confirm_transfer(request):
    requests = [_ for _ in models.TransferRequest.objects.all() if _.from_account == request.user]
    transfer_request = requests.pop(-1)

    if transfer_request is not None:
        if request.method == "POST":
            Transfer.objects.create(to_account = transfer_request.to_account, title=transfer_request.title, amount=transfer_request.amount, from_account=transfer_request.from_account)
            transfer_request.delete()

            return redirect('complete_transfer')

        context = {
            'to_account': transfer_request.to_account,
            'title': transfer_request.title,
            'amount': transfer_request.amount,
        }

        return render(request, 'onlinebank/confirm_transfer.html', context)
    else:
        return redirect('home')

def complete_transfer(request):
    requests = [_ for _ in models.Transfer.objects.all() if _.from_account == request.user]
    transfer_request = requests.pop(-1)

    if transfer_request is not None:
        if request.method == "POST":
            return redirect('history')

        context = {
            'to_account': transfer_request.to_account,
            'title': transfer_request.title,
            'amount': transfer_request.amount,
        }

        return render(request, 'onlinebank/complete_transfer.html', context)
    else:
        return redirect('home')



def history(request):
    # SQL-injection-unproofed!
    
    if 'transfer_title' in request.GET :
        query = 'SELECT * FROM onlinebank_transfer WHERE onlinebank_transfer.from_account_id = {} AND onlinebank_transfer.title LIKE "{}"'.format(request.user.id, request.GET.get('transfer_title'))

        transfers = Transfer.objects.raw(query)
    else:
        transfers = [_ for _ in models.Transfer.objects.all() if _.from_account == request.user]
    
    return render(request, 'onlinebank/history.html', {'transfers': transfers})