import React, { ReactElement } from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import Header from '../../../components/Header';
import OrderDetailTemplate from '../../../components/Order/OrderDetailTemplate';

const GlobalStyle = createGlobalStyle`
body{
  background: #e9ecef;
}`;

const Title = styled.h1`
  text-align: center;
`;

const OrderDetail = (): ReactElement => {
  return (
    <>
      <GlobalStyle />
      <Header />
      <Title>주문정보</Title>
      <OrderDetailTemplate></OrderDetailTemplate>
    </>
  );
};

export default OrderDetail;
