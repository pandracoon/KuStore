import React, { ReactElement } from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import Header from '../../components/Header';
import MemberTemplate from '../../components/Member/MemberTemplate';

const GlobalStyle = createGlobalStyle`
body{
  background: #e9ecef;
}`;

const Title = styled.h1`
  text-align: center;
`;

const Member = (): ReactElement => {
  return (
    <>
      <GlobalStyle />
      <Header />
      <Title>회원관리</Title>
      <MemberTemplate></MemberTemplate>
    </>
  );
};

export default Member;
