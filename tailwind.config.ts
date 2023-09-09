import type { Config } from "tailwindcss";

const config: Config = {
	content: [
		"./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/components/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			backgroundImage: {
				"gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
				"gradient-conic":
					"conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
			},
			colors: {
				grey: "#222831",
				ungu: "#5D50C6",
				hitam: "#212326",
			},
			screens: {
				mobile: { max: "600px" },

				tablet: { min: "601px", max: "1024px" },

				ipad: { min: "820px", max: "1104px" },

				ipadMini: { min: "768px", max: "1024px" },
			},

			container: {
				center: true,
				padding: "1rem",
			},
		},
	},
	plugins: [],
};
export default config;
