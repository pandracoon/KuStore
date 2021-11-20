import React, { ReactElement } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const ItemTableTd = styled.td`
  text-align: center;
  border: 1px solid #444444;
`;

const ItemTableBlock = styled.table`
  border: 1px solid #444444;
`;

type ItemTableProps = {
  columns: string[];
  data: ItemData[];
};

type ItemData = {
  id: number;
  name: string;
  price: string;
  detail: string;
};

const ItemTable = ({ columns, data }: ItemTableProps): ReactElement => {
  return (
    <ItemTableBlock>
      <thead>
        <tr>
          {columns.map((column) => (
            <th key={column}>{column}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map(({ id, name, price, detail }) => (
          <tr key={id}>
            <ItemTableTd>{id}</ItemTableTd>
            <ItemTableTd>{name}</ItemTableTd>
            <ItemTableTd>{price}</ItemTableTd>
            <ItemTableTd>
              <Link to={detail}>상세보기</Link>
            </ItemTableTd>
          </tr>
        ))}
      </tbody>
    </ItemTableBlock>
  );
};

export default ItemTable;
