import React, { Component } from 'react';
import { Provider, styled, } from 'reakit'
import theme from "./theme";
import { palette } from "styled-tools"
import { PopulatedBackgroundImage } from './Container/PopulatedBackgroundImage';
import { connect } from "react-redux";

import { loadImage } from './actions';
import { Layout } from './Components/Layout';

const PageWrapper = styled.div`
  font-family: sans-serif;
  color:${palette("primaryText", "white")};
  `

class App extends Component {
  render() {
    return (
      <Provider theme={theme}>
        <PageWrapper>
          <PopulatedBackgroundImage />
          <Layout />
        </PageWrapper>
      </Provider>
    );
  }
}

export default connect()(App);
