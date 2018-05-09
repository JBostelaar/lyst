import styled from 'styled-components';

export default styled.div`
  width: 18px;
  height: 18px;
  border: 2px solid ${props => props.theme.dodgerBlue};
  border-radius: 100%;
  background: ${props => props.theme.white};
  display: flex;
  align-items: center;
  justify-content: center;

  &::after {
    content: '';
    display: ${props => (props.active ? 'block' : 'none')};
    width: 10px;
    height: 10px;
    border-radius: 100%;
    background: ${props => props.theme.dodgerBlue};
  }
`;
