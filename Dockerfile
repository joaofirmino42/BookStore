# Use uma imagem base com um servidor web (por exemplo, Nginx)
# O nginx é um servidor leve e de código fonte aberto para realizar requisições HTTP
FROM nginx:latest

# Copie os arquivos da aplicação para o diretório padrão do servidor web do Nginx
COPY ./src /usr/share/nginx/html

# O Nginx expõe a porta 80 por padrão, onde o servidor web irá rodar
EXPOSE 80

# Comando para iniciar o servidor web Nginx em primeiro plano
CMD ["nginx", "-g", "daemon off;"]