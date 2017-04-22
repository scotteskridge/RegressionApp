from django.shortcuts import render
from django.shortcuts import render, HttpResponse, redirect
from django.contrib import messages
from django.views.generic import TemplateView
from django.http import HttpResponse
from . import makeData, makeMatrix
from django.http import JsonResponse
import json



# Create your views here.


def index(request):
    # LineInput = makeData.lineData()
    # HistogramInput = makeData.lineData()
    # context = {
    #     'LineInput' : LineInput,
    #     'HistogramInput' : HistogramInput,
    #     }
    return render(request, "regressions/index.html")

def startPage(request):
    myNewLine = makeData.lineData(20)

    myChartData = makeData.ChartData(myNewLine, "Look a Line!")

    # myChartData.addColumn(myNewLine, "Look a Line!")

    LineInput = makeData.lineData(50)
    CurveChartInput = [
            ['Year', 'Sales', 'Expenses', 'Revenue', 'lable'],
            ['2004',  1000,      400,      600,       100],
            ['2005',  1170,      460,      710,       200],
            ['2006',  660,       1400,     -740,      300],
            ['2007',  1030,      540,      490,       400],
            ['date.next',  None, None,     None,      500],
            ['date.next',  500, 400,     300,      600],
            ['date.next',  200, 750,     -300,      900],
    ]
    return JsonResponse({"LineInput" : myChartData.DataTable, "CurveChartInput" : CurveChartInput, "myChartData" : myChartData.DataTable})

def ajaxRandomScatterChart(request):
    print(dir(request.POST))
    print(dir(request))

    RandomData = makeData.makeRandomSet(request.POST['scatter_total_count'], request.POST['scatter_variance'], request.POST['scatter_selection_count'] )
    ScatterInput = makeData.ChartData(RandomData, "Look Random Data!")
    SampledInput = ScatterInput.getSample(request.POST['scatter_selection_count'])
    return JsonResponse({"ScatterInput" :SampledInput})

def ajaxRandomComboChart(request):
    ComboInput = makeData.makeRandomSet(request.POST['combo_total_count'], request.POST['combo_variance'], request.POST['combo_selection_count'] )
    return JsonResponse({"ComboInput" :ComboInput})

def ajaxRandomHistogramChart(request):
    HistogramInput = makeData.makeRandomSet(request.POST['histogram_total_count'], request.POST['histogram_variance'], request.POST['histogram_selection_count'] )
    return JsonResponse({"HistogramInput" :HistogramInput})

def ajaxPage(request):
    return render(request, "regressions/ajaxTest.html")


# class PostExample(TemplateView):
#     template_name = 'start.html'
#
#     def post(self, request):
#         return HttpResponse(json.dumps({'key': 'value'}), mimetype="application/json")
