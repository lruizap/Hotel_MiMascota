from django.forms import ModelForm
from cloudinary.forms import CloudinaryJsFileField
from django import forms
from .models import Picture


# class PictureForm(forms.ModelForm):
#     class Meta:
#         model = Picture
#         fields = ['image']
#         widgets = {
#             'image': forms.FileInput(attrs={'id': 'imgDer', 'name': 'addPictures', 'accept': 'image/png,image/jpeg', 'class': 'block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 focus:outline-none'})
#         }

class PictureForm(ModelForm):
    class Meta:
        model = Picture
        fields = '__all__'
