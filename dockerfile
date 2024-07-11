FROM node:14

# Buat direktori kerja untuk aplikasi Anda
WORKDIR /app

# Salin file package.json dan package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Salin semua file ke dalam image
COPY . .

# Ekspose port aplikasi Anda
EXPOSE 8080

# Perintah untuk menjalankan aplikasi
CMD ["node", "app.js"]
