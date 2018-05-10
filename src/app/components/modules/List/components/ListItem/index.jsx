import React from 'react';
import PT from 'prop-types';
import styled, { css } from 'styled-components';

import { InputCheck } from 'common';

const ListItemContainer = styled.div`
  height: 60px;
  display: flex;
  align-items: center;
  background: ${props => props.theme.white};
  width: 100%;
  margin-bottom: 5px;
  border-radius: 4px;
  padding: 0 20px;
  color: ${props => props.theme.sherpaBlue};
  cursor: pointer;
  outline: none;

  &:hover, &:focus {
    box-shadow: 0 2px 8px rgba(0,0,0,0.05);
    background: #fcfcfb;
  }

  ${props => props.active && css`
    color: #ABB7B7;
  `}
`;

const ListItemContent = styled.span`
  margin-left: 20px;
`;

const ListItem = ({ item, onClick, tabIndex }) => (
  <ListItemContainer
    tabIndex={tabIndex}
    active={item.done}
    role="button"
    onKeyPress={(e) => { if (e.key === 'Enter') onClick(item.id); }}
  >
    <InputCheck active={item.done} onClick={() => onClick(item.id)} />
    <ListItemContent>{item.label}</ListItemContent>
  </ListItemContainer>
);

ListItem.propTypes = {
  item: PT.shape({
    label: PT.string,
    done: PT.bool,
    id: PT.string,
  }),
  onClick: PT.func,
  tabIndex: PT.number,
};

export default ListItem;
