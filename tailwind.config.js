/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			colors: {
				primary: "#003b95", // Màu xanh lam đặc trưng
				secondary: "#febb02", // Màu vàng cam nút bấm
			},
		},
	},
	plugins: [],
};
