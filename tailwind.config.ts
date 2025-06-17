// tailwind.config.ts
import type { Config } from 'tailwindcss';

const config: Config = {
	content: [
		'./app/**/*.{js,ts,jsx,tsx}',
		'./components/**/*.{js,ts,jsx,tsx}',
		'./sections/**/*.{js,ts,jsx,tsx}',
	],
	theme: {
		extend: {
			fontFamily: {
				cairo: ['var(--font-cairo)'],
			},
		},
	},
	darkMode: 'class', // إذا كنت تستخدم الوضع الداكن
	plugins: [],
};
export default config;
