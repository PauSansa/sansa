/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		colors: {
			white: "#ffffff",
			card: "#2c2c2c",
			gray: {
			  50: "#FAFAFA",
			  100: "#F5F5F5",
			  200: "#E5E5E5",
			  300: "#D4D4D4",
			  400: "#A3A3A3",
			  500: "#737373",
			  600: "#525252",
			  700: "#404040",
			  800: "#262626",
			  900: "#171717",
			},
			darkslate: {
			  50: "#3D3D3D",
			  100: "#2C2C2C",
			  200: "#262626",
			  300: "#202020",
			  400: "#1A1A1A",
			  500: "#171717" /* Exactly your example for the background */,
			  600: "#141414",
			  700: "#111111",
			  800: "#0E0E0E",
			  900: "#0B0B0B" /* Deeper and darker */,
			},
			primary:{
			  100: "#DAC2D9",
			  200: "#C39AC5",
			  300: "#AB71B0",
			  400: "#9449AC",
			  500: "#7D21A8",
			  600: "#701F95",
			  700: "#621D82",
			  800: "#541B6F",
			  900: "#47195C"
			},
		  },
		extend: {},
	},
	plugins: [],
}
