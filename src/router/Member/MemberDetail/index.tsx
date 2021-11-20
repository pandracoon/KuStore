import React, { ReactElement } from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import Header from '../../../components/Header';
import MemberDetailTemplate from '../../../components/Member/MemberDetailTemplate';

const GlobalStyle = createGlobalStyle`
body{
  background: #e9ecef;
}`;

const Title = styled.h1`
  text-align: center;
`;

const MemberDetail = (): ReactElement => {
  return (
    <>
      <GlobalStyle />
      <Header />
      <Title>회원정보</Title>
      <MemberDetailTemplate></MemberDetailTemplate>
    </>
  );
};

export default MemberDetail;
