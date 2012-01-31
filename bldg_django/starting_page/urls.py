from django.conf.urls.defaults import patterns, include, url

urlpatterns = patterns('starting_page.views',
    url(r'^$', 'starting_page'),
)
