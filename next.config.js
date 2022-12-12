const withNextra = require("nextra")({
  theme: "nextra-theme-docs",
  themeConfig: "./theme.config.tsx",
});

const { PHASE_EXPORT, PHASE_PRODUCTION_BUILD } = require("next/constants");

// module.exports = withNextra({
//   assetPrefix: "https://docs.map4d.vn/map4d-map/react-js/v1.0",
//   images: {
//     unoptimized: true,
//   },
//   basePath: "/map4d-map/react-js/v1.0",
// });
module.exports = (phase, { defaultConfig }) => {
  if (phase == PHASE_EXPORT || phase == PHASE_PRODUCTION_BUILD) {
    return withNextra({
      assetPrefix: "https://docs.map4d.vn/map4d-map/react-js/v1.0",
      images: {
        unoptimized: true,
      },
      basePath: "/map4d-map/react-js/v1.0",
    });
  } else {
    return withNextra();
  }
};
