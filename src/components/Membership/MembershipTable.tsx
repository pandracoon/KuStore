import React, { ReactElement } from 'react';
import styled from 'styled-components';

const MemebershipTableTd = styled.td`
  text-align: center;
  border: 1px solid #444444;
`;

const MemebershipTableBlock = styled.table`
  border: 1px solid #444444;
`;

type MemebershipTableProps = {
  columns: string[];
  data: MemebershipData[];
};

type MemebershipData = {
  me_id: number;
  me_name: string;
  point: number;
};

const MemebershipTable = ({
  columns,
  data,
}: MemebershipTableProps): ReactElement => {
  return (
    <MemebershipTableBlock>
      <thead>
        <tr>
          {columns.map((column) => (
            <th key={column}>{column}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map(({ me_id, me_name, point }) => (
          <tr key={me_id}>
            <MemebershipTableTd>{me_id}</MemebershipTableTd>
            <MemebershipTableTd>{me_name}</MemebershipTableTd>
            <MemebershipTableTd>{point}</MemebershipTableTd>
          </tr>
        ))}
      </tbody>
    </MemebershipTableBlock>
  );
};

export default MemebershipTable;
