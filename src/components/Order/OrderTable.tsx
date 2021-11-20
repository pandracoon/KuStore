import React, { ReactElement } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const OrderTableTd = styled.td`
  text-align: center;
  border: 1px solid #444444;
`;

const OrderTableBlock = styled.table`
  border: 1px solid #444444;
`;

type OrderTableProps = {
  columns: string[];
  data: OrderData[];
};

type OrderData = {
  id: number;
  me_name: string;
  it_name: string;
  amount: number;
  price: number;
  date: string;
  detail: string;
};

const OrderTable = ({ columns, data }: OrderTableProps): ReactElement => {
  return (
    <OrderTableBlock>
      <thead>
        <tr>
          {columns.map((column) => (
            <th key={column}>{column}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map(({ id, me_name, it_name, amount, price, date, detail }) => (
          <tr key={id}>
            <OrderTableTd>{id}</OrderTableTd>
            <OrderTableTd>{me_name}</OrderTableTd>
            <OrderTableTd>{it_name}</OrderTableTd>
            <OrderTableTd>{amount}</OrderTableTd>
            <OrderTableTd>{price}</OrderTableTd>
            <OrderTableTd>{date}</OrderTableTd>
            <OrderTableTd>
              <Link to={detail}>상세보기</Link>
            </OrderTableTd>
          </tr>
        ))}
      </tbody>
    </OrderTableBlock>
  );
};

export default OrderTable;
