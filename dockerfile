# Gunakan Nginx sebagai base image
FROM nginx:alpine

# Copykan file index.html dari direktori lokal ke dalam direktori default Nginx
COPY index.html /usr/share/nginx/html

# Nginx secara default akan mengekspose port 80
EXPOSE 80

# Command untuk menjalankan Nginx di background saat container berjalan
CMD ["nginx", "-g", "daemon off;"]
