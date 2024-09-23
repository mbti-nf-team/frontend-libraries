/* eslint-disable import/no-unresolved */
const coreItems = require('./docs/core/typedoc-sidebar.cjs');
const reactItems = require('./docs/react/typedoc-sidebar.cjs');
const fetchItems = require('./docs/fetch/typedoc-sidebar.cjs');
const storageItems = require('./docs/storage/typedoc-sidebar.cjs');

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
  typedocSidebar: [
    {
      type: 'category',
      label: 'Introduction',
      link: {
        type: 'doc',
        id: 'index',
      },
      items: [],
    },
    {
      type: 'category',
      label: '@nf-team/eslint-config',
      link: {
        type: 'doc',
        id: 'eslint-config/index',
      },
      items: [],
    },
    {
      type: 'category',
      label: '@nf-team/stylelint-config',
      link: {
        type: 'doc',
        id: 'stylelint-config/index',
      },
      items: [],
    },
    {
      type: 'category',
      label: '@nf-team/core',
      link: {
        type: 'doc',
        id: 'core/index',
      },
      items: coreItems,
    },
    {
      type: 'category',
      label: '@nf-team/react',
      link: {
        type: 'doc',
        id: 'react/index',
      },
      items: reactItems,
    },
    {
      type: 'category',
      label: '@nf-team/fetch',
      link: {
        type: 'doc',
        id: 'fetch/index',
      },
      items: fetchItems,
    },
    {
      type: 'category',
      label: '@nf-team/storage',
      link: {
        type: 'doc',
        id: 'storage/index',
      },
      items: storageItems,
    },
  ],
};

module.exports = sidebars;
