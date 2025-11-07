# Use a more lightweight Linux base image
FROM debian:bullseye-slim

# Prevent interactive prompts during installation
ENV DEBIAN_FRONTEND=noninteractive

# Update and install required packages
RUN apt-get update && apt-get install -y \
    apache2 \
    mysql-server \
    php \
    php-mysql \
    && apt-get clean \
    && rm -rf /var/lib/apt/lists/*

# Configure MySQL
ENV MYSQL_ROOT_PASSWORD=root_password
ENV MYSQL_DATABASE=rugby_db
ENV MYSQL_USER=rugby_user
ENV MYSQL_PASSWORD=rugby_password

# Copy web files
COPY index.html /var/www/html/
COPY style.css /var/www/html/
COPY action.js /var/www/html/

# Configure Apache
RUN echo "ServerName localhost" >> /etc/apache2.conf

# Expose ports
EXPOSE 80
EXPOSE 3306

# Create startup script
RUN echo '#!/bin/bash\nservice mysql start\nservice apache2 start\ntail -f /var/log/apache2/access.log' > /start.sh
RUN chmod +x /start.sh

CMD ["/start.sh"]