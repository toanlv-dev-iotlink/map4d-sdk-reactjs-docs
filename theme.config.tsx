import React from 'react'
import { DocsThemeConfig } from 'nextra-theme-docs'

const config: DocsThemeConfig = {
  logo: <span>REACT MAP4D SDK</span>,
  project: {
    link: 'https://github.com/map4d/map4d.github.io/tree/main/map4d-map/react-js',
  },
  chat: {
    link: 'https://iotlink.com.vn/lien-he/',
  },
  docsRepositoryBase: 'https://github.com/vantoan2509/map4d-sdk-reactjs-docs/tree/main',
  footer: {
    text: 'React Map4d Sdk Docs',
  },
  useNextSeoProps() {
    return {
      titleTemplate: '%s – Map4D Docs'
    }
  },
}

export default config
