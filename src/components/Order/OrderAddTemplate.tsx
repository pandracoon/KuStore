import axios from 'axios';
import React, { ReactElement, useState } from 'react';
import { NavigateFunction } from 'react-router-dom';
import styled from 'styled-components';
import api from '../../api';
import Button from '../Button';

const OrderAddTemplateBlock = styled.div`
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
  me_name: string;
  it_name: string;
  price: number;
  message: string;
};

const OrderAddTemplate = (): ReactElement => {
  const [inputs, setInputs] = useState({
    me_id: '',
    it_id: '',
    amount: 0,
  });
  const [me_name, setMeName] = useState(``);
  const [it_name, setItName] = useState(``);
  const [total_price, setPrice] = useState(0);
  const [disable, setDisable] = useState(true);

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
        if (it_name !== '' && Number(amount) > 0) setDisable(false);
      } else if (name == 'it_id') {
        const res = await axios.get(`${api}/item/detail?id=${value}`);
        const resData = res.data as DataType[];
        const temp = resData[0].it_name;
        setItName(temp);
        if (me_name !== '' && Number(amount) > 0) setDisable(false);
      } else {
        const res = await axios.get(`${api}/item/detail?id=${it_id}`);
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

  const onClick = async (navigate: NavigateFunction, url: string) => {
    try {
      const res = await axios.post(`http://localhost:31413/order/add`, {
        me_id: me_id,
        it_id: it_id,
        amount: amount,
      });
      console.log(res);
      navigate(url);
    } catch (e) {
      console.log(e);
    }
  };
  const { me_id, it_id, amount } = inputs;

  return (
    <OrderAddTemplateBlock>
      <div className="header">
        <Button navFunc={onClick} disabled={disable} url={'/order'}>
          <p>추가하기</p>
        </Button>
      </div>
      <div className="form">
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
          <h3>올바르게 작성하면 추가 버튼이 활성화됩니다.</h3>
        </div>
      </div>
    </OrderAddTemplateBlock>
  );
};

export default OrderAddTemplate;
