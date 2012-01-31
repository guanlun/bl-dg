from django.conf.urls.defaults import patterns, include, url

from django.contrib import admin
admin.autodiscover()

urlpatterns = patterns('',
    # Examples:
    # url(r'^$', 'bldg_django.views.home', name='home'),
    # url(r'^bldg_django/', include('bldg_django.foo.urls')),
    url(r'^$', include('starting_page.urls')),
    url(r'^admin/doc/', include('django.contrib.admindocs.urls')),
    url(r'^admin/', include(admin.site.urls)),
)
