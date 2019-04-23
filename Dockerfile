FROM node:10.15.1-alpine

# Create nectar directory
WORKDIR /usr/src/crypto

# Initialize env variables
ARG NPM_TOKEN
ARG AWS_ENV_URL=https://github.com/Droplr/aws-env/raw/2005b61afcc4e3f36eb0cd9a684cf1ecefe156b9/bin/aws-env-linux-amd64

RUN set -x \
    && apk add --no-cache bash curl \
    && mkdir /usr/local/sbin \
    && curl -L $AWS_ENV_URL -o /usr/local/sbin/aws-env \
    && chmod +x /usr/local/sbin/aws-env

# Install root dependencies
COPY package*.json ./
COPY .npmrc ./
RUN npm install --loglevel error

# Bundle app source
COPY . .

# Build app
RUN npm run build

RUN chmod +x /usr/src/crypto/entrypoint.sh
ENTRYPOINT ["/usr/src/crypto/entrypoint.sh"]

EXPOSE 3000
CMD [ "npm", "start" ]
