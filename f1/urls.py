from django.conf.urls import patterns, url
from f1 import views

urlpatterns = patterns('',
	url(r'^$', views.home),
	url(r'^drivers$', views.drivers),
	url(r'^teams$', views.teams),
	url(r'^races$', views.races),
)