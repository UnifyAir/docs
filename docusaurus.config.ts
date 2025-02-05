import { themes as prismThemes } from 'prism-react-renderer';
import type { Config } from '@docusaurus/types';
import * as Preset from '@docusaurus/preset-classic';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';
import 'dotenv/config';


// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
    title: 'Unifyair Docs',
    favicon: 'img/favicon.png',

    // Set the production url of your site here
    // url: "https://unifyair.github.io",
    url: "https://docs.unifyair.com",
    // Set the /<baseUrl>/ pathname under which your site is served
    // For GitHub pages deployment, it is often '/<projectName>/'
    baseUrl: '/',

    // GitHub pages deployment config.
    // If you aren't using GitHub pages, you don't need these.
    organizationName: 'unifyair', // Usually your GitHub org/user name.
    projectName: 'docs', // Usually your repo name.
    trailingSlash: false,
    onBrokenLinks: 'throw',
    onBrokenMarkdownLinks: 'warn',
    deploymentBranch: 'gh-pages',
    // Even if you don't use internationalization, you can use this field to set
    // useful metadata like html lang. For example, if your site is Chinese, you
    // may want to replace "en" with "zh-Hans".
    i18n: {
        defaultLocale: 'en',
        locales: ['en'],
    },
    customFields: {
        prodUrl: process.env.URL,
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
                blog: false,
                theme: {
                    customCss: ['./src/css/custom.css', './src/css/rust-prismtheme.css'],
                },
                sitemap: {
                    lastmod: 'datetime',
                    changefreq: 'weekly',
                    priority: 0.5,
                    ignorePatterns: ['/search', '/tags/**'],
                    filename: 'sitemap.xml',
                    createSitemapItems: async (params) => {
                        const { defaultCreateSitemapItems, ...rest } = params;
                        const items = await defaultCreateSitemapItems(rest);
                        return items.filter((item) => !item.url.includes('/page/'));
                    },
                }
            } satisfies Preset.Options,
        ],
    ],

    themeConfig: {
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
                    href: `${process.env.URL}/`,
                    label: "Home",
                    position: "right",
                    className: "navbar-center nav-link-same-page",
                },
                {
                    href: `${process.env.URL}/about`,
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
                    href: `${process.env.URL}/contact`,
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
        prism: {
            defaultLanguage: 'bash',
            additionalLanguages: [
                'cpp',
                'bash',
                'json',
                'java',
                'rust',
                "markup",
                "jsx",
                "tsx",
                "go",
                "python",
                "toml",
            ],
            theme: { plain: {}, styles: [] },
            darkTheme: { plain: {}, styles: [] },
        },
    } satisfies Preset.ThemeConfig,

    clientModules: [
        require.resolve('./custom-events/navbar-opacity.js'),
        // require.resolve('./custom-events/navbar-div-grouping.js')
    ],
    themes: [
        '@docusaurus/theme-mermaid',
        '@docusaurus/theme-live-codeblock',
        [
            require.resolve("@easyops-cn/docusaurus-search-local"),
            {
                hashed: true,
                language: ["en"],
                highlightSearchTermsOnTargetPage: true,
                explicitSearchResultPath: true,
                indexDocs: true,
                indexBlog: false,
                docsRouteBasePath: "/",
                ignoreCssSelectors: ".breadcrumbs__link"
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
