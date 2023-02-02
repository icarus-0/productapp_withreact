from django.shortcuts import render, redirect
from django.contrib import messages
from django.http import JsonResponse
from django.contrib.auth.models import User, auth
from django.contrib.auth import authenticate
from .serializers import *
from rest_framework.views import APIView
from rest_framework.response import Response
from .models import *

# handle sign up page requests


class Accounts(APIView):
    def get(self, request):
        accounts = User.objects.all()
        serializer = UserSerializer(accounts, many=True)
        return Response(serializer.data)

    def post(self, request):

        email = request.data["email"]
        password = request.data["password"]

        auth_type = request.data["type"]

        if auth_type == "signup":
            name = request.data["name"]
            re_password = request.data["repassword"]
            if password == re_password:
                if not User.objects.filter(username=email).exists():
                    if not User.objects.filter(email=email).exists():
                        try:
                            user = User.objects.create_user(
                                username=email,
                                password=password,
                                email=email,
                                first_name=name,
                            )
                            user.save()
                            res = {
                                "status": 200,
                                "message": "Doctor Registration successfully completed",
                            }
                            return JsonResponse(res)
                        except Exception as e:
                            res = {"status": 500, "error": str(e)}
                            return JsonResponse(res)
                    else:
                        res = {"status": 403,
                               "error": "Email is already registered"}
                        return redirect("/signup")
                else:
                    res = {
                        "status": 403,
                        "error": "User is already present with the given data",
                    }
                    return JsonResponse(res)
            else:
                res = {"status": 403, "error": "Confirm password not matched"}
                return JsonResponse(res)
        elif auth_type == "signin":
            user = authenticate(username=email, password=password)
            if user is not None:
                res = {
                    "status": 200,
                    "name": user.first_name,
                    "username": user.username,
                    "message": "user logged in",
                }
            else:
                res = {
                    "status": 404,
                    "error": "user not found with given credentials",
                }
            return JsonResponse(res)
        else:
            res = {"status": 403, "error": "Invalid type parameter given"}
            return JsonResponse(res)

    def delete(self, request):
        try:
            userid = request.POST["id"]
            user = User.objects.filter(id=userid).get()
            user.delete()
            res = {"status": 200, "message": "Doctor account removed"}
        except Exception as e:
            res = {"status": 500, "error": str(e)}

        return JsonResponse(res)


class CategoryView(APIView):
    def get(self, request):
        categories = Category.objects.all()
        serializer = CategorySerializer(categories, many=True)
        return Response(serializer.data)

    def post(self, request):
        title = request.data["title"]
        ins = Category(title=title)
        ins.save()
        categories = Category.objects.all()
        serializer = CategorySerializer(categories, many=True)
        return Response(serializer.data)


class OfferView(APIView):
    def get(self, request):
        offers = Offer.objects.all()
        serializer = OfferSerializer(offers, many=True)
        return Response(serializer.data)

    def post(self, request):
        title = request.data["title"]
        price = request.data['price']
        ins = Offer(title=title, discount=price)
        ins.save()
        offers = Offer.objects.all()
        serializer = OfferSerializer(offers, many=True)
        return Response(serializer.data)


class ProductView(APIView):
    def get(self, request):
        products = Product.objects.all()
        serializer = ProductSerializer(products, many=True)
        return Response(serializer.data)

    def post(self, request):
        title = request.data['title']
        price = request.data['price']
        description = request.data['description']
        category = request.data['category']
        offers = request.data['offers'].split(',')
        image = request.data['image']

        category = Category.objects.get(pk=category)
        if len(offers) != 0:
            offers = Offer.objects.filter(pk__in=offers)

        ins = Product(
            title=title,
            desc=description,
            image=image,
            price=price,
            Category=category
        )
        ins.save()

        ls_offers = []

        for off in offers:
            off.products.add(ins)
            off.save()

        res = {
            'message': 'product added'
        }

        return Response(res)


class ProductDetails(APIView):
    def post(self, request):
        slug = request.data['slug']
        product = Product.objects.get(slug=slug)
        serializer = ProductSerializer(product)
        return Response(serializer.data)
