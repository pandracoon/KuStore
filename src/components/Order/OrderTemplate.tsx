import React, { ReactElement, useState } from 'react';
import styled from 'styled-components';
import Button from '../Button';
import OrderTable from './OrderTable';

const OrderTemplateBlock = styled.div`
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

const OrderTemplate = (): ReactElement => {
  const column = [
    'ID',
    '주문자이름',
    '상품이름',
    '개수',
    '가격',
    '주문일시',
    '상세보기',
  ];
  const data = [
    {
      id: 1,
      me_name: 'heelo',
      it_name: 'hoho',
      amount: 'fuck',
      price: 30000,
      date: 'oh',
    },
    {
      id: 2,
      me_name: 'heelo',
      it_name: 'hoho',
      amount: 'fuck',
      price: 30000,
      date: 'oh',
    },
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
    <OrderTemplateBlock>
      <div className="header">
        <Button disabled={false} url={'./add'}>
          <p>추가하기</p>
        </Button>
        <Button disabled={false} url={`/${keyword}`}>
          <p>검색하기</p>
        </Button>
        <input onChange={onChange} value={keyword} />
      </div>
      <OrderTable columns={column} data={tableData} />
    </OrderTemplateBlock>
  );
};

export default OrderTemplate;
