// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	
	compatibilityDate: "2025-05-30",
	devtools: { enabled: true },
	typescript: {
		typeCheck: true,
		shim: false, // takeover mode enabled
		strict: true
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
