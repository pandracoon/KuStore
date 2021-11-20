import React, { ReactElement } from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import Header from '../../../components/Header';
import OrderAddTemplate from '../../../components/Order/OrderAddTemplate';

const GlobalStyle = createGlobalStyle`
body{
  background: #e9ecef;
}`;

const Title = styled.h1`
  text-align: center;
`;

const OrderAdd = (): ReactElement => {
  return (
    <>
      <GlobalStyle />
      <Header />
      <Title>주문추가</Title>
      <OrderAddTemplate></OrderAddTemplate>
    </>
  );
};

export default OrderAdd;
