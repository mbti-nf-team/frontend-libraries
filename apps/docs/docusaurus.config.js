// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: '@nft-team/frontend-libraries',
  tagline: 'Frontend Libraries',
  favicon: 'img/favicon.ico',
  url: 'https://mbti-nf-team.github.io',
  baseUrl: '/frontend-libraries/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'mbti-nf-team', // Usually your GitHub org/user name.
  projectName: 'frontend-libraries', // Usually your repo name.
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  trailingSlash: false,
  i18n: {
    defaultLocale: 'ko',
    locales: ['ko'],
  },
  plugins: [
    [
      'docusaurus-plugin-typedoc',
      {
        entryPoints: ['../../packages/react', '../../packages/core'],
        entryPointStrategy: 'packages',
        out: '.',
        sidebar: {
          fullNames: true,
        },
      },
    ],
  ],
  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/docusaurus-social-card.jpg',
      navbar: {
        title: '@nft-team/frontend-libraries',
        logo: {
          alt: 'My Site Logo',
          src: 'img/logo.svg',
        },
        items: [
          {
            to: 'docs/modules/nft_team_core',
            activeBasePath: 'docs/modules/nft_team_core',
            label: '@nft-team/core',
            position: 'left',
          },
          {
            to: 'docs/modules/nft_team_react',
            activeBasePath: 'docs/modules/nft_team_react',
            label: '@nft-team/react',
            position: 'left',
          },
          {
            to: 'docs/modules/nft_team_eslint',
            activeBasePath: 'docs/modules/nft_team_eslint',
            label: '@nft-team/eslint-config',
            position: 'left',
          },
          {
            href: 'https://github.com/mbti-nf-team/frontend-libraries',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Libraries',
            items: [
              {
                label: '@nft-team/core',
                to: '/docs/modules/nft_team_core',
              },
              {
                label: '@nft-team/react',
                to: '/docs/modules/nft_team_react',
              },
              {
                label: '@nft-team/eslint-config',
                to: '/docs/modules/nft_team_eslint',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Organization',
                href: 'https://github.com/mbti-nf-team',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'GitHub',
                href: 'https://github.com/mbti-nf-team/frontend-libraries',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} @nft-team.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
