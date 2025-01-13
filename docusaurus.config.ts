import { themes as prismThemes } from "prism-react-renderer";
import type { Config } from "@docusaurus/types";
import type * as Preset from "@docusaurus/preset-classic";
import dotenv from "dotenv";
import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";

dotenv.config();

const config: Config = {
    title: "RoboHack",
    tagline: "Build a robot in 24 hours",
    favicon: "img/favicon.ico",

    // Set the production url of your site here
    url: "https://robohack.co.uk",
    // Set the /<baseUrl>/ pathname under which your site is served
    // For GitHub pages deployment, it is often '/<projectName>/'
    baseUrl: "/",

    // GitHub pages deployment config.
    // If you aren't using GitHub pages, you don't need these.
    organizationName: "roboticsoutreach", // Usually your GitHub org/user name.
    projectName: "robohack-website", // Usually your repo name.

    onBrokenLinks: "throw",
    onBrokenMarkdownLinks: "warn",

    // Even if you don't use internationalization, you can use this field to set
    // useful metadata like html lang. For example, if your site is Chinese, you
    // may want to replace "en" with "zh-Hans".
    i18n: {
        defaultLocale: "en",
        locales: ["en"],
    },

    customFields: {
        siteMode: process.env.SITE_MODE,
        srcompApiUrl: process.env.SRCOMP_API_URL,
    },

    presets: [
        [
            "classic",
            {
                docs: {
                    sidebarPath: "./sidebars.ts",
                    remarkPlugins: [remarkMath],
                    rehypePlugins: [rehypeKatex],
                },
                blog: {
                    showReadingTime: true,
                },
                theme: {
                    customCss: "./src/css/custom.css",
                },
            } satisfies Preset.Options,
        ],
    ],

    stylesheets: [
        {
            href: "https://cdn.jsdelivr.net/npm/katex@0.13.24/dist/katex.min.css",
            type: "text/css",
            integrity: "sha384-odtC+0UGzzFL/6PNoE8rX/SPcQDXBJ+uRepguP4QkPCm2LBxH3FA3y+fKSiJ+AmM",
            crossorigin: "anonymous",
        },
    ],

    themeConfig: {
        colorMode: {
            defaultMode: "light",
            disableSwitch: true,
            respectPrefersColorScheme: false,
        },

        navbar: {
            title: "RoboHack",
            logo: {
                alt: "RoboHack Logo",
                src: "img/logo.svg",
            },
            items: [
                {
                    to: "blog",
                    label: "News",
                    position: "left",
                },
                {
                    href: "/event",
                    position: "left",
                    label: "Event",
                },
                {
                    href: "/rules",
                    position: "left",
                    label: "Rules",
                },
                {
                    type: "docSidebar",
                    sidebarId: "docsSidebar",
                    position: "left",
                    label: "Docs",
                },
            ],
        },
        footer: {
            style: "dark",
            links: [
                {
                    title: "Docs",
                    items: [
                        {
                            label: "API",
                            to: "/docs/programming",
                        },
                        {
                            label: "Rules",
                            to: "/rules",
                        },
                    ],
                },
                {
                    title: "Social Media",
                    items: [
                        {
                            label: "Discord (SRO)",
                            href: "https://discord.gg/hfjQ3kqwXc",
                        },
                        {
                            label: "Facebook",
                            href: "http://facebook.com/SROSoton",
                        },
                    ],
                },
            ],
        },
        prism: {
            theme: prismThemes.github,
            darkTheme: prismThemes.dracula,
        },
    } satisfies Preset.ThemeConfig,
};

export default config;

