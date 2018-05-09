import React from 'react';
import PT from 'prop-types';
import styled from 'styled-components';

const StyledInput = styled.input`
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
  color: ${props => props.theme.sherpaBlue};

  &:focus {
    border: 1px solid ${props => props.theme.dodgerBlue};
    box-shadow: 0px 2px 8px rgba(25, 181, 254,.3);
  }

  &::placeholder {
    color: ${props => props.theme.silver};
  }
`;

const Input = ({ input, placeholder, className }) => (
  <StyledInput
    {...input}
    placeholder={placeholder}
    className={className}
    autoComplete="off"
    tabIndex="1"
  />
);

Input.propTypes = {
  input: PT.shape({
    onChange: PT.func,
    value: PT.string,
  }),
  placeholder: PT.string,
  className: PT.string,
};

export default Input;
