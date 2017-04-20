from django.shortcuts import render
from django.shortcuts import render, HttpResponse, redirect
from django.contrib import messages
from django.views.generic import TemplateView
from django.http import HttpResponse
from . import makeData
from django.http import JsonResponse



# Create your views here.


def index(request):
    LineInput = makeData.lineData()
    HistogramInput = makeData.lineData()
    context = {
        'LineInput' : LineInput,
        'HistogramInput' : HistogramInput,
        }
    return render(request, "regressions/index.html", context)

def ajaxRandomScatterChart(request):
    ScatterInput = makeData.makeRandomSet(request.POST['scatter_total_count'], request.POST['scatter_variance'], request.POST['scatter_selection_count'] )
    return JsonResponse({"ScatterInput" :ScatterInput})

def ajaxRandomComboChart(request):
    ComboInput = makeData.makeRandomSet(request.POST['combo_total_count'], request.POST['combo_variance'], request.POST['combo_selection_count'] )
    return JsonResponse({"ComboInput" :ComboInput})

def ajaxRandomHistogramChart(request):
    HistogramInput = makeData.makeRandomSet(request.POST['histogram_total_count'], request.POST['histogram_variance'], request.POST['histogram_selection_count'] )
    return JsonResponse({"HistogramInput" :HistogramInput})

def ajaxPage(request):
    return render(request, "regressions/ajaxTest.html")


class PostExample(TemplateView):
    template_name = 'start.html'

    def post(self, request):
        return HttpResponse(json.dumps({'key': 'value'}), mimetype="application/json")
