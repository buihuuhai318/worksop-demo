# App web tĩnh: không có bước build, chỉ phục vụ file bằng nginx
FROM nginx:stable-alpine
COPY index.html /usr/share/nginx/html/index.html
COPY src /usr/share/nginx/html/src
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
