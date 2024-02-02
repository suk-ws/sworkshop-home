FROM node:18-bullseye-slim as base
ENV NODE_ENV production

FROM base AS deps
WORKDIR /app
ADD package.json ./
RUN npm install --include=dev --legacy-peer-deps

FROM base as production-deps
WORKDIR /app
COPY --from=deps /app/node_modules /app/node_modules
ADD package.json ./
RUN npm prune --omit=dev --legacy-peer-deps

FROM base as build
WORKDIR /app
COPY --from=deps /app/node_modules /app/node_modules
ADD . .
RUN npm run build

FROM base
WORKDIR /app

COPY --from=production-deps /app/node_modules /app/node_modules
COPY --from=build /app/build /app/build
COPY --from=build /app/public /app/public
ADD . .

EXPOSE 3000
CMD ["npm", "start"]
