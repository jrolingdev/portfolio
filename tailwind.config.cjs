const colors = require('tailwindcss/colors');

module.exports = {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		fontFamily: {
			sans: 'Rubik, sans-serif'
		},
		extend: {
			colors: {
				primary: colors.sky,
				success: colors.green,
				warning: colors.yellow,
				error: colors.red
			}
		}
	},
	plugins: []
};
