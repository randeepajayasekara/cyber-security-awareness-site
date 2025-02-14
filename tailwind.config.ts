const defaultTheme = require("tailwindcss/defaultTheme");
 
const colors = require("tailwindcss/colors");
const svgToDataUri = require("mini-svg-data-uri");
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
			aurora: "aurora 60s linear infinite",
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
			aurora: {
				from: {
				  backgroundPosition: "50% 50%, 50% 50%",
				},
				to: {
				  backgroundPosition: "350% 50%, 350% 50%",
				},
			  },
		  },
  	}
  },
  plugins: [
		require("tailwindcss-animate"),
		addVariablesForColors,
		function ({ matchUtilities, theme }: any) {
		  matchUtilities(
			{
			  "bg-dot-thick": (value: any) => ({
				backgroundImage: `url("${svgToDataUri(
				  `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="16" height="16" fill="none"><circle fill="${value}" id="pattern-circle" cx="10" cy="10" r="2.5"></circle></svg>`
				)}")`,
			  }),
			},
			{ values: flattenColorPalette(theme("backgroundColor")), type: "color" }
		  );
		},
	  ],
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