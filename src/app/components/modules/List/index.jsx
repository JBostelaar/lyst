import React from 'react';
import PT from 'prop-types';
import { connect } from 'react-redux';

import Header from 'modules/Header';

const List = ({ list }) => (
  <div>
    <Header />
  </div>
);

List.propTypes = {
  list: PT.array,
};

export default connect(state => ({ list: state.list.items }))(List);
