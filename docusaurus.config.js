// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'RealWear Developer Documentation',
  tagline: 'Our community of app developers is essential to our joint success. We have a growing ecosystem of apps developed for RealWear devices.',
  url: 'https://developer.realwear.com',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon-16x16.png',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'RealWear', // Usually your GitHub org/user name.
  projectName: 'docusaurus', // Usually your repo name.

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  plugins: [require.resolve("@cmfcmf/docusaurus-search-local")],

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          exclude: ['./old-obsolete', './cloud'],
          editUrl: 'https://github.com/realwear/devdocs/tree/main'
        },
        blog: {
          showReadingTime: true,
          editUrl: 'https://github.com/realwear/devdocs/tree/main'
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css')
        },
        gtag: {
          trackingID: 'G-C31XEKE65P',
          anonymizeIP: false,
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        // title: 'RealWear Developer Documentation',
        logo: {
          alt: 'RealWear Developer Documentation',
          src: 'img/desktop_logo_themed.svg',
          srcDark: 'img/desktop_logo_themed_dark.svg',
        },
        items: [
          {
            type: 'doc',
            docId: 'developer-guide',
            position: 'left',
            label: 'Documentation',
          },
          {to: '/blog', label: 'Blog', position: 'left'},
          // {
          //   href: 'https://github.com/facebook/docusaurus',
          //   label: 'GitHub',
          //   position: 'right',
          // },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          // {
          //   title: 'Docs',
          //   items: [
          //     {
          //       label: 'RealWear Explorer',
          //       to: '/docs/developer-guide',
          //     },
          //   ],
          // },
          {
            title: 'Community',
            items: [                        
              {
                label: 'Twitter',
                href: 'https://twitter.com/realwearinc',
              },
              {
                label: 'LinkedIn',
                href: 'https://www.linkedin.com/company/realwear-inc/',
              }
            ],
          },
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
        copyright: `Copyright © ${new Date().getFullYear()} RealWear Inc.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
        additionalLanguages: [ 'java', 'csharp', 'kotlin' ]
      },
    }),
};

module.exports = config;
