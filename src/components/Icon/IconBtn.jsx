import React from 'react';
import Icon from './Icon';
import styled from 'styled-components';

const IconWrap = styled.div`
  display: flex;
  width: 28px;
  height: 28px;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
  border-radius: 4px;
  box-sizing: border-box;
  border: 1px solid var(--Gray-Scale-Gray-500, #adadad);
  background: var(--Gray-Scale-White, #fff);

  > svg {
    width: 100%;
    height: 100%;
  }
`;

const IconBtn = ({ name, color = "#2E90FF" }) => {
  return (
    <IconWrap>
      <Icon name={name} color={color} />
    </IconWrap>
  );
};

export default IconBtn;