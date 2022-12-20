const path = require("path");
const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

module.exports = {
  title: "docusaurus-plugin-eslint-rules",
  tagline:
    "A docusaurus plugin that shows eslint rules as an autogenerated page",
  url: "https://gabrielcsapo.github.io",
  baseUrl: "/docusaurus-plugin-eslint-rules/",
  trailingSlash: true,
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.ico",
  organizationName: "gabrielcsapo",
  projectName: "docusaurus-plugin-eslint-rules",
  presets: [
    [
      "@docusaurus/preset-classic",
      {
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          editUrl:
            "https://github.com/gabrielcsapo/docusaurus-plugin-eslint-rules/edit/main",
        },
        blog: false,
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      },
    ],
  ],
  themeConfig: {
    zoom: {},
    navbar: {
      title: "docusaurus-plugin-eslint-rules",
      logo: {
        alt: "docusaurus-plugin-eslint-rules logo",
        src: "img/logo.svg",
      },
      items: [
        {
          to: "/docs/getting-started",
          position: "left",
          label: "Documentation",
        },
        { to: "/docs/rules", label: "Rules", position: "left" },
        {
          href: "https://github.com/gabrielcsapo/docusaurus-plugin-eslint-rules",
          label: "GitHub",
          position: "right",
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
              label: "Configuration",
              to: "/docs/getting-started",
            },
          ],
        },
        {},
        {
          title: "More",
          items: [
            {
              label: "GitHub",
              href: "https://github.com/gabrielcsapo/docusaurus-plugin-eslint-rules",
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Gabriel J. Csapo. Built with Docusaurus.`,
    },
    prism: {
      theme: lightCodeTheme,
      darkTheme: darkCodeTheme,
    },
  },
  plugins: [
    [
      "docusaurus-plugin-eslint-rules",
      {
        rulePath: path.resolve("..", "node_modules/eslint/lib/rules"),
      },
    ],
    [
      require.resolve("docusaurus-plugin-search-local"),
      {
        highlightSearchTermsOnTargetPage: true,
      },
    ],
  ],
};