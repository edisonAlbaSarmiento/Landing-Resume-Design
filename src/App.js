import React from 'react';
import Page from './page';
import { ThemeProvider } from 'styled-components';

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
