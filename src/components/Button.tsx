import React, { ReactElement } from 'react';
import { NavigateFunction, useNavigate } from 'react-router';
import styled from 'styled-components';

const StyledButton = styled.button`
  border: none;
  margin: 5px;
  cursor: pointer;
  width: 100px;
  position: relative;
  font-family: 'Noto Sans KR', sans-serif;
  font-size: var(--button-font-size, 1rem);
  padding: var(--button-padding, px 2px);
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

type ButtonProps = {
  disabled: boolean;
  children: ReactElement;
  url?: string;
  func?: () => void;
  navFunc?: (navgate: NavigateFunction, url: string) => Promise<void>;
};

// eslint-disable-next-line
const Button = ({ disabled, children, url, func, navFunc }: ButtonProps) => {
  const navigate = useNavigate();

  if (func === undefined && navFunc === undefined)
    return (
      <StyledButton onClick={() => navigate(url)} disabled={disabled}>
        {children}
      </StyledButton>
    );
  else if (url === undefined)
    return (
      <StyledButton onClick={func} disabled={disabled}>
        {children}
      </StyledButton>
    );
  else
    return (
      <StyledButton onClick={() => navFunc(navigate, url)} disabled={disabled}>
        {children}
      </StyledButton>
    );
};

export default Button;
