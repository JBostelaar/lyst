import React from 'react';
import PT from 'prop-types';
import styled from 'styled-components';

import AddIcon from 'vectors/icon-add.svg';

const InputContainer = styled.div`
  position: relative;
  svg {
    position: absolute;
    left: 0px;
    top: 19px;
    width: 15px;
    height: 15px;
    fill: ${props => props.theme.dodgerBlue};
    opacity: 0;
  }

  &:focus-within {
    svg {
      left: 20px;
      opacity: 1;
      transition: all .1s ease;
    }
  }
`;

const StyledInput = styled.input`
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  width: 400px;
  height: 55px;
  font-size: 16px;
  border-radius: 4px;
  color: ${props => props.theme.navyBlue};
  border: solid 1px ${props => props.theme.borderColor};
  display: block;
  padding: 0 20px;
  font-family: 'Rubik', sans-serif;
  outline: none;
  color: ${props => props.theme.sherpaBlue};
  background: ${props => props.theme.paleGrey};

  &:focus {
    border: 1px solid ${props => props.theme.dodgerBlue};
    box-shadow: 0px 2px 8px rgba(25, 181, 254,.3);
    padding: 0 20px 0 50px;
    transition: all .1s ease;
  }

  &::placeholder {
    color: ${props => props.theme.silver};
  }
`;

const Input = ({ input, placeholder, className }) => (
  <InputContainer>
    <AddIcon />
    <StyledInput
      {...input}
      placeholder={placeholder}
      className={className}
      autoComplete="off"
      tabIndex="1"
    />
  </InputContainer>
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
