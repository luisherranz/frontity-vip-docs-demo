const settings = {
  name: "vip",
  state: {
    frontity: {
      url: "https://test.frontity.org",
      title: "Test Frontity Blog",
      description: "WordPress installation for Frontity development",
    },
  },
  packages: [
    {
      name: "@frontity/mars-theme",
      state: {
        theme: {
          menu: [
            ["Home", "/"],
            ["How-to Guides", "/how-tos/"],
            ["Technical Reference", "/technical-references/"],
          ],
          featured: {
            showOnList: false,
            showOnPost: false,
          },
        },
      },
    },
    {
      name: "@frontity/wp-source",
      state: {
        source: {
          url: "https://docs.wpvip.com/",
          homepage: "welcome-to-the-wordpress-vip-documentation",
          params: {
            parent: 0,
            per_page: 99,
          },
          postTypes: [
            {
              type: "how-tos",
              endpoint: "how-tos",
              archive: "/how-tos",
            },
            {
              type: "technical-references",
              endpoint: "technical-references",
              archive: "/technical-references",
            },
          ],
        },
      },
    },
    "@frontity/tiny-router",
    "@frontity/html2react",
    "frontity-code-block-syntax",
    "@frontity/yoast",
  ],
};

export default settings;
