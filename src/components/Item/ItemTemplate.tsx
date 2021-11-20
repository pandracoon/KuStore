import React, { ReactElement, useState } from 'react';
import styled from 'styled-components';
import Button from '../Button';
import ItemTable from './ItemTable';

const ItemTemplateBlock = styled.div`
  width: 1000px;
  height: 768px;

  position: relative; /* 추후 박스 하단에 추가 버튼을 위치시키기 위한 설정 */
  background: white;
  border-radius: 16px;
  box-shadow: 0 0 8px 0 rgba(0, 0, 0, 0.04);

  margin: 0 auto; /* 페이지 중앙에 나타나도록 설정 */

  margin-bottom: 32px;
  display: flex;
  flex-direction: column;

  .header {
    height: 50px;
    display: flex;
    flex-direction: row-reverse;
  }
`;

const ItemTemplate = (): ReactElement => {
  const column = ['ID', '이름', '가격', '상세보기'];
  const data = [
    { id: 1, name: 'heelo', price: 'hoho' },
    { id: 2, name: 'heelo', price: 'hoho' },
  ];
  const tableData = [];
  data.forEach((data) => {
    const url = `./${data.id}`;
    const det = { detail: url };
    const obj = Object.assign(data, det);
    tableData.push(obj);
  });
  const [keyword, setkey] = useState(``);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setkey(e.target.value);
  };

  return (
    <ItemTemplateBlock>
      <div className="header">
        <Button disabled={false} url={'./add'}>
          <p>추가하기</p>
        </Button>
        <Button disabled={false} url={`/${keyword}`}>
          <p>검색하기</p>
        </Button>
        <input onChange={onChange} value={keyword} />
      </div>
      <ItemTable columns={column} data={tableData} />
    </ItemTemplateBlock>
  );
};

export default ItemTemplate;
