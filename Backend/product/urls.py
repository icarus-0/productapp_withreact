from django.urls import path
from .views import *
urlpatterns = [
    path('auth/accounts', Accounts.as_view(), name='accounts'),
    path('category', CategoryView.as_view(), name='category'),
    path('offer', OfferView.as_view(), name='offer'),
    path('product', ProductView.as_view(), name='product'),
    path('productdetails', ProductDetails.as_view(), name='productdetails')
]
