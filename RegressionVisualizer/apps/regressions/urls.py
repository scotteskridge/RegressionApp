from django.conf.urls import url, include

from . import views

urlpatterns = [

    url(r'^$', views.index, name = "index"),
    
    url(r'^ajaxRandom$', views.ajaxRandom, name = "ajaxRandom"),
    url(r'^ajaxPage$', views.ajaxPage, name = "ajaxPage"),
    # url(r'^$', views.PostExample.as_view(), name='test-start'),


]
