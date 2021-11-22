import React, { ReactElement } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const HeaderBlock = styled.div`
  width: 100%;
  height: 50px;

  position: relative; /* 추후 박스 하단에 추가 버튼을 위치시키기 위한 설정 */
  background: white;
  box-shadow: 0 0 8px 0 rgba(0, 0, 0, 0.04);

  margin: 0 auto; /* 페이지 중앙에 나타나도록 설정 */

  display: flex;
  flex-direction: row;

  h1 {
    position: relative;
    margin: 0;
    font-size: 30px;
    color: #343a40;
  }

  .navi {
    width: 100%;
    positon: absolute;
    display: flex;
    flex-direction: row-reverse;
  }

  .link {
    text-align: center;
    margin: 5px;
    top: 50%;
  }
`;

const Header = (): ReactElement => {
  return (
    <HeaderBlock>
      <h1>KuStore</h1>
      <div className="navi">
        <Link className="link" to="/">
          홈
        </Link>
        <Link className="link" to="/inventory">
          재고
        </Link>
        <Link className="link" to="/membership">
          멤버쉽
        </Link>
        <Link className="link" to="/order">
          주문
        </Link>{' '}
        <Link className="link" to="/item">
          상품
        </Link>{' '}
        <Link className="link" to="/member">
          회원
        </Link>
      </div>
    </HeaderBlock>
  );
};

export default Header;
