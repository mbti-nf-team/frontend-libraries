import type * as Preset from '@docusaurus/preset-classic';
import type { Config } from '@docusaurus/types';
import { themes } from 'prism-react-renderer';

const config: Config = {
  title: '@nf-team/frontend-libraries',
  tagline: '@mbti-nf-team 프론트엔드 라이브러리 모음',
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
    'docusaurus-plugin-sass',
    [
      'docusaurus-plugin-typedoc',
      {
        id: 'api-1',
        entryPoints: ['../../packages/core'],
        entryPointStrategy: 'packages',
        out: 'core',
        sidebar: {
          fullNames: true,
          position: 1,
          categoryLabel: '@nf-team/core',
        },
      },
    ],
    [
      'docusaurus-plugin-typedoc',
      {
        id: 'api-2',
        entryPoints: ['../../packages/react'],
        entryPointStrategy: 'packages',
        out: 'react',
        sidebar: {
          fullNames: true,
          position: 2,
          categoryLabel: '@nf-team/react',
        },
      },
    ],
  ],
  markdown: {
    format: 'mdx',
    mermaid: true,
    preprocessor: ({ fileContent }) => fileContent.replaceAll('{{MY_VAR}}', 'MY_VALUE'),
    mdx1Compat: {
      comments: true,
      admonitions: true,
      headingIds: true,
    },
  },
  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/mbti-nf-team/frontend-libraries/tree/main/apps/docs/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: 'img/docusaurus-social-card.jpg',
    navbar: {
      title: '@nf-team/frontend-libraries',
      logo: {
        alt: 'My Site Logo',
        src: 'img/logo.png',
      },
      items: [
        {
          to: 'docs/core',
          activeBasePath: 'docs/core',
          label: '@nf-team/core',
          position: 'left',
        },
        {
          to: 'docs/react',
          activeBasePath: 'docs/react',
          label: '@nf-team/react',
          position: 'left',
        },
        {
          to: 'docs/eslint-config',
          activeBasePath: 'docs/eslint-config',
          label: '@nf-team/eslint-config',
          position: 'left',
        },
        {
          to: 'docs/stylelint-config',
          activeBasePath: 'docs/stylelint-config',
          label: '@nf-team/stylelint-config',
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
              label: '@nf-team/core',
              to: '/docs/core',
            },
            {
              label: '@nf-team/react',
              to: '/docs/react',
            },
            {
              label: '@nf-team/eslint-config',
              to: '/docs/eslint-config',
            },
            {
              label: '@nf-team/stylelint-config',
              to: '/docs/stylelint-config',
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
      copyright: `Copyright © ${new Date().getFullYear()} @NFTeam.`,
    },
    prism: {
      theme: themes.github,
      darkTheme: themes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
