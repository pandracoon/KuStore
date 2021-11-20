import React, { ReactElement } from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import Header from '../../components/Header';
import ItemTemplate from '../../components/Item/ItemTemplate';

const GlobalStyle = createGlobalStyle`
body{
  background: #e9ecef;
}`;

const Title = styled.h1`
  text-align: center;
`;

const Item = (): ReactElement => {
  return (
    <>
      <GlobalStyle />
      <Header />
      <Title>상품관리</Title>
      <ItemTemplate></ItemTemplate>
    </>
  );
};

export default Item;
