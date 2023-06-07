from django.db import models
from cloudinary.models import CloudinaryField, CloudinaryResource
# Create your models here.


class Picture(models.Model):
    # image = CloudinaryField('image')
    image = models.ImageField(upload_to="images/")
    data = CloudinaryResource()
