/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{html,js}"],
	theme: {
		extend: {
			boxShadow: {
				"3xl": "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;",
			},
			colors: {
				grey: "#222831",
				ungu: "#5D50C6",
			},
			dropShadow: {
				mean: [
					"rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px",
				],
			},
		},
	},
	plugins: [],
};
