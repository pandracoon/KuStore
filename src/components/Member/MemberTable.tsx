import React, { ReactElement } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const MemberTableTd = styled.td`
  text-align: center;
  border: 1px solid #444444;
`;

const MemberTableBlock = styled.table`
  border: 1px solid #444444;
`;

type MemberTableProps = {
  columns: string[];
  data: MemberData[];
};

type MemberData = {
  me_id: number;
  name: string;
  phone: string;
  date: string;
  detail: string;
};

const MemberTable = ({ columns, data }: MemberTableProps): ReactElement => {
  return (
    <MemberTableBlock>
      <thead>
        <tr>
          {columns.map((column) => (
            <th key={column}>{column}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map(({ me_id, name, phone, date, detail }) => (
          <tr key={me_id}>
            <MemberTableTd>{me_id}</MemberTableTd>
            <MemberTableTd>{name}</MemberTableTd>
            <MemberTableTd>{phone}</MemberTableTd>
            <MemberTableTd>{date}</MemberTableTd>
            <MemberTableTd>
              <Link to={detail}>상세보기</Link>
            </MemberTableTd>
          </tr>
        ))}
      </tbody>
    </MemberTableBlock>
  );
};

export default MemberTable;
