import axios from 'axios';
import React, { ReactElement, useEffect, useState } from 'react';
import { NavigateFunction } from 'react-router-dom';
import styled from 'styled-components';
import api from '../../api';
import Button from '../Button';

const OrderDetailTemplateBlock = styled.div`
  width: 512px;
  height: 768px;

  position: relative;
  background: white;
  border-radius: 16px;
  box-shadow: 0 0 8px 0 rgba(0, 0, 0, 0.04);

  margin: 0 auto;

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
  it_id: string;
  me_id: string;
  me_name: string;
  it_name: string;
  amount: number;
  total_price: number;
  price: number;
  time: string;
};

const OrderDetailTemplate = (): ReactElement => {
  const path = window.location.pathname;
  const splited = path.split('/');
  const pageID = splited[3];

  const [inputs, setInputs] = useState({
    me_id: '',
    it_id: '',
    amount: 0,
  });

  const [me_name, setMeName] = useState(``);
  const [it_name, setItName] = useState(``);
  const [time, setTime] = useState(``);
  const [total_price, setPrice] = useState(0);
  const [disable, setDisable] = useState(false);

  const onChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    try {
      const { value, name } = e.target;
      setInputs({
        ...inputs,
        [name]: value,
      });

      if (name == 'me_id') {
        const res = await axios.get(`${api}/member/detail?id=${value}`);
        const resData = res.data as DataType[];
        const temp = resData[0].me_name;
        setMeName(temp);
        if (it_id !== '' && Number(amount) > 0) setDisable(false);
      } else if (name == 'it_id') {
        const res = await axios.get(`${api}/item/detail?id=${value}`);
        const resData = res.data as DataType[];
        const temp = resData[0].it_name;
        setItName(temp);
        if (me_name !== '' && Number(amount) > 0) setDisable(false);
      } else {
        const res = await axios.get(
          `http://localhost:31413/item/detail?id=${it_id}`
        );
        const resData = res.data as DataType[];
        const temp = resData[0].price * Number(value);
        setPrice(temp);
        if (Number(value) < 1) setDisable(true);
        if (me_name !== '' && it_name !== '' && Number(value) > 0)
          setDisable(false);
      }
    } catch (err) {
      const { name } = e.target;
      if (name == 'me_id') setMeName('');
      else if (name == 'it_id') setItName(``);
      setDisable(true);
    }
  };

  const onClickUpdate = async (navigate: NavigateFunction, url: string) => {
    try {
      console.log('here');
      const res = await axios.post(`http://localhost:31413/order/update`, {
        or_id: pageID,
        it_id: it_id,
        me_id: me_id,
        amount: amount,
      });
      console.log(res);
      navigate(url);
    } catch (e) {
      console.log(e);
    }
  };

  const onClickDelete = async (navigate: NavigateFunction, url: string) => {
    try {
      const res = await axios.post(`http://localhost:31413/order/delete`, {
        id: pageID,
      });
      console.log(res);
      navigate(url);
    } catch (e) {
      console.log(e);
    }
  };

  const { me_id, it_id, amount } = inputs;

  useEffect(() => {
    const fetchMemeberDetail = async (): Promise<number> => {
      try {
        const res = await axios.get(
          `http://localhost:31413/order/detail?id=${pageID}`
        );
        const resData = res.data as DataType[];
        const inputData = {
          it_id: resData[0].it_id,
          me_id: resData[0].me_id,
          amount: resData[0].amount,
        };
        setInputs(inputData);
        setItName(resData[0].it_name);
        setMeName(resData[0].me_name);
        setPrice(resData[0].total_price);
        setTime(resData[0].time.split('T')[0]);

        return 1;
      } catch (e) {
        console.log(e);
      }
    };

    const a = fetchMemeberDetail();
    console.log(a);
  }, []);

  return (
    <OrderDetailTemplateBlock>
      <div className="header">
        <Button navFunc={onClickDelete} disabled={false} url={'/order'}>
          <p>삭제하기</p>
        </Button>
        <Button navFunc={onClickUpdate} disabled={disable} url={`/order`}>
          <p>수정하기</p>
        </Button>
      </div>
      <div className="form">
        <h4>주문ID: {pageID}</h4>
        <div>
          <span>주문자ID: </span>
          <input name="me_id" onChange={onChange} value={me_id} />
          <span> {me_name}</span>
        </div>
        <div>
          <span>상품ID: </span>
          <input name="it_id" onChange={onChange} value={it_id} />
          <span> {it_name}</span>
        </div>
        <div>
          <span>개수: </span>
          <input
            name="amount"
            type="number"
            onChange={onChange}
            value={amount}
          />
        </div>
        <div>
          <span>가격: {total_price}</span>
        </div>
        <div>
          <span>주문일시: {time}</span>
        </div>
        <h3>올바르게 작성하면 수정 버튼이 활성화됩니다.</h3>
      </div>
    </OrderDetailTemplateBlock>
  );
};

export default OrderDetailTemplate;
