FROM node:20.12.2

WORKDIR /Node-Voice-Quickstart

# Copy files to install dependencies
COPY package.json yarn.lock ./

# Build the application and install dependencies using yarn
RUN yarn install && yarn cache clean

# Copy the source code into the container
COPY . .

# Run the application
ENTRYPOINT ["yarn", "start"]
