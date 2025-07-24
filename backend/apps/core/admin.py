from django.contrib import admin
from django.contrib.auth.admin import UserAdmin
from .models import CustomUser


@admin.register(CustomUser)
class CustomUserAdmin(UserAdmin):
    """
    Admin configuration for CustomUser
    """
    # Пока используем стандартные поля
    # В будущем можно добавить:
    # list_display = ('username', 'email', 'first_name', 'last_name', 'is_staff', 'date_joined')
    # list_filter = ('is_staff', 'is_superuser', 'is_active', 'date_joined')
    # search_fields = ('username', 'first_name', 'last_name', 'email')
    # ordering = ('-date_joined',)

    pass  # Пока используем стандартный функционал
