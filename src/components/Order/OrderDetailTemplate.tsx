import React, { ReactElement, useState } from 'react';
import styled from 'styled-components';
import Button from '../Button';

const OrderDetailTemplateBlock = styled.div`
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

const OrderDetailTemplate = (): ReactElement => {
  const [inputs, setInputs] = useState({
    me_name: '',
    it_name: '',
    amount: '',
    price: '',
    date: '',
  });

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, name } = e.target; // 우선 e.target 에서 name 과 value 를 추출
    setInputs({
      ...inputs, // 기존의 input 객체를 복사한 뒤
      [name]: value, // name 키를 가진 값을 value 로 설정
    });
  };
  const onClick = () => {
    console.log(inputs);
  };

  const { me_name, it_name, amount, price, date } = inputs;

  return (
    <OrderDetailTemplateBlock>
      <div className="header">
        <Button disabled={false} url={'./add'}>
          <p>삭제하기</p>
        </Button>
        <Button func={onClick} disabled={false} url={`/`}>
          <p>수정하기</p>
        </Button>
      </div>
      <div className="form">
        <h4>주문ID: 3</h4>
        <div>
          <span>주문자이름: </span>
          <input name="name" onChange={onChange} value={me_name} />
        </div>
        <div>
          <span>상품이름: </span>
          <input name="phone" onChange={onChange} value={it_name} />
        </div>
        <div>
          <span>개수: </span>
          <input name="date" onChange={onChange} value={amount} />
        </div>
        <div>
          <span>가격: </span>
          <input name="date" onChange={onChange} value={price} />
        </div>
        <div>
          <span>주문일시: </span>
          <input name="date" onChange={onChange} value={date} />
        </div>
      </div>
    </OrderDetailTemplateBlock>
  );
};

export default OrderDetailTemplate;
