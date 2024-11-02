import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'ground/0',
			pagination: false,
			tableOfContents: { minHeadingLevel: 1 },
			defaultLocale: 'en',
			locales: {
				// English docs in `src/content/docs/en/`
				en: {
				  label: 'English',
				},
				de: {
				  label: 'Deutsch',
				  lang: 'de',
				},
			  },
			social: {
				github: 'https://github.com/si9int/wiki',
			},
			sidebar: [
				{
					label: 'Web',
					autogenerate: { directory: 'web' },
				},
				{
					label: 'Network',
					autogenerate: { directory: 'net' },
				},
				{
					label: 'Linux',
					autogenerate: { directory: 'linux' },
				},
			],
		}),
	],
});
