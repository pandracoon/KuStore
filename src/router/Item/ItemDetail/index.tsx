import React, { ReactElement } from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import Header from '../../../components/Header';
import ItemDetailTemplate from '../../../components/Item/ItemDetailTemplate';

const GlobalStyle = createGlobalStyle`
body{
  background: #e9ecef;
}`;

const Title = styled.h1`
  text-align: center;
`;

const ItemDetail = (): ReactElement => {
  return (
    <>
      <GlobalStyle />
      <Header />
      <Title>상품정보</Title>
      <ItemDetailTemplate></ItemDetailTemplate>
    </>
  );
};

export default ItemDetail;
