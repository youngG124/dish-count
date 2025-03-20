# Node.js 환경에서 React 빌드
FROM node:18 AS build
WORKDIR /app
COPY . .
RUN npm install && npm run build

# Nginx로 정적 파일 서빙
FROM nginx:alpine
COPY --from=build /app/dist /usr/share/nginx/html
COPY nginx.conf /etc/nginx/nginx.conf

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
