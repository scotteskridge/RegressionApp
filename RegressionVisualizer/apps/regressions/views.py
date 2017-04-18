from django.shortcuts import render
from django.shortcuts import render, HttpResponse, redirect
from django.contrib import messages
from django.views.generic import TemplateView
from django.http import HttpResponse
from . import makeData
import json



# Create your views here.


def index(request):
    ScatterInput = makeData.scatterData()
    context = {
        'ScatterInput' : ScatterInput,
        }
    return render(request, "regressions/index.html", context)


def newRandom(request):

    ScatterInput = makeData.randomSet(request.POST)
    print (ScatterInput)
    context = {
        'ScatterInput' : ScatterInput,
        }
    return render(request, "regressions/index.html", context)

def ajaxRandom(request):
    print("8" * 80)
    print ("hit the new random route from AJAX jquery")
    # ScatterInputScatterInput = makeData.randomSet(request.POST)
    #
    # print (ScatterInput)
    #
    # return ScatterInput

def ajaxPage(request):
    return render(request, "regressions/ajaxTest.html")


class PostExample(TemplateView):
    template_name = 'start.html'

    def post(self, request):
        return HttpResponse(json.dumps({'key': 'value'}), mimetype="application/json")
