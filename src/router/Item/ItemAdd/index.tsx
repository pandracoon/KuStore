import React, { ReactElement } from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import Header from '../../../components/Header';
import ItemAddTemplate from '../../../components/Item/ItemAddTemplate';

const GlobalStyle = createGlobalStyle`
body{
  background: #e9ecef;
}`;

const Title = styled.h1`
  text-align: center;
`;

const ItemAdd = (): ReactElement => {
  return (
    <>
      <GlobalStyle />
      <Header />
      <Title>상품추가</Title>
      <ItemAddTemplate></ItemAddTemplate>
    </>
  );
};

export default ItemAdd;
