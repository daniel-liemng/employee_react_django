from django.db import models
from department.models import Department

# Create your models here.


class Employee(models.Model):
    name = models.CharField(max_length=100)
    email = models.EmailField(max_length=254)
    department = models.ForeignKey(Department, on_delete=models.CASCADE)
    location = models.CharField(max_length=100)
    status = models.BooleanField(default=True)
    createdAt = models.DateField(auto_now_add=True)
    updatedAt = models.DateField(auto_now=True)

    def __str__(self):
        return self.name
