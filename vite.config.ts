import { vitePlugin as remix } from "@remix-run/dev";
import { defineConfig } from "vite";
import vitePluginTsconfigPaths from "vite-tsconfig-paths"
import vitePluginStylusAlias from "vite-plugin-stylus-alias-next"
import path from "node:path"

const stylusMixins = `
@import "${path.resolve(__dirname,'./app/styles/mixins')}"
`
const stylusConfig = {
	additionalData: stylusMixins
}

declare module "@remix-run/node" {
  // or cloudflare, deno, etc.
  interface Future {
    v3_singleFetch: true;
  }
}

export default defineConfig({
	plugins: [
		remix({
			future: {
				v3_fetcherPersist: true,
				v3_relativeSplatPath: true,
				v3_throwAbortReason: true,
				v3_lazyRouteDiscovery: true,
				v3_singleFetch: true,
				v3_routeConfig: true,
			},
			ignoredRouteFiles: [
				"**/*.styl",
				"**/*.stylus"
			],
		}),
		vitePluginTsconfigPaths(),
		vitePluginStylusAlias(),
	],
	resolve: {
		alias: {
			"~": path.resolve(__dirname, "./app"),
		}
	},
	css: {
		preprocessorOptions: {
			stylus: stylusConfig,
			styl: stylusConfig
		},
		modules: {
			localsConvention: "camelCase",
		}
	}
})
