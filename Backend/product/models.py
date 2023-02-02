from django.db import models
from autoslug import AutoSlugField

# Create your models here.


class Category(models.Model):
    title = models.CharField(max_length=200)


class Product(models.Model):
    title = models.CharField(max_length=200)
    desc = models.TextField()
    image = models.ImageField(upload_to='product/images')
    price = models.IntegerField()
    slug = AutoSlugField(populate_from='title',
                         unique=True, null=True, default=None)
    Category = models.ForeignKey(Category, on_delete=models.CASCADE)


class Offer(models.Model):
    title = models.CharField(max_length=50)
    discount = models.FloatField()
    products = models.ManyToManyField(Product)
