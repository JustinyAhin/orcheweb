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
			blue: {
				600: '#2563EB'
			},
			gray: {
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
