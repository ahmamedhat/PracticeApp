/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./App.{js,jsx,ts,tsx}","./src/**/*.{js,jsx,ts,tsx}"],
	theme: {
		extend: {
			colors: {
				main: "#0A0E21",
				secondary: "#3498DB",
			},
			fontFamily: {
				poppins: ["Poppins"]
			},
		},
	},
	plugins: [],
};

