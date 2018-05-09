import styled from 'styled-components';

export const HeaderContainer = styled.header`
  background: ${props => props.theme.white};
  display: flex;
  align-items: center;
  justify-content: center;
  height: 120px;
  margin-bottom: 20px;
  position: fixed;
  top: 0;
  width: 100%;
  left: 0;
  box-shadow: 0 2px 16px rgba(0,0,0,.02);
`;

export const Logo = styled.div`
  color: ${props => props.theme.dodgerBlue};
  font-size: 28px;
  position: absolute;
  left: 50px;
  top: 40px;
  font-weight: 400;
`;
