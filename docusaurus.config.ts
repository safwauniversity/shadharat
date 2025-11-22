import { themes as prismThemes } from 'prism-react-renderer';
import type { Config } from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: 'شذرات',
  tagline: 'منصة بث رقمي حديثة تهدف إلى تقديم المحتوى الديني والثقافي الموثوق',
  favicon: 'img/favicon.ico',

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },

  // Set the production url of your site here
  url: 'https://safwauniversity.github.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/shadharat/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'safwauniversity', // Usually your GitHub org/user name.
  projectName: 'shadharat', // Usually your repo name.
  trailingSlash: false,

  onBrokenLinks: 'throw',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'ar',
    locales: ['ar'],
    localeConfigs: {
      ar: {
        direction: 'rtl',
      },
    },
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/safwauniversity/shadharat/tree/main/',
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: 'img/docusaurus-social-card.jpg',
    colorMode: {
      respectPrefersColorScheme: true,
    },
    navbar: {
      title: 'شذرات',
      logo: {
        alt: 'شعار شذرات',
        src: 'img/favicon.ico',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'left',
          label: 'الدليل الشامل',
        },
        {
          href: 'https://github.com/safwauniversity/shadharat',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'عن شذرات',
          items: [
            {
              label: 'الرؤية والأهداف',
              to: '/docs/overview/definition',
            },
            {
              label: 'الجمهور المستهدف',
              to: '/docs/overview/audience',
            },
          ],
        },
        {
          title: 'المحتوى',
          items: [
            {
              label: 'الأقسام الرئيسية',
              to: '/docs/content-structure/categories',
            },
            {
              label: 'الميزات التقنية',
              to: '/docs/core-features/playback',
            },
          ],
        },
        {
          title: 'المجتمع',
          items: [
            {
              label: 'GitHub',
              href: 'https://github.com/safwauniversity/shadharat',
            },

          ],
        },
      ],
      copyright: `جميع الحقوق محفوظة © ${new Date().getFullYear()} منصة شذرات.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
