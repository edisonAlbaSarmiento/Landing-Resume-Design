/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { ThemeProvider } from 'styled-components';
import Page from './page';

// Imports: Themes
import theme from './themes';

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
       <Page/>
      </ThemeProvider>
    </div>
  );
}

export default App;
