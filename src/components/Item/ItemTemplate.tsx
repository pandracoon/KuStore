import axios from 'axios';
import React, { ReactElement, useEffect, useState } from 'react';
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

type ItemData = {
  it_id: number;
  it_name: string;
  price: number;
};

type ItemTableData = {
  it_id: number;
  it_name: string;
  price: number;
  detail: string;
};

const ItemTemplate = (): ReactElement => {
  const column = ['ID', '이름', '가격', '상세보기'];

  const state = useState<ItemTableData[]>([
    {
      it_id: 0,
      it_name: '',
      price: 0,
      detail: '',
    },
  ]);

  const tableData: ItemTableData[] = state[0];
  const setTableData = state[1];
  const temp = [];

  const [typeWord, setTypeWord] = useState(``);
  const [keyword, setKeyword] = useState(``);

  useEffect(() => {
    const fetchItemList = async (): Promise<number> => {
      try {
        const url = keyword
          ? `http://localhost:31413/item/search?name=${keyword}`
          : `http://localhost:31413/item`;
        console.log(url);
        const res = await axios.get(url);
        const resData = res.data as ItemData[];

        resData.forEach((data) => {
          const url = `./detail/${data.it_id}`;
          const det = { detail: url };
          const obj = Object.assign(data, det);
          temp.push(obj);
        });

        setTableData(temp);
        return 1;
      } catch (e) {
        console.log(e);
      }
    };

    const a = fetchItemList();
  }, [keyword]);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTypeWord(e.target.value);
  };

  const onClick = () => {
    setKeyword(typeWord);
  };

  return (
    <ItemTemplateBlock>
      <div className="header">
        <Button disabled={false} url={'./add'}>
          <p>추가하기</p>
        </Button>
        <Button disabled={false} func={onClick}>
          <p>검색하기</p>
        </Button>
        <input
          onChange={onChange}
          placeholder={'이름을 완전히 입력하세요'}
          value={typeWord}
        />
      </div>
      <ItemTable columns={column} data={tableData} />
    </ItemTemplateBlock>
  );
};

export default ItemTemplate;
