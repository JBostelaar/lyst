import styled from 'styled-components';

export default styled.input`
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  width: 400px;
  height: 55px;
  font-size: 16px;
  border-radius: 4px;
  color: ${props => props.theme.navyBlue};
  background-color: ${props => props.theme.white};
  border: solid 1px ${props => props.theme.borderColor};
  display: block;
  padding: 0 20px;
  font-family: 'Rubik', sans-serif;
  outline: none;
`;
