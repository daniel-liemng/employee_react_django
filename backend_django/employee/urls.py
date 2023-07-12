from django.urls import path
from . import views

urlpatterns = [
    path('/', views.employees),
    path('/<int:pk>', views.employee),
]
