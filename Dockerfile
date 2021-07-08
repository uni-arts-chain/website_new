FROM nginx:1.18.0
ENV APP_ROOT /app
COPY . /usr/share/nginx/html
COPY default.conf /etc/nginx/conf.d/default.conf
CMD ["nginx", "-g", "daemon off;"]
