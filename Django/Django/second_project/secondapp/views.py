from django.shortcuts import render
from django.http import HttpResponse

def Indexs(request):
    return HttpResponse("<em>Hello world</em>\n <h1> First App")

# Create your views here.
