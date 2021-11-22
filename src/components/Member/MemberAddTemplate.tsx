import axios from 'axios';
import React, { ReactElement, useState } from 'react';
import { NavigateFunction } from 'react-router-dom';
import styled from 'styled-components';
import api from '../../api';
import Button from '../Button';

const MemberAddTemplateBlock = styled.div`
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

const MemberAddTemplate = (): ReactElement => {
  const [inputs, setInputs] = useState({
    me_name: '',
    phone: '',
  });

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, name } = e.target;
    setInputs({
      ...inputs,
      [name]: value,
    });
  };
  const onClick = async (navigate: NavigateFunction, url: string) => {
    try {
      const res = await axios.post(`${api}/member/add`, {
        me_name: me_name,
        phone: phone,
      });
      console.log(res);
      navigate(url);
    } catch (e) {
      console.log(e);
    }
  };

  const { me_name, phone } = inputs;

  return (
    <MemberAddTemplateBlock>
      <div className="header">
        <Button navFunc={onClick} disabled={false} url={'/member'}>
          <p>추가하기</p>
        </Button>
      </div>
      <div className="form">
        <div>
          <span>이름: </span>
          <input name="me_name" onChange={onChange} value={me_name} />
        </div>
        <div>
          <span>전화번호: </span>
          <input name="phone" onChange={onChange} value={phone} />
        </div>
      </div>
    </MemberAddTemplateBlock>
  );
};

export default MemberAddTemplate;
