import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'ground/0',
			social: {
				//github: 'https://github.com/withastro/starlight',
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
