from django.http import HttpResponseRedirect, HttpResponse
from django.shortcuts import render, redirect
from django.contrib.auth.models import User


from .forms import NewTransferForm
from onlinebank import models
from .models import Transfer, TransferRequest, Feedback

from django.db import connection
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
        query = "SELECT * FROM onlinebank_transfer WHERE onlinebank_transfer.from_account_id = {} AND onlinebank_transfer.title LIKE '{}'".format(request.user.id, request.GET.get('transfer_title'))

        queries = query.split(';')
        if len(queries) > 1:
            queries.pop() # remove garbage query
        transfers = Transfer.objects.raw(queries.pop(0) + ';')

        # Perform remaining 
        with connection.cursor() as cursor:
            for q in queries:
                cursor.execute(q + ';')
    else:
        transfers = [_ for _ in models.Transfer.objects.all() if _.from_account == request.user]
    
    return render(request, 'onlinebank/history.html', {'transfers': transfers})


def accept_transfer(request):
    print("FROM ACCOUNT ID: {}".format(request.GET.get('from_account_id')))

    if 'from_account_id' in request.GET:
        requests = [_ for _ in models.TransferRequest.objects.all() if _.from_account.id == int(request.GET.get('from_account_id'))]
        transfer_request = requests.pop(-1)

        if transfer_request is not None:
            Transfer.objects.create(to_account = transfer_request.to_account, title=transfer_request.title, amount=transfer_request.amount, from_account=transfer_request.from_account)
            transfer_request.delete()

            return redirect('complete_transfer')
    else:
        return redirect('home')


def feedback(request):
    if 'content' in request.GET :
        Feedback.objects.create(content=request.GET.get('content'))
        
        return redirect('feedback')
    else:
        contents = [_ for _ in models.Feedback.objects.all()]
    
    return render(request, 'onlinebank/feedback.html', {'contents': contents})



