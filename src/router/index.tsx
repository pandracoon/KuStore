import React, { ReactElement } from 'react';
import { createGlobalStyle } from 'styled-components';
import LandingTemplate from '../components/LandingTemplate';
import LandingTitle from '../components/LandingTitle';
import LandingButton from '../components/LandingButton';

const GlobalStyle = createGlobalStyle`
body{
  background: #e9ecef;
}`;

const App = (): ReactElement => {
  return (
    <>
      <GlobalStyle />
      <LandingTemplate>
        <LandingTitle>
          <LandingButton url={'/member'} disabled={false}>
            <h3>회원관리</h3>
          </LandingButton>
          <LandingButton url={'/item'} disabled={false}>
            <h3>상품관리</h3>
          </LandingButton>
          <LandingButton url={'/order'} disabled={false}>
            <h3>주문관리</h3>
          </LandingButton>
          <LandingButton url={'/member'} disabled={false}>
            <h3>재고관리</h3>
          </LandingButton>
        </LandingTitle>
      </LandingTemplate>
    </>
  );
};

export default App;
