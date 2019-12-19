import React from 'react';
import { Reset } from 'styled-reset';
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`

`;

function App() {
  return (
    <div className="App">
      <Reset />
      <GlobalStyle />    
    </div>
  );
}

export default App;
