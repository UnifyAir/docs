import { themes as prismThemes } from 'prism-react-renderer';
import type { Config } from '@docusaurus/types';
import * as Preset from '@docusaurus/preset-classic';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
    title: 'Unifyair Docs',
    favicon: 'img/favicon.png',
    // docId: 'intro',

    // Set the production url of your site here
    url: "https://unifyair.github.io",
    // Set the /<baseUrl>/ pathname under which your site is served
    // For GitHub pages deployment, it is often '/<projectName>/'
    baseUrl: '/docs',

    // GitHub pages deployment config.
    // If you aren't using GitHub pages, you don't need these.
    organizationName: 'unifyair', // Usually your GitHub org/user name.
    projectName: 'docs', // Usually your repo name.

    onBrokenLinks: 'throw',
    onBrokenMarkdownLinks: 'warn',

    // Even if you don't use internationalization, you can use this field to set
    // useful metadata like html lang. For example, if your site is Chinese, you
    // may want to replace "en" with "zh-Hans".
    i18n: {
        defaultLocale: 'en',
        locales: ['en'],
    },
    presets: [
        [
            'classic',
            {
                docs: {
                    routeBasePath: '/',
                    sidebarPath: './sidebars.ts',
                    remarkPlugins: [remarkMath],
                    rehypePlugins: [rehypeKatex],
                },
                // blog: {
                //     showReadingTime: true,
                //     feedOptions: {
                //         type: ['rss', 'atom'],
                //         xslt: true,
                //     },
                //     // Please change this to your repo.
                //     // Remove this to remove the "edit this page" links.
                //     editUrl:
                //         'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
                //     // Useful options to enforce blogging best practices
                //     onInlineTags: 'warn',
                //     onInlineAuthors: 'warn',
                //     onUntruncatedBlogPosts: 'warn',
                // },
                theme: {
                    customCss: ['./src/css/custom.css', './src/css/rust-prismtheme.css'],
                },
            } satisfies Preset.Options,
        ],
    ],

    themeConfig: {
        // Replace with your project's social card
        docs: {
        },
        colorMode: {
            defaultMode: 'dark',
            disableSwitch: true,
            respectPrefersColorScheme: false,
        },
        navbar: {
            title: '',
            logo: {
                alt: 'Unfiyair Docs',
                src: 'img/logo.svg',
                href: 'https://unifyair.com',
                className: 'unifyair-logo',
            },
            items: [

                {
                    href: "https://unifyair.com/",
                    label: "Home",
                    position: "right",
                    className: "navbar-center nav-link-same-page",
                },
                {
                    href: "https://unifyair.com/about",
                    label: "About",
                    position: "right",
                    className: "navbar-center nav-link-same-page",
                },
                {
                    to: "/",
                    label: "Docs",
                    position: "right",
                    className: "navbar-center nav-link-same-page",
                },
                {
                    href: "https://unifyair.com/contact",
                    label: "Contact",
                    position: "right",
                    className: "navbar-center nav-link-same-page",
                },
                {
                    href: 'https://discord.gg/yuJHdZ4vEF',
                    'aria-label': 'Discord',
                    position: 'right',
                    className: 'navbar-discord-link navbar-image-link',
                },
                {
                    href: 'https://github.com/unifyair',
                    'aria-label': 'GitHub repository',
                    position: 'right',
                    className: 'navbar-github-link navbar-image-link',
                },
            ],
        },
        footer: {
            style: 'dark',
            links: [
                {
                    title: 'Docs',
                    items: [
                        {
                            label: 'Tutorial',
                            to: '/docs/intro',
                        },
                    ],
                },
                {
                    title: 'Community',
                    items: [
                        {
                            label: 'Stack Overflow',
                            href: 'https://stackoverflow.com/questions/tagged/docusaurus',
                        },
                        {
                            label: 'Discord',
                            href: 'https://discordapp.com/invite/docusaurus',
                        },
                        {
                            label: 'X',
                            href: 'https://x.com/docusaurus',
                        },
                    ],
                },
                {
                    title: 'More',
                    items: [
                        {
                            label: 'Blog',
                            to: '/blog',
                        },
                        {
                            label: 'GitHub',
                            href: 'https://github.com/unifyair',
                        },
                    ],
                },
            ],
        },
        prism: {
            defaultLanguage: 'bash',
            additionalLanguages: [
                'cpp',
                'bash',
                'json',
                'java',
                'rust',
            ],
            theme: { plain: {}, styles: [] },
            darkTheme: { plain: {}, styles: [] },
        },
    } satisfies Preset.ThemeConfig,

    // plugins: [
    //     'docusaurus-lunr-search',
    // ],
    //
    clientModules: [
        require.resolve('./custom-events/navbar-opacity.js'),
        require.resolve('./custom-events/navbar-div-grouping.js')
    ],
    themes: [
        '@docusaurus/theme-mermaid',
        '@docusaurus/theme-live-codeblock',
        [
            require.resolve("@easyops-cn/docusaurus-search-local"),
            {
                hashed: true,
                language: ["en", "zh"],
                highlightSearchTermsOnTargetPage: true,
                explicitSearchResultPath: true,
            }
        ]
    ],
    markdown: {
        mermaid: true,
    },
    stylesheets: [
        'https://cdn.jsdelivr.net/npm/prism-themes@1.9.0/themes/prism-vsc-dark-plus.min.css',
        {
            href: 'https://cdn.jsdelivr.net/npm/katex@0.13.24/dist/katex.min.css',
            type: 'text/css',
            integrity:
                'sha384-odtC+0UGzzFL/6PNoE8rX/SPcQDXBJ+uRepguP4QkPCm2LBxH3FA3y+fKSiJ+AmM',
            crossorigin: 'anonymous',
        },
    ],
};

export default config;
