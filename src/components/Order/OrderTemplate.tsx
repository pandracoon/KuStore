import axios from 'axios';
import React, { ReactElement, useEffect, useState } from 'react';
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

type OrderData = {
  or_id: number;
  me_id: number;
  it_id: number;
  me_name: string;
  it_name: string;
  time: string;
  amount: number;
  total_price: number;
};

type OrderTableData = {
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
  const stateTable = useState<OrderTableData[]>([
    {
      or_id: 0,
      me_id: 0,
      it_id: 0,
      me_name: '',
      it_name: '',
      time: '',
      amount: 0,
      total_price: 0,
      detail: '',
    },
  ]);
  const tableData: OrderTableData[] = stateTable[0];
  const setTableData = stateTable[1];
  const temp = [];

  const [typeWord, setTypeWord] = useState(``);
  const [keyword, setKeyword] = useState(``);

  const parsingDate = (date: string) => {
    return date.split('T')[0];
  };

  useEffect(() => {
    const fetchOrderList = async (): Promise<number> => {
      try {
        const url = keyword
          ? `http://localhost:31413/order/search?name=${keyword}`
          : `http://localhost:31413/order`;
        console.log(url);
        const res = await axios.get(url);
        const resData = res.data as OrderData[];

        resData.forEach((data) => {
          const url = `./detail/${data.or_id}`;
          const det = { detail: url };
          const obj = Object.assign(data, det);
          Object.assign(obj, { time: parsingDate(obj.time) });
          temp.push(obj);
        });

        setTableData(temp);
        return 1;
      } catch (e) {
        console.log(e);
      }
    };

    const a = fetchOrderList();
    console.log(a);
  }, [keyword]);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTypeWord(e.target.value);
  };

  const onClick = () => {
    setKeyword(typeWord);
  };
  return (
    <OrderTemplateBlock>
      <div className="header">
        <Button disabled={false} url={'./add'}>
          <p>추가하기</p>
        </Button>
        <Button disabled={false} func={onClick}>
          <p>검색하기</p>
        </Button>
        <input
          onChange={onChange}
          placeholder="주문자를 완전히 입력하세요"
          value={typeWord}
        />
      </div>
      <OrderTable columns={column} data={tableData} />
    </OrderTemplateBlock>
  );
};

export default OrderTemplate;
