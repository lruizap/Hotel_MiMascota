from woocommerce import API
import json
import os
from dotenv import load_dotenv

load_dotenv()
CONSUMER_KEY = os.getenv('CONSUMER_KEY_4')
CONSUMER_SECRET_KEY = os.getenv('CONSUMER_SECRET_KEY_4')

woocommerce = API(
    url='http://jmuprwj.cluster031.hosting.ovh.net/daw2215lucas',
    consumer_key=CONSUMER_KEY,
    consumer_secret=CONSUMER_SECRET_KEY,
    version='wc/v3'
)

# Obtener la lista de productos
# products = woocommerce.get("products").json()


def GetProducts(woocommerce):
    page = 1
    products = []
    while True:
        response = woocommerce.get(
            "products", params={"per_page": 10, "page": page})
        if not response.ok or not response.json():
            break
        products += response.json()
        page += 1
    return products


GetProducts(woocommerce)

categories = woocommerce.get("products/categories").json()
tags = woocommerce.get("products/tags").json()
