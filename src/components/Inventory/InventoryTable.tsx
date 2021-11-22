import React, { ReactElement } from 'react';
import styled from 'styled-components';

const InventoryTableTd = styled.td`
  text-align: center;
  border: 1px solid #444444;
`;

const InventoryTableBlock = styled.table`
  border: 1px solid #444444;
`;

type InventoryTableProps = {
  columns: string[];
  data: InventoryData[];
};

type InventoryData = {
  it_id: number;
  it_name: string;
  storage: number;
};

const InventoryTable = ({
  columns,
  data,
}: InventoryTableProps): ReactElement => {
  return (
    <InventoryTableBlock>
      <thead>
        <tr>
          {columns.map((column) => (
            <th key={column}>{column}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map(({ it_id, it_name, storage }) => (
          <tr key={it_id}>
            <InventoryTableTd>{it_id}</InventoryTableTd>
            <InventoryTableTd>{it_name}</InventoryTableTd>
            <InventoryTableTd>{storage}</InventoryTableTd>
          </tr>
        ))}
      </tbody>
    </InventoryTableBlock>
  );
};

export default InventoryTable;
