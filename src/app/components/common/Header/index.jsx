import React from 'react';
import styled from 'styled-components';
import { Input } from 'common';

const HeaderContainer = styled.header`
  background: ${props => props.theme.paleGrey};
  display: flex;
  align-items: center;
  justify-content: center;
  height: 120px;
`;

const Header = () => (
  <HeaderContainer>
    <Input placeholder="New todo" />
  </HeaderContainer>
);

export default Header;
