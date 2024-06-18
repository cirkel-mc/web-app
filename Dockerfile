# stage 1
# install and build dependencies on this projects
FROM node:20.11.1-alpine3.19 AS builder

WORKDIR /app

# copy depedencies to builder
COPY package.json pnpm-lock.yaml ./ 

# install dependencies
RUN yarn install

# copy any files from this project before build the application
COPY . .

# build applications
RUN yarn build

# stage 2
# runner for running the application
FROM node:20.11.1-alpine3.19

WORKDIR /app

# copy from builder
COPY --from=builder /app/package.json ./package.json
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public

# expose port applications
EXPOSE 3000

CMD ["yarn", "start"]