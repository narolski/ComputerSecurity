from django.http import HttpResponseRedirect, HttpResponse
from django.shortcuts import render, redirect
from django.contrib.auth.models import User
from django.contrib.auth import authenticate, login

from .forms import NewTransferForm
from onlinebank import models
from .models import Transfer, TransferRequest

from rest_framework import viewsets, permissions, generics
from rest_framework import permissions
from rest_framework_simplejwt.authentication import JWTAuthentication
from rest_framework import status
from rest_framework.decorators import api_view
from rest_framework.response import Response


from .permissions import IsOwner
from .serializers import TransferRequestSerializer, TransferSerializer, UserSerializer, TransferConfirmationSerializer

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
    transfers = [_ for _ in models.Transfer.objects.all() if _.from_account == request.user]
    return render(request, 'onlinebank/history.html', {'transfers': transfers})

def accept_transfer(request):
    print("FROM ACCOUNT ID: {}".format(request.GET.get('from_account_id')))

    if 'from_account_id' in request.GET:
        if int(request.GET.get('from_account_id')) == request.user:
            requests = [_ for _ in models.TransferRequest.objects.all() if _.from_account.id == int(request.GET.get('from_account_id'))]
            transfer_request = requests.pop(-1)

            if transfer_request is not None:
                Transfer.objects.create(to_account = transfer_request.to_account, title=transfer_request.title, amount=transfer_request.amount, from_account=transfer_request.from_account)
                transfer_request.delete()

                return redirect('complete_transfer')
    else:
        return redirect('home')

# REST API 
class TransfersViewSet(viewsets.ModelViewSet):
    serializer_class = TransferSerializer
    queryset = Transfer.objects.all()
    permission_classes = (IsOwner, permissions.IsAuthenticated, )
    authentication_classes = (JWTAuthentication, )

    def get_queryset(self):
        if self.action == 'list':
            return self.queryset.filter(from_account=self.request.user)
        return self.queryset

class TransferRequestsViewSet(viewsets.ModelViewSet):
    serializer_class = TransferRequestSerializer
    queryset = TransferRequest.objects.all()
    permission_classes = (IsOwner, permissions.IsAuthenticated, )
    authentication_classes = (JWTAuthentication, )

    def get_queryset(self):
        if self.action == 'list':
            return self.queryset.filter(from_account=self.request.user)
        return self.queryset

class UserRegistrationViewSet(viewsets.ModelViewSet):
    serializer_class = UserSerializer
    queryset = User.objects.all()
    permission_classes = (permissions.AllowAny, )
