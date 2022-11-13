// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

// Inspiration for this config:
// * https://github.com/nikitavoloboev/knowledge/blob/main/docusaurus.config.js
// * https://github.com/LayZeeDK/github-pages-docusaurus/blob/main/docusaurus.config.js

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

const organizationName = "odalet";
const projectName = "mykb";

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'My KB',
  tagline: 'Stuff and thingies',
  url: `https://${organizationName}.github.io`,
  baseUrl: `/${projectName}/`,
  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName, // Usually your GitHub org/user name.
  projectName, // Usually your repo name.

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'fr'],
  },

  // Mermaid support (see https://docusaurus.io/fr/docs/next/markdown-features/diagrams)
  markdown: {
    mermaid: true,
  },
  themes: ['@docusaurus/theme-mermaid'],

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          routeBasePath: "/",
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            `https://github.com/${organizationName}/${projectName}/tree/master/`,
        },
        blog: false,
        // blog: {
        //   showReadingTime: true,
        //   // Please change this to your repo.
        //   // Remove this to remove the "edit this page" links.
        //   editUrl: `https://github.com/${organizationName}/${projectName}/tree/master/`,
        // },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // See https://docusaurus.io/docs/api/themes/configuration
      colorMode: {
        defaultMode: 'dark',
        disableSwitch: false,
        respectPrefersColorScheme: false,
      },
      image: 'img/violin.png',
      navbar: {
        title: 'My KB',
        logo: {
          alt: 'Violin',
          src: 'img/violin.png',
        },
        items: [
          // {
          //   type: 'doc',
          //   docId: 'intro',
          //   position: 'left',
          //   label: 'Tutorial',
          // },
          // {to: '/blog', label: 'Blog', position: 'left'},
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
        ],
      },
      footer: {
        style: 'dark',
        // links: [
        //   {
        //     title: 'Docs',
        //     items: [
        //       {
        //         label: 'Tutorial',
        //         to: '/docs/intro',
        //       },
        //     ],
        //   },
        //   {
        //     title: 'Community',
        //     items: [
        //       {
        //         label: 'GitHub',
        //         href: 'https://github.com/odalet/odalet.github.io/',
        //       },
        //       {
        //         label: 'Stack Overflow',
        //         href: 'https://stackoverflow.com/users/107552/odalet',
        //       },
        //       {
        //         label: 'Discord',
        //         href: 'https://discordapp.com/invite/docusaurus',
        //       },
        //       {
        //         label: 'Twitter',
        //         href: 'https://twitter.com/docusaurus',
        //       },
        //     ],
        //   },
        //   {
        //     title: 'More',
        //     items: [
        //       {
        //         label: 'Blog',
        //         to: '/blog',
        //       },
        //     ],
        //   },
        // ],
        copyright: `Copyright © ${new Date().getFullYear()} My KB: Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
