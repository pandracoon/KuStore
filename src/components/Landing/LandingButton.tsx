import React, { ReactElement } from 'react';
import { useNavigate } from 'react-router';
import styled from 'styled-components';

const StyledLandingButton = styled.button`
  margin-bottom: 20px;
  border: none;
  cursor: pointer;
  width: 300px;
  position: relative;
  left: 50%;
  transform: translate(-50%, 50%);
  font-family: 'Noto Sans KR', sans-serif;
  font-size: var(--button-font-size, 1rem);
  padding: var(--button-padding, 8px 12px);
  border-radius: var(--button-radius, 8px);
  background: var(--button-bg-color, #0d6efd);
  color: var(--button-color, #ffffff);

  &:active,
  &:hover,
  &:focus {
    background: var(--button-hover-bg-color, #025ce2);
  }

  &:disabled {
    cursor: default;
    opacity: 0.5;
    background: var(--button-bg-color, #025ce2);
  }
`;

type LandingButtonProps = {
  disabled: boolean;
  children: ReactElement;
  url: string;
};

// eslint-disable-next-line
const LandingButton = ({ disabled, children, url }: LandingButtonProps) => {
  const navigate = useNavigate();
  return (
    <StyledLandingButton onClick={() => navigate(url)} disabled={disabled}>
      {children}
    </StyledLandingButton>
  );
};

export default LandingButton;
