from django.urls import path
from . import views

urlpatterns = [
    path('/', views.departments),
    path('/<int:pk>', views.department),
]
