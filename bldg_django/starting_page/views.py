from django.shortcuts import render_to_response
from django.template import RequestContext

def starting_page(request):
    return render_to_response('starting_page.html', {},
            context_instance = RequestContext(request))
