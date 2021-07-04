const customViewports = {
  phonex: {
    name: 'iPhone X',
    styles: {
      height: '812px',
      width: '375px',
    },
    type: 'mobile',
  }
}


export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  viewport: {
    viewports: customViewports
  }
}