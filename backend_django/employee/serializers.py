from rest_framework.serializers import ModelSerializer
from rest_framework import serializers
from .models import Employee


class EmployeeSerializer(ModelSerializer):
    depName = serializers.CharField(source='department.name', read_only=True)

    class Meta:
        model = Employee
        fields = '__all__'
        # depth = 1
