from django.db import models

# Create your models here.


class Department(models.Model):
    name = models.CharField(max_length=100)
    createdAt = models.DateField(auto_now_add=True)
    updatedAt = models.DateField(auto_now=True)

    def __str__(self):
        return self.name
