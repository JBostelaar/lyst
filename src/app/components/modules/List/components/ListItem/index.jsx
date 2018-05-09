import React from 'react';
import PT from 'prop-types';
import styled from 'styled-components';

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

  &:hover {
    box-shadow: 0 2px 8px rgba(0,0,0,0.05);
    background: #fcfcfb;
  }
`;

const ListItemContent = styled.span`
  margin-left: 20px;
`;

const ListItem = ({ item, onClick }) => (
  <ListItemContainer>
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
};

export default ListItem;
