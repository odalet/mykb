import { themes as prismThemes } from 'prism-react-renderer';
import type { Config } from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const organizationName = "odalet";
const projectName = "mykb";

const config: Config = {
  title: 'My KB',
  tagline: "Stuff n' thingies",
  favicon: 'img/favicon.ico',
  url: `https://${organizationName}.github.io`,
  baseUrl: `/${projectName}/`,

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName,
  projectName,

  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',
  markdown: {
    format: 'detect', // so that md are interpreted as commonmark and not mdx
    mermaid: true
  },

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'fr'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl: `https://github.com/${organizationName}/${projectName}/tree/master/`,
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl: `https://github.com/${organizationName}/${projectName}/tree/master/`,
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],
  themes: ['@docusaurus/theme-mermaid'],

  themeConfig: {
    // See https://docusaurus.io/docs/api/themes/configuration
    image: 'img/violin.png',
    navbar: {
      title: 'My KB',
      logo: {
        alt: 'MyKB',
        src: 'img/violin.png',
      },
      items: [
        { to: '/blog', label: 'Blog', position: 'left' },
        {
          type: 'docSidebar',
          sidebarId: 'linksSidebar',
          position: 'left',
          label: 'Links',
        },
        {
          href: 'https://twitter.com/odalet',
          position: 'right',
          className: "header-twitter-link",
          "aria-label": "Twitter",
        },
        {
          href: 'https://stackoverflow.com/users/107552/odalet',
          position: 'right',
          className: "header-stackoverflow-link",
          "aria-label": "Stack Overflow",
        },
        {
          href: 'https://github.com/odalet/',
          position: 'right',
          className: "header-github-link",
          "aria-label": "GitHub",
        },
        {
          href: 'https://www.linkedin.com/in/odalet/',
          position: 'right',
          className: "header-linkedin-link",
          "aria-label": "Linkedin",
        }
      ],
    },
    footer: {
      style: 'dark',
      links: [
        // {
        //   title: 'Links',
        //   items: [
        //     {
        //       label: 'Intro',
        //       to: '/docs/intro',
        //     },
        //   ],
        // },
        // {
        //   title: 'Community',
        //   items: [
        //     {
        //       label: 'Stack Overflow',
        //       href: 'https://stackoverflow.com/questions/tagged/docusaurus',
        //     },
        //     {
        //       label: 'Discord',
        //       href: 'https://discordapp.com/invite/docusaurus',
        //     },
        //     {
        //       label: 'Twitter',
        //       href: 'https://twitter.com/docusaurus',
        //     },
        //   ],
        // },
        // {
        //   title: 'More',
        //   items: [
        //     {
        //       label: 'Blog',
        //       to: '/blog',
        //     },
        //     {
        //       label: 'GitHub',
        //       href: 'https://github.com/facebook/docusaurus',
        //     },
        //   ],
        // },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} My KB: Built with <a href="https://docusaurus.io/">Docusaurus</a>. Illustrations by <a href="https://iconscout.com/contributors/delesign" class="text-underline font-size-sm">Delesign Graphics</a> on <a href="https://iconscout.com" class="text-underline font-size-sm">IconScout</a>`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
      additionalLanguages: ['bash', 'batch', 'csharp', 'elixir', 'erlang', 'gcode', 'java', 'powershell'],
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
