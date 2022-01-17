const colors = require("tailwindcss/colors");

module.exports = {
	purge: [
		"./src/pages/**/*.{js,ts,jsx,tsx}",
		"./src/components/**/*.{js,ts,jsx,tsx}",
	],
	darkMode: false, // or 'media' or 'class'
	theme: {
		extend: {
			spacing: {
				136: "34rem",
			},
			lineHeight: {
				12: "3rem",
				15: "3.75rem",
				22: "5.5rem",
			},
			zIndex: {
				"-1": -1,
			},
		},
		boxShadow: {
			navbar: '5px 5px 5px rgba(0,0,0,0.5)'
		},
		colors: {
			gray: colors.gray,
			black: colors.black,
			white: colors.white,
			red: colors.red,
			blue: colors.blue,
			green: colors.green,
			main: {
				light: "#7FA9E3",
				dark: "#1F2136",
				contrast: "#F76361",
				contrastlight: "#f57d7b",
				bg: '#EFEFEF'
			},
			transparent: 'transparent'
		},
		
		fontFamily: {
			main: ["Ruda", "sans-serif"],
			bungee: ["Bungee Shade", "sans-serif"],
		},
	},
	variants: {
		extend: {
			borderWidth: ["last"],
			translate: ["last"],
			inset:['first','last'],
		},
	},
	plugins: [
		require('@tailwindcss/aspect-ratio'),
		require('tailwindcss-debug-screens'),
	],
};
