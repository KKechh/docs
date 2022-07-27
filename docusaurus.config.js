// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'HiCA 官网',
  tagline: 'HiCA是一家纯ACME的数字证书供应商',
  url: 'https://www.hi.cn',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'HiCA', // Usually your GitHub org/user name.
  projectName: 'docs', // Usually your repo name.

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'zh-Hans',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl: 'https://github.com/HiCA-ACME/docs/tree/master/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl: 'https://github.com/HiCA-ACME/docs/tree/master/',
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
      navbar: {
        title: 'HiCA 官网',
        logo: {
          alt: 'HiCA Logo',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'doc',
            docId: 'intro',
            position: 'left',
            label: '教程',
          },
          { to: '/blog', label: '博客', position: 'left' },
          {
            label: 'Github/HiCA-docs',
            href: 'https://github.com/HiCA-ACME/docs',
            position: 'right',
          },
          {
            label: 'Github/ACME.sh',
            href: 'https://github.com/acmesh-official/acme.sh',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Library',
            items: [
              {
                label: '教程',
                to: '/docs/intro',
              },
              {
                label: '合作申请',
                href: 'https://docs.qq.com/form/page/DY2JIWkF6ZXVJaHhP',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Telegram 群',
                href: 'https://t.me/+O20ETkdFppVhN2Q1',
              },
              {
                label: 'Wechat 群',
                href: 'https://www1.hi.cn/upload/wx-qun.jpeg',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: '官网 Repo',
                href: 'https://github.com/HiCA-ACME/docs',
              },
              {
                label: 'ACME.sh Repo',
                href: 'https://github.com/acmesh-official/acme.sh',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} HiCA, All rights reserved. 沪ICP备20022337号-17. <br/> <small>Note: the ACME logo and affliated graphics are registered trademarks of ISRG.</small>`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
      algolia: {
        // Algolia 提供的应用 ID
        appId: 'YOUR_APP_ID',

        //  公开 API 密钥：提交它没有危险
        apiKey: 'YOUR_SEARCH_API_KEY',

        indexName: 'YOUR_INDEX_NAME',

        // 可选：见下文
        contextualSearch: true,

        // 可选：声明哪些域名需要用 window.location 型的导航而不是 history.push。 适用于 Algolia 配置会爬取多个文档站点，而我们想要用 window.location.href 在它们之间跳转时。
        externalUrlRegex: 'github\\.com|gitlab\\.com|bitbucket\\.org',

        // 可选：Algolia 搜索参数
        searchParameters: {},

        // 可选：搜索页面的路径，默认启用（可以用 `false` 禁用）
        searchPagePath: 'search',

        // ……其他 Algolia 参数
      },
    }),
};

module.exports = config;
