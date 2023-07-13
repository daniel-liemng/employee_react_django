from django.contrib import admin
from django.urls import path, include

urlpatterns = [
    path('api/departments', include('department.urls')),
    path('api/employees', include('employee.urls')),
    path('admin/', admin.site.urls),
]
