import React, { Component } from 'react';
import { Provider, styled,  } from 'reakit'
import theme from "./theme";
import { BackgroundImage } from "./BackgroundImage";
import {palette} from "styled-tools"

const PageWrapper = styled.div`
  font-family: sans-serif;
  color:${palette("primaryText", "white")}`

class App extends Component {
  render() {  
    return (
      <Provider theme={theme}>
        <PageWrapper>
          <BackgroundImage />
        </PageWrapper>
      </Provider>
    );
  }
}

export default App;
