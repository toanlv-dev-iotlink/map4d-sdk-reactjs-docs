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
  docsRepositoryBase: 'https://docs.map4d.vn/map4d-map/react-js/v1.0',
  footer: {
    text: 'React Map4d Sdk Docs',
  },
  useNextSeoProps() {
    return {
      titleTemplate: '%s – Map4DDocs'
    }
  },
}

export default config
