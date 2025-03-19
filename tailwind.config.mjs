/** @type {import('tailwindcss').Config} */
const config = {
	content: [
		"./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/components/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			colors: {
				background: "var(--background)",
				foreground: "var(--foreground)",
				notion: {
					default: "#191919",
					text: "#d4d4d4",
					gray_bg: "#252525",
					gray: "#9B9B9B",
					blue: "#447ACB",
					purple: "#865DBB",
					red: "#BE524B",
					green: "#4F9768",
				},
			},
		},
	},
	plugins: [],
};

export default config;
