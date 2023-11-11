import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
  site: 'https://jamiemason.github.io/syncpack',
  base: '/syncpack',
  integrations: [
    starlight({
      title: 'Syncpack',
      social: {
        github: 'https://github.com/JamieMason/syncpack',
        twitter: 'https://twitter.com/fold_left',
      },
      editLink: {
        baseUrl: 'https://github.com/JamieMason/syncpack/edit/starlight/site/',
      },
      favicon: '/favicon.ico',
      logo: {
        src: './src/assets/logo.svg',
      },
      components: {
        Sidebar: './src/components/Sidebar.astro',
      },
      customCss: ['./src/styles/custom.css'],
      defaultLocale: 'en',
      locales: {
        en: {
          label: 'English',
          lang: 'en-GB',
        },
      },
      sidebar: [
        {
          label: 'Guides',
          autogenerate: { directory: 'guide' },
        },
        {
          label: 'Commands',
          autogenerate: { directory: 'command' },
        },
        {
          label: 'Config',
          autogenerate: { directory: 'config' },
        },
        {
          label: 'Integrations',
          autogenerate: { directory: 'integrations' },
        },
        {
          label: 'Examples',
          autogenerate: { directory: 'examples' },
        },
      ],
    }),
  ],
});
