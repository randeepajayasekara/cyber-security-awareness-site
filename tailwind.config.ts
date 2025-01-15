const defaultTheme = require("tailwindcss/defaultTheme");
 
const colors = require("tailwindcss/colors");
const {
  default: flattenColorPalette,
} = require("tailwindcss/lib/util/flattenColorPalette");
 

/** @type {import('tailwindcss').Config} */
export default {
    darkMode: ["class"],
    content: ["./index.html", "./src/**/*.{ts,tsx,js,jsx}"],
  theme: {
  	extend: {
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		},
  		colors: {},
		
		animation: {
			spotlight: "spotlight 2s ease .75s 1 forwards",
		  },
		  keyframes: {
			spotlight: {
			  "0%": {
				opacity: 0,
				transform: "translate(-72%, -62%) scale(0.5)",
			  },
			  "100%": {
				opacity: 1,
				transform: "translate(-50%,-40%) scale(1)",
			  },
			},
		  },
  	}
  },
  plugins: [require("tailwindcss-animate"), addVariablesForColors],
};

 
function addVariablesForColors({ addBase, theme }: any) {
	let allColors = flattenColorPalette(theme("colors"));
	let newVars = Object.fromEntries(
	  Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
	);
   
	addBase({
	  ":root": newVars,
	});
  }