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
          menu: [["Home", "/"]],
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
  ],
};

export default settings;
