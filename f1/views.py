from django.shortcuts import render

def home(request):
	return render(request, 'home.html', {})

def drivers(request):
	return render(request, 'drivers.html', {})

def teams(request):
	return render(request, 'teams.html', {})

def races(request):
	return render(request, 'races.html', {})