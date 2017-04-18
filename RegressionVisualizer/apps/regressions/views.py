from django.shortcuts import render
from django.shortcuts import render, HttpResponse, redirect
from django.contrib import messages
from . import makeData
import random



# Create your views here.


def index(request):
    ScatterInput = makeData.scatterData()
    context = {
        'ScatterInput' : ScatterInput,
        }
    return render(request, "regressions/index.html", context)


def newRandom(request):
    ScatterInput = makeData.randomSet(request.POST)
    context = {
        'ScatterInput' : ScatterInput,
        }
    return render(request, "regressions/index.html", context)
