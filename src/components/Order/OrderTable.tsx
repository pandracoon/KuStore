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
  or_id: number;
  me_id: number;
  it_id: number;
  me_name: string;
  it_name: string;
  time: string;
  amount: number;
  total_price: number;
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
        {data.map(
          ({ or_id, me_name, it_name, amount, total_price, time, detail }) => (
            <tr key={or_id}>
              <OrderTableTd>{or_id}</OrderTableTd>
              <OrderTableTd>{me_name}</OrderTableTd>
              <OrderTableTd>{it_name}</OrderTableTd>
              <OrderTableTd>{amount}</OrderTableTd>
              <OrderTableTd>{total_price}</OrderTableTd>
              <OrderTableTd>{time}</OrderTableTd>
              <OrderTableTd>
                <Link to={detail}>상세보기</Link>
              </OrderTableTd>
            </tr>
          )
        )}
      </tbody>
    </OrderTableBlock>
  );
};

export default OrderTable;
