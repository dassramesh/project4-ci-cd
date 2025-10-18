# Step 1: Use official Node.js image from Docker Hub
FROM node:18

# Step 2: Set working directory inside container
WORKDIR /app

# Step 3: Copy package.json and package-lock.json (if exists)
COPY package*.json ./

# Step 4: Install app dependencies
RUN npm install

# Step 5: Copy rest of your app files into container
COPY . .

# Step 6: Tell Docker which port your app will use
EXPOSE 3000

# Step 7: Command to start your app
CMD ["node", "app.js"]
