# -----------------------------------------------
# Stage 1: Build Frontend Assets (Vite + React)
# -----------------------------------------------
FROM node:20-alpine AS frontend-builder
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

# -----------------------------------------------
# Stage 2: Install PHP Dependencies (Composer)
# -----------------------------------------------
FROM composer:2 AS vendor-builder
WORKDIR /app
COPY composer*.json ./
RUN composer install --no-dev --no-interaction --prefer-dist --optimize-autoloader --no-scripts
COPY . .
RUN composer dump-autoload --optimize

# -----------------------------------------------
# Stage 3: Pure PHP-FPM
# -----------------------------------------------
FROM php:8.3-fpm-alpine

RUN apk add --no-cache \
    libpng-dev \
    libzip-dev \
    zip \
    unzip \
    curl \
    oniguruma-dev \
    icu-dev \
    && docker-php-ext-install pdo pdo_mysql mbstring gd zip bcmath intl opcache

WORKDIR /var/www/html

COPY --from=vendor-builder /app /var/www/html
COPY --from=frontend-builder /app/public/build /var/www/html/public/build

RUN chown -R www-data:www-data /var/www/html/storage /var/www/html/bootstrap/cache

EXPOSE 9000

CMD ["php-fpm"]
