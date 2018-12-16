# serializers.py
from rest_framework import serializers
from .models import TransferRequest, Transfer
from django.contrib.auth.models import User

class TransferRequestSerializer(serializers.ModelSerializer):
    from_account = serializers.HiddenField(
        default=serializers.CurrentUserDefault()
    )

    class Meta:
        model = TransferRequest
        fields = ("from_account", "to_account", "title", "amount")

class TransferSerializer(serializers.ModelSerializer):
    from_account = serializers.HiddenField(
        default=serializers.CurrentUserDefault()
    )

    class Meta:
        model = Transfer
        fields = ("from_account", "to_account", "title", "amount", "date")

class TransferConfirmationSerializer(serializers.ModelSerializer):
    from_account = serializers.HiddenField(
        default=serializers.CurrentUserDefault()
    )

    class Meta:
        model = TransferRequest
        fields = ("from_account", "to_account", "title", "amount")

class UserSerializer(serializers.HyperlinkedModelSerializer):
    password = serializers.CharField(write_only=True)

    class Meta:
        model = User
        fields = ('username', 'first_name', 'last_name', 'email', 'password')
        extra_kwargs = {
            'username': {'write_only': True},
            'first_name': {'write_only': True},
            'last_name': {'write_only': True},
            'email': {'write_only': True},
            'password': {'write_only': True}
        }

    def create(self, validated_data):
        user = super(UserSerializer, self).create(validated_data)
        user.set_password(validated_data['password'])
        user.save()
        return user