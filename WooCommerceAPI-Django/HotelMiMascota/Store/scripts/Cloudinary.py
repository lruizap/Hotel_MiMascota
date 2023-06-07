import cloudinary
from cloudinary import api
import os
from dotenv import load_dotenv
load_dotenv()


def CloudinaryMedia():
    # Configura tu cuenta de Cloudinary
    cloudinary.config(cloud_name=os.getenv('Cloud_name'), api_key=os.getenv(
        'Api_key'), api_secret=os.getenv('Api_secret'))

    # Obtén todas las imágenes de tu biblioteca
    # Ajusta max_results según tus necesidades
    response = api.resources(type='upload', max_results=500)

    # Recorre e imprime la información de las imágenes
    # for image in response['resources']:
    #     print('URL:', image['url'])
    #     print('ID:', image['public_id'])
    #     print('-----------------------')

    # print('primera imagen, url = ', response['resources'][0]['url'])
    # print('primera imagen, id = ', response['resources'][0]['public_id'])

    lastImage = response['resources'][0]

    return lastImage
