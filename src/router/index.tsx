import React, { ReactElement } from 'react';
import { createGlobalStyle } from 'styled-components';
import LandingTemplate from '../components/Landing/LandingTemplate';
import LandingTitle from '../components/Landing/LandingTitle';
import LandingButton from '../components/Landing/LandingButton';

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
          <LandingButton url={'/membership'} disabled={false}>
            <h3>멤버쉽현황</h3>
          </LandingButton>
          <LandingButton url={'/inventory'} disabled={false}>
            <h3>재고현황</h3>
          </LandingButton>
        </LandingTitle>
      </LandingTemplate>
    </>
  );
};

export default App;
