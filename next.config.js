const withNextra = require('nextra')({
  theme: 'nextra-theme-docs',
  themeConfig: './theme.config.tsx',
})

module.exports = withNextra({
  assetPrefix: 'https://docs.map4d.vn/map4d-map/react-js/v1.0',
  images: {
    unoptimized: true,
  },
  basePath: '/map4d-map/react-js/v1.0'
})
