/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/app/**/*.{html,ts}'],
	theme: {
		extend: {
			colors: {
				text: {
					50: '#f6f6ef',
					100: '#ececdf',
					200: '#dadabe',
					300: '#c7c79e',
					400: '#b5b57d',
					500: '#a2a25d',
					600: '#82824a',
					700: '#616138',
					800: '#414125',
					900: '#202013',
					950: '#101009',
				},
				background: {
					50: '#f6f6ee',
					100: '#eeeedd',
					200: '#ddddbb',
					300: '#cccc99',
					400: '#bbbb77',
					500: '#aaaa55',
					600: '#888844',
					700: '#666633',
					800: '#444422',
					900: '#222211',
					950: '#111109',
				},
				primary: {
					50: '#f8f8ec',
					100: '#f0f1da',
					200: '#e2e4b4',
					300: '#d3d68f',
					400: '#c4c969',
					500: '#b5bb44',
					600: '#919636',
					700: '#6d7029',
					800: '#494b1b',
					900: '#24250e',
					950: '#121307',
				},
				secondary: {
					50: '#f9f9eb',
					100: '#f2f3d8',
					200: '#e6e8b0',
					300: '#d9dc89',
					400: '#ccd062',
					500: '#c0c43b',
					600: '#999d2f',
					700: '#737623',
					800: '#4d4f17',
					900: '#26270c',
					950: '#131406',
				},
				accent: {
					50: '#f9faea',
					100: '#f3f5d6',
					200: '#e8ebad',
					300: '#dce184',
					400: '#d1d75b',
					500: '#c5cd32',
					600: '#9ea428',
					700: '#767b1e',
					800: '#4f5214',
					900: '#27290a',
					950: '#141505',
				},
			},

			fontSize: {
				sm: '0.750rem',
				base: '1rem',
				xl: '1.333rem',
				'2xl': '1.777rem',
				'3xl': '2.369rem',
				'4xl': '3.158rem',
				'5xl': '4.210rem',
			},
			fontFamily: {
				heading: 'Times New Roman',
				body: 'Afacad',
			},
			fontWeight: {
				normal: '400',
				bold: '700',
			},
		},
	},
	plugins: [],
};