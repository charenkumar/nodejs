```dockerfile
# we will use the latest version of node available from the Docker Hub.
FROM node:latest

# Create app directory, where your app will live its lifetime.
WORKDIR /usr/src/app

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
COPY package*.json ./

# Installing the packages while the image is building
RUN npm install

# Bundle app source, i.e. copying all your required files for the app
# Note: files & folders inside .dockerignore will not be copied.
COPY . .

# The app binds to port 3000, so exposing port 3000 to be used by the docker network
EXPOSE 3000

# Runtime command to be executed when the container is launched
CMD ["node", "app.js"]
```

### Running the demo nodejs app on your machine

Step 1: Clone to repository 

```
git clone https://github.com/trulymittal/nodejs_dockerfile.git
```

Step 2: cd into the repository 

```
cd nodejs_dockerfile
```

Step 3: Build the docker image

```
docker build -t IMAGE_NAME .
```

Step 4: Run the docker container from the image

```
docker run -d -p 3000:3000 IMAGE_NAME
```

Create a new directory - 
```
mkdir [folder name]
```
Enter (or change directory) into the created directory - 
```
cd [folder name]
```
Copy files from github - 
```
git clone [git repository web address]
```
Build the docker file - 
```
docker build -t [name] .
```
Run the docker file - 
```
docker run -it -p [free port:internal port] [name] 
```
Check docker image status - 
```
docker ps (or) docker ps -a
```
Access the web app from your browser - start browser - search - 
```
localhost:[free port given]
```
