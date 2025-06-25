from django.urls import path
from .views import StudentViews

urlpatterns = [
    path('students/', StudentViews.as_view()),
    path('students/<int:pk>/', StudentViews.as_view())
]