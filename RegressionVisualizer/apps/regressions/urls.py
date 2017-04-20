from django.conf.urls import url, include

from . import views

urlpatterns = [

    url(r'^$', views.index, name = "index"),
    url(r'^startPage$', views.startPage, name = "startPage"),

    url(r'^ajaxRandomScatterChart$', views.ajaxRandomScatterChart, name = "ajaxRandomScatterChart"),
    url(r'^ajaxRandomComboChart$', views.ajaxRandomComboChart, name = "ajaxRandomComboChart"),
    url(r'^ajaxRandomHistogramChart$', views.ajaxRandomHistogramChart, name = "ajaxRandomHistogramChart"),
    url(r'^ajaxPage$', views.ajaxPage, name = "ajaxPage"),
    # url(r'^$', views.PostExample.as_view(), name='test-start'),


]
