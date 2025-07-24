from django.contrib.auth.models import AbstractUser
from django.db import models


class CustomUser(AbstractUser):

    # avatar = models.ImageField(upload_to='avatars/', blank=True, null=True)
    # bio = models.TextField(max_length=500, blank=True)
    # website = models.URLField(blank=True)
    # github_url = models.URLField(blank=True)
    # linkedin_url = models.URLField(blank=True)
    # created_at = models.DateTimeField(auto_now_add=True)

    class Meta:
        verbose_name = "User"
        verbose_name_plural = "Users"

    def __str__(self):
        return self.username
