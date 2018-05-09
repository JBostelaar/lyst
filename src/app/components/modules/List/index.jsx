import React, { Fragment } from 'react';
import PT from 'prop-types';
import { connect } from 'react-redux';

import { listToggle } from 'ducks/list';

import Header from 'modules/Header';
import ListItem from './components/ListItem';
import { ListContainer } from './styled';

const List = ({ list, toggle }) => (
  <Fragment>
    <Header />
    <ListContainer>
      {list.map((item, index) => (
        <ListItem
          key={item.id}
          item={item}
          onClick={toggle}
          tabIndex={index + 2}
        />
      ))}
    </ListContainer>
  </Fragment>
);

List.propTypes = {
  list: PT.array,
  toggle: PT.func,
};

export default connect(
  state => ({ list: state.list.items }),
  { toggle: listToggle },
)(List);
