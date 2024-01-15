// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer").themes.github;
const darkCodeTheme = require("prism-react-renderer").themes.dracula;

const releaseVersion = "0.7.6";

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "GP2040-CE",
  tagline: "Community Edition Firmware",
  favicon: "img/favicon.ico",

  url: "https://gp2040-ce.info",
  baseUrl: "/",

  organizationName: "OpenStickCommunity",
  projectName: "GP2040-CE",

  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",

  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },
  markdown: {
    mermaid: true,
  },
  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          routeBasePath: "/",
        },
        blog: false,
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      }),
    ],
  ],
  themes: [
    [
      "@easyops-cn/docusaurus-search-local",
      {
        hashed: true,
        highlightSearchTermsOnTargetPage: true,
        docsRouteBasePath: "/",
      },
    ],
    "@docusaurus/theme-mermaid",
  ],
  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      colorMode: {
        defaultMode: "light",
        disableSwitch: false,
        respectPrefersColorScheme: true,
      },
      announcementBar: {
        id: "new_release",
        content: `New Version Available! To get the v${releaseVersion} update, go to <a href="https://github.com/OpenStickCommunity/GP2040-CE/releases/tag/v${releaseVersion}" target="_blank">GP2040-CE Releases<a/>`,
        backgroundColor: "#ec008c",
        textColor: "#FFFFFF",
        isCloseable: true,
      },
      navbar: {
        title: "GP2040-CE | Community Edition Firmware",
        logo: {
          alt: "GP2040-CE Logo",
          src: "img/gp2040-ce-logo.svg",
        },
        items: [
          {
            type: "docSidebar",
            position: "left",
            sidebarId: "docSidebar",
            label: "Home",
          },
          {
            type: "docSidebar",
            position: "left",
            sidebarId: "webConfigSidebar",
            label: "Web Configurator",
          },
          {
            type: "docSidebar",
            position: "left",
            sidebarId: "contributeSidebar",
            label: "Contribute",
          },
          {
            type: "doc",
            position: "left",
            docId: "downloads/download-page",
            label: "Downloads",
          },
          // VersionDropdown - To Be Reconsidered
          // {
          // 	type: 'docsVersionDropdown',
          // 	position: 'right',
          // 	dropdownActiveClassDisabled: true,
          // },
          {
            href: "https://discord.gg/k2pxhke7q8",
            label: "Discord",
            position: "right",
          },
          {
            href: "https://github.com/OpenStickCommunity/GP2040-CE",
            label: "GitHub",
            position: "right",
          },
        ],
      },
      docs: {
        sidebar: {
          hideable: true,
          autoCollapseCategories: false,
        },
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
  plugins: [
    [
      "docusaurus-plugin-remote-content",
      {
        // options here
        name: "README", // used by CLI, must be path safe
        sourceBaseUrl:
          "https://raw.githubusercontent.com/OpenStickCommunity/GP2040-CE/main/", // the base url for the markdown (gets prepended to all of the documents when fetching)
        outDir: "/", // the base directory to output to.
        documents: ["README.md"], // the file names to download
        performCleanup: true,
      },
    ],
    [
      "@docusaurus/plugin-client-redirects",
      {
        redirects: [
          {
            // Redirect for console compatibility update
            to: "/faq/faq-console-compatibility",
            from: ["/faq/faq-ps4-ps5-compatibility"],
          },
        ],
      },
    ],
  ],
};

module.exports = config;
