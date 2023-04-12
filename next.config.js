const withNextra = require("nextra")({
  theme: "nextra-theme-docs",
  themeConfig: "./theme.config.tsx",
});

const { PHASE_EXPORT, PHASE_PRODUCTION_BUILD } = require("next/constants");

module.exports = (phase, { defaultConfig }) => {
  if (process.env.APP_ENV == "export") {
    return withNextra({
      assetPrefix: "https://docs.map4d.vn/map4d-map/react-js/v1.1.8",
      images: {
        unoptimized: true,
      },
      basePath: "/map4d-map/react-js/v1.1.8",
    });
  } else {
    return withNextra();
  }
};
