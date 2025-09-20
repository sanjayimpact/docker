#Step 1 to pull the node version 

FROM node:22 AS build


WORKDIR /app


#Copy package.json for the dependencies

COPY package*.json ./

#install the neccessary pacakages

RUN npm install

#copy all the files from the directory

COPY . .


#after copy just make the build of the react app

RUN npm run build



#Step 2: use Nginx to serve the production build

FROM nginx:alpine

#copy build output (dist folder) to nginx html folder

COPY --from=build /app/dist /usr/share/nginx/html



#Expose port 80

EXPOSE 80


#start the Nginx server

CMD ["nginx", "-g", "daemon off;"]
 