import React, { ReactElement } from 'react';
import styled from 'styled-components';

const LandingTitleBlock = styled.div`
  padding-top: 48px;
  padding-left: 32px;
  padding-right: 32px;
  padding-bottom: 24px;
  h1 {
    margin: 0;
    text-align: center;
    font-size: 50px;
    color: #343a40;
  }
  .footer {
    position: absolute;
    margin-bottom: 10%;
    left: 50%;
    transform: translate(-50%, 50%);
    bottom: 0;
    display: flex;
    flex-direction: column-reverse;
  }
  .day {
    color: #868e96;
    font-size: 21px;
    margin-top: 10px;
  }
  .tasks-left {
    color: #20c997;
    font-size: 18px;
    font-weight: bold;
    margin-bottom: 30px;
  }
`;

type LandingTitleProps = {
  children: ReactElement[];
};

const LandingTitle = ({ children }: LandingTitleProps): ReactElement => {
  return (
    <LandingTitleBlock>
      <h1>KuStore</h1>
      {children}
      <div className="footer">
        <div className="day">Dev by JaeGun Cho</div>
        <div className="tasks-left">COSE371 Term Project</div>
      </div>
    </LandingTitleBlock>
  );
};

export default LandingTitle;
