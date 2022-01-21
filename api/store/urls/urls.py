from store.urls import products
from store.urls import store

app_name = "store"

urlpatterns = []
urlpatterns += store.urlpatterns
urlpatterns += products.urlpatterns
