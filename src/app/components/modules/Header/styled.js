import styled from 'styled-components';

export const HeaderContainer = styled.header`
  background: ${props => props.theme.paleGrey};
  display: flex;
  align-items: center;
  justify-content: center;
  height: 120px;
`;

export const Logo = styled.div`
  color: ${props => props.theme.dodgerBlue};
  font-size: 28px;
  position: absolute;
  left: 50px;
  top: 40px;
  font-weight: 400;
`;
