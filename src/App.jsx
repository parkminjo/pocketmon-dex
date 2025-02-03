import React from "react";
import Router from "./shared/Router";
import GlobalStyle from "./GlobalStyle";
import styled from "styled-components";

const App = () => {
  return (
    <div>
      <GlobalStyle />
      <Router />
    </div>
  );
};

export default App;
