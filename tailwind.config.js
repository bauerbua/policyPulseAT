/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/app/**/*.{html,ts}'],
	theme: {
		extend: {
			fontFamily: {
				sans: ['Graphik', 'sans-serif'],
				serif: ['Merriweather', 'serif'],
			},
			colors: {
				// Primary Colors
				softSky: '#d4eaf7',
				tranquilBlue: '#b6ccd8',
				charcoalGray: '#3b3c3d',

				// Accent Colors
				skyBlue: '#71c4ef',
				deepOceanBlue: '#00668c',

				// Text Colors
				richBlack: '#1d1c1c',
				slateGray: '#313d44',

				// Background Colors
				creamWhite: '#fffefb',
				linen: '#f5f4f1',
				silverGray: '#cccbc8',
			},
		},
	},
	plugins: [],
};
