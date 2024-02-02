# Homepage of Sukazyo Workshop

[![Website](https://img.shields.io/website?url=https%3A%2F%2Fsukazyo.cc%2F&up_message=ON&up_color=mediumseagreen&down_message=down&down_color=red&label=Homepage)](https://sukazyo.cc/)
[![Docker Image Version (latest semver)](https://img.shields.io/docker/v/sukazyoworkshop/sworkshop-home?label=Latest%20on%20Docker)](https://hub.docker.com/r/sukazyoworkshop/sworkshop-home)

This website is using Remix + Vite + Stylus!

- [Remix Docs](https://remix.run/docs)

## Development

From your terminal:

```sh
yarn dev
```

This starts your app in development mode, rebuilding assets on file changes.

## Deployment

First, build your app for production:

```sh
yarn build
```

Then run the app in production mode:

```sh
yarn start
```

Now you'll need to pick a host to deploy it to.

### DIY

If you're familiar with deploying node applications, the built-in Remix app server is production-ready.

Make sure to deploy the output of `remix build`

- `build/`
- `public/build/`
