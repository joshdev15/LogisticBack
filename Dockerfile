FROM node:18.16.0-buster-slim

COPY [".", "/usr/src/"]

WORKDIR /usr/src/

EXPOSE 9876

# RUN yarn


