/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./App.{js,jsx,ts,tsx}","./src/**/*.{js,jsx,ts,tsx}"],
	theme: {
		extend: {
			colors: {
				main: "#121212",
				secondary: "#3498DB",
				third: "#A0C8E0",
				primaryBackground: "#121212",
				secondaryBackground: "",
				accentBackground: "",
				primaryButton: "#2D2D2D",
				successButton: "",
				dangerButton: "",
				disabledButton: "",
				primaryText: "",
				secondaryText: "",
				accentText: "",
			},
			fontFamily: {
				poppins: ["Poppins"]
			},
		},
	},
	plugins: [],
};

