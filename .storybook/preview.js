import { addDecorator } from '@storybook/react';
import { ThemeProvider } from 'styled-components';

import theme from '../src/styles/theme';
import GlobalStyles from '../src/styles/globalStyles';

addDecorator((story)=>(
  <ThemeProvider theme={theme}>
  {story()}
  <GlobalStyles/>
  </ThemeProvider>
  
));

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  backgrounds: {
    default: 'blog',
    values: [
      {
        name: 'blog',
        value: '#818181',
      },

    ],
  },
}