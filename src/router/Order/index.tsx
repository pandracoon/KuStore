import React, { ReactElement } from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import Header from '../../components/Header';
import OrderTemplate from '../../components/Order/OrderTemplate';

const GlobalStyle = createGlobalStyle`
body{
  background: #e9ecef;
}`;

const Title = styled.h1`
  text-align: center;
`;

const Order = (): ReactElement => {
  return (
    <>
      <GlobalStyle />
      <Header />
      <Title>주문관리</Title>
      <OrderTemplate></OrderTemplate>
    </>
  );
};

export default Order;
