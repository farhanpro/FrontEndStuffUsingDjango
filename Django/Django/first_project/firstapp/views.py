from django.shortcuts import render
from django.http import HttpResponse
from firstapp import views

# Create your views here.
def index(request):
    return HttpResponse("Hello world!")

