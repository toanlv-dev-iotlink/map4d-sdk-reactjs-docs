const withNextra = require("nextra")({
  theme: "nextra-theme-docs",
  themeConfig: "./theme.config.tsx",
});

const { PHASE_EXPORT } = require('next/constants')

module.exports = withNextra({
  assetPrefix: "https://docs.map4d.vn/map4d-map/react-js/v1.0",
  images: {
    unoptimized: true,
  },
  basePath: "/map4d-map/react-js/v1.0",
});
module.exports = (phase, { defaultConfig }) => {
  if (phase == PHASE_EXPORT) {
    return withNextra({
      assetPrefix: "https://docs.map4d.vn/map4d-map/react-js/v1.0",
      images: {
        unoptimized: true,
      },
      basePath: "/map4d-map/react-js/v1.0",
    });
  }
  else{
    return withNextra();
  }
};
