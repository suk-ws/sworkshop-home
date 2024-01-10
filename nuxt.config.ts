// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	
	devtools: { enabled: true },
	
	typescript: {
		shim: false, // takeover mode enabled
		strict: true
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
