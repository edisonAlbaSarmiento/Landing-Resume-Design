/* eslint-disable react/jsx-filename-extension */
import React from "react";
import { ThemeProvider } from "styled-components";
import Page from "./page";
import { BrowserRouter as Router } from "react-router-dom";

// Imports: Themes
import theme from "./themes";

function App() {
  return (
    <Router>
      <div className="App">
        <ThemeProvider theme={theme}>
          <Page />
        </ThemeProvider>
      </div>
    </Router>
  );
}

export default App;
