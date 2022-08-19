/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		fontFamily: {
			'work-sans': ['Work Sans', 'sans-serif']
		},
		colors: {
			'jungle-green': '#092327',
			'light-cyan': '#D7F9F1',
			'radical-red': '#FF3366',
			blue: {
				600: '#2563EB'
			},
			gray: {
				400: '#9CA3AF',
				600: "#4B5563",
				700: '#374151',
				800: '#1F2937'
			},
			white: '#FFFFFF'
		},
		extend: {
			boxShadow: {
				default: '6px 6px 0 0 rgba(215, 249, 241, .25)'
			}
		}
	},
	plugins: []
};
