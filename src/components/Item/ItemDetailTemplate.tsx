import axios from 'axios';
import React, { ReactElement, useEffect, useState } from 'react';
import { NavigateFunction } from 'react-router-dom';
import styled from 'styled-components';
import Button from '../Button';

const ItemDetailTemplateBlock = styled.div`
  width: 512px;
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
  .form {
    display: flex;
    flex-direction: column;
  }

  span {
    font-weight: bold;
  }
`;

type DataType = {
  it_name: string;
  price: number;
};

const ItemDetailTemplate = (): ReactElement => {
  const path = window.location.pathname;
  const splited = path.split('/');
  const pageID = splited[3];

  const [inputs, setInputs] = useState({
    it_name: '',
    price: 0,
  });

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, name } = e.target; // 우선 e.target 에서 name 과 value 를 추출
    setInputs({
      ...inputs, // 기존의 input 객체를 복사한 뒤
      [name]: value, // name 키를 가진 값을 value 로 설정
    });
  };
  const onClickUpdate = async (navigate: NavigateFunction, url: string) => {
    try {
      console.log('here');
      const res = await axios.post(`http://localhost:31413/item/update`, {
        id: pageID,
        it_name: it_name,
        price: price,
      });
      console.log(res);
      navigate(url);
    } catch (e) {
      console.log(e);
    }
  };

  const onClickDelete = async (navigate: NavigateFunction, url: string) => {
    try {
      console.log('here');
      const res = await axios.post(`http://localhost:31413/item/delete`, {
        id: pageID,
      });
      console.log(res);
      navigate(url);
    } catch (e) {
      console.log(e);
    }
  };

  const { it_name, price } = inputs;

  useEffect(() => {
    const fetchMemeberDetail = async (): Promise<number> => {
      try {
        const res = await axios.get(
          `http://localhost:31413/item/detail?id=${pageID}`
        );
        const resData = res.data as DataType[];
        const inputData = {
          it_name: resData[0].it_name,
          price: resData[0].price,
        };
        setInputs(inputData);

        return 1;
      } catch (e) {
        console.log(e);
      }
    };

    const a = fetchMemeberDetail();
    console.log(a);
  }, []);

  return (
    <ItemDetailTemplateBlock>
      <div className="header">
        <Button navFunc={onClickDelete} disabled={false} url={`/item`}>
          <p>삭제하기</p>
        </Button>
        <Button navFunc={onClickUpdate} disabled={false} url={`/item`}>
          <p>수정하기</p>
        </Button>
      </div>
      <div className="form">
        <h4>상품ID: {pageID}</h4>
        <div>
          <span>이름: </span>
          <input name="it_name" onChange={onChange} value={it_name} />
        </div>
        <div>
          <span>가격: </span>
          <input name="price" onChange={onChange} value={price} />
        </div>
      </div>
    </ItemDetailTemplateBlock>
  );
};

export default ItemDetailTemplate;
