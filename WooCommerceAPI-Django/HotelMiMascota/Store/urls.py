from django.urls import path
from .views import Inicio, signin, signout, Products, EditProduct, CreateProduct, ProductsJSON, updateProduct, createProduct, deleteProduct
from django.contrib.auth.decorators import login_required
from django.conf.urls import handler400, handler403, handler404, handler500

# URLs de la tienda

urlpatterns = [
    path('', Inicio.as_view(), name='Inicio'),
    path('login/', signin, name='Iniciar Sesión'),
    path('logout/', signout, name='Cerrar Sesión'),
    path('products', login_required(Products.as_view()), name='Productos'),
    path('editar-producto/<int:id>',
         login_required(EditProduct.as_view()), name='Editar Producto'),
    path('updateProduct', updateProduct, name='Actualizar Producto'),
    path('crear-producto', login_required(CreateProduct.as_view()),
         name='Crear Producto'),
    path('createProduct', createProduct, name='Crear Producto'),
    path('deleteProduct', deleteProduct, name='Borrar Producto'),
    path('productsJSON',
         ProductsJSON, name='ProductosJSON'),
]
