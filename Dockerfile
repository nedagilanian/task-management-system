# استفاده از تصویر پایه پایتون نسخه 3.12
FROM python:3.12

# تنظیم دایرکتوری کاری در داخل کانتینر
WORKDIR /app

# کپی کردن فایل‌های پروژه به دایرکتوری کاری
COPY . /app

# نصب وابستگی‌ها از فایل requirements.txt
RUN pip install --no-cache-dir -r requirements.txt

# اجرای سرور توسعه Django
CMD ["python", "manage.py", "runserver", "0.0.0.0:8000"]
