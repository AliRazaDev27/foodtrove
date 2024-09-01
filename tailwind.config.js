/** @type {import('tailwindcss').Config} */
export default {
    darkMode: ["class"],
    content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
  	extend: {
  		colors: {
  			primary: 'hsla(205, 36%, 23%, 1)',
  			secondary: 'hsla(0, 0%, 51%, 1)',
  			lightred: 'hsla(4, 91%, 58%, 1)',
  			lightgreen: 'hsla(152, 51%, 47%, 1)'
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		}
  	},
  	plugins: []
  },
    plugins: [require("tailwindcss-animate")]
}

