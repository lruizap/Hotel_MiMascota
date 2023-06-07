from django.shortcuts import render, redirect
from django.http import HttpResponse
from django.views.generic import TemplateView
from django.contrib.auth.forms import AuthenticationForm
from django.contrib.auth.decorators import login_required
from django.contrib.auth import authenticate, login, logout

from .models import Picture

from .scripts.WooCommerceAPI import categories, tags, GetProducts, woocommerce
from .scripts.Cloudinary import CloudinaryMedia

import cloudinary
import cloudinary.uploader
import cloudinary.api
import json
import copy

# Create your views here.

from django.shortcuts import render


def error_404(request, exception):
    return render(request, 'error404.html', status=404)


def error_403(request, exception):
    return render(request, 'error404.html', status=403)


def error_400(request, exception):
    return render(request, 'error404.html', status=400)


def error_500(request):
    return render(request, 'error404.html', status=500)


class Inicio(TemplateView):
    template_name = 'home.html'


def signout(request):
    logout(request)
    return redirect('Inicio')


def signin(request):
    if request.method == 'GET':
        return render(request, 'login.html', {
            'form': AuthenticationForm
        })
    else:
        user = authenticate(
            request, username=request.POST['username'], password=request.POST['password'])

        if user is None:
            return render(request, 'login.html', {
                'form': AuthenticationForm,
            })
        else:
            login(request, user)
            return redirect('Inicio')


class Products(TemplateView):
    template_name = 'products.html'

    def get_context_data(self, **kwargs):
        context = super().get_context_data(**kwargs)
        context['products'] = GetProducts(woocommerce)
        return context


class EditProduct(TemplateView):
    template_name = 'EditProduct.html'

    def get_context_data(self, id, **kwargs):
        context = super().get_context_data(**kwargs)
        context['categories'] = categories
        context['tags'] = tags
        for product in GetProducts(woocommerce):
            if product['id'] == id:
                context['product'] = product
        return context


@login_required
def updateProduct(request):
    if request.method == 'POST':
        productID = request.POST['ProductID']

        productUpdateJSON = json.loads(request.POST['miPadre'])
        # print(productUpdateJSON)

        if not request.FILES:
            woocommerce.put(f"products/{productID}", productUpdateJSON).json()
        else:
            images = request.FILES['images']
            newPhoto = Picture()
            newPhoto.image = images
            newPhoto.save()

            lastImage = CloudinaryMedia()
            url = {"images": [{"src": f'{lastImage["url"]}'}]}

            productUpdateJSON_merged = copy.deepcopy(productUpdateJSON)
            for key, value in url.items():
                if key in productUpdateJSON_merged and isinstance(productUpdateJSON_merged[key], list) and isinstance(value, list):
                    productUpdateJSON_merged[key].extend(value)
                else:
                    productUpdateJSON_merged[key] = value

            woocommerce.put(f"products/{productID}",
                            productUpdateJSON_merged).json()

        return redirect('/products')
    else:
        return redirect('/products')


class CreateProduct(TemplateView):
    template_name = 'CreateProduct.html'

    def get_context_data(self, **kwargs):
        context = super().get_context_data(**kwargs)
        context['categories'] = categories
        context['tags'] = tags
        return context


@login_required
def createProduct(request):
    if request.method == 'POST':
        productUpdateJSON = json.loads(request.POST['miPadre'])

        if not request.FILES:
            woocommerce.post(f"products", productUpdateJSON).json()
        else:
            images = request.FILES['images']
            newPhoto = Picture()
            newPhoto.image = images
            newPhoto.save()

            lastImage = CloudinaryMedia()
            url = {"images": [{"src": f'{lastImage["url"]}'}]}

            productUpdateJSON_merged = copy.deepcopy(productUpdateJSON)
            for key, value in url.items():
                if key in productUpdateJSON_merged and isinstance(productUpdateJSON_merged[key], list) and isinstance(value, list):
                    productUpdateJSON_merged[key].extend(value)
                else:
                    productUpdateJSON_merged[key] = value

            woocommerce.post(f"products", productUpdateJSON_merged).json()

        return redirect('/products')
    else:
        return redirect('/products')


@login_required
def deleteProduct(request):
    if request.method == 'POST':
        productID = request.POST['ProductID2']
        woocommerce.delete(f"products/{productID}",
                           params={"force": True}).json()
        return redirect('/products')
    else:
        return redirect('/products')


@login_required
def ProductsJSON(request):
    return HttpResponse(GetProducts(woocommerce))
