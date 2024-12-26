import React from 'react';
import styled from 'styled-components';

const StyledContainer = styled.div`
  width: 100%;
  padding: 20px 32px;
`;

const Container = ({ children }) => {
  return (
    <StyledContainer>
      {children}
    </StyledContainer>
  );
};

export default Container;