FROM php:8.2-fpm-alpine

RUN apk add --no-cache \
    curl libpng-dev libxml2-dev zip unzip libzip-dev \
    freetype-dev libjpeg-turbo-dev oniguruma-dev \
    nodejs npm mysql-client bash

RUN docker-php-ext-configure gd --with-freetype --with-jpeg \
    && docker-php-ext-install pdo_mysql mbstring exif pcntl bcmath gd zip opcache

COPY --from=composer:latest /usr/bin/composer /usr/bin/composer

WORKDIR /var/www
COPY . .

RUN composer install --no-dev --optimize-autoloader --no-interaction
RUN npm install --legacy-peer-deps && npm run build

RUN chown -R www-data:www-data /var/www/storage /var/www/bootstrap/cache \
    && chmod -R 775 /var/www/storage /var/www/bootstrap/cache

EXPOSE 9000
CMD ["php-fpm"]
