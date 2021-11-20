import React, { ReactElement } from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import Header from '../../../components/Header';
import MemberAddTemplate from '../../../components/Member/MemberAddTemplate';

const GlobalStyle = createGlobalStyle`
body{
  background: #e9ecef;
}`;

const Title = styled.h1`
  text-align: center;
`;

const MemberAdd = (): ReactElement => {
  return (
    <>
      <GlobalStyle />
      <Header />
      <Title>회원추가</Title>
      <MemberAddTemplate></MemberAddTemplate>
    </>
  );
};

export default MemberAdd;
