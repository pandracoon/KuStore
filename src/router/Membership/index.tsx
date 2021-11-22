import React, { ReactElement } from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import Header from '../../components/Header';
import MembershipTemplate from '../../components/Membership/MembershipTemplate';

const GlobalStyle = createGlobalStyle`
body{
  background: #e9ecef;
}`;

const Title = styled.h1`
  text-align: center;
`;

const Membership = (): ReactElement => {
  return (
    <>
      <GlobalStyle />
      <Header />
      <Title>멤버쉽현황</Title>
      <MembershipTemplate></MembershipTemplate>
    </>
  );
};

export default Membership;
