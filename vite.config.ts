import { unstable_vitePlugin as remix } from "@remix-run/dev";
import { installGlobals } from "@remix-run/node";
import { defineConfig } from "vite";
import vitePluginTsconfigPaths from "vite-tsconfig-paths"
import vitePluginStylusAlias from "vite-plugin-stylus-alias"
import path from "node:path"

installGlobals()

const stylusMixins = `
@import "${path.resolve(__dirname,'./app/styles/mixins')}"
`
const stylusConfig = {
	additionalData: stylusMixins
}

export default defineConfig({
	plugins: [
		remix({
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
		}
	}
})
