import React, { ReactElement } from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import Header from '../../components/Header';
import InventoryTemplate from '../../components/Inventory/InventoryTemplate';

const GlobalStyle = createGlobalStyle`
body{
  background: #e9ecef;
}`;

const Title = styled.h1`
  text-align: center;
`;

const Inventory = (): ReactElement => {
  return (
    <>
      <GlobalStyle />
      <Header />
      <Title>재고현황</Title>
      <InventoryTemplate></InventoryTemplate>
    </>
  );
};

export default Inventory;
