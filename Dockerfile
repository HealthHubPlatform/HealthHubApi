FROM node:14.7.0

ENV     APP_HOME /app

WORKDIR ${APP_HOME}

# Copy all other source code to work directory
ADD . /app

# Install all Packages
RUN npm ci

# Compile TypeScript
RUN npm run-script build

# Copy docker-entrypoint to WORKDIR
COPY docker-entrypoint.sh /

# Expose APP port
EXPOSE 8080

# Use entrypoint script so we can set NODE_ENV from EXPEDIA_ENVIRONMENT as set at command-line
ENTRYPOINT ["/docker-entrypoint.sh"]
