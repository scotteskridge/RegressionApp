from django.shortcuts import render
from django.shortcuts import render, HttpResponse, redirect
from django.contrib import messages
from django.views.generic import TemplateView
from django.http import HttpResponse
from . import makeData
from django.http import JsonResponse



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

    ScatterInput = makeData.randomSet(request.POST['element_count'], request.POST['element_variance'])

    

    return JsonResponse({"ScatterInput" :ScatterInput})

def ajaxPage(request):
    return render(request, "regressions/ajaxTest.html")


class PostExample(TemplateView):
    template_name = 'start.html'

    def post(self, request):
        return HttpResponse(json.dumps({'key': 'value'}), mimetype="application/json")
