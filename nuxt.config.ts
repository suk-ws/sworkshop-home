// https://nuxt.com/docs/api/configuration/nuxt-config

import { readFileSync } from "fs";
import path from "path";
import stylusAlias from "vite-plugin-stylus-alias-next";

export default defineNuxtConfig({
	
	compatibilityDate: "2025-05-30",
	devtools: { enabled: true },
	typescript: {
		typeCheck: true,
		shim: false, // takeover mode enabled
		strict: true
	},
	
	vite: {
		plugins: [
			stylusAlias()
		],
		resolve: {
			alias: {
				"~": path.resolve(__dirname, "./"),
			}
		},
		css: {
			preprocessorOptions: {
				stylus: {
					additionalData:
						readFileSync(path.resolve(__dirname, "./nuxt.config.stylus"), "utf-8")
						.replaceAll("~", path.resolve(__dirname, "./")),
				}
			}
		}
	},
	
	imports: {
		scan: false
	},
	components: {
		dirs: []
	},
	
	modules: [
		'@vueuse/nuxt',
		'@vueuse/motion/nuxt'
	],
	
	app: {
		
		head: {
			
			charset: "utf-8",
			viewport: "width=device-width, initial-scale=1"
			
		}
		
	}
	
})
