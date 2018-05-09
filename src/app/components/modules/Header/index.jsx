import React from 'react';
import PT from 'prop-types';
import { connect } from 'react-redux';
import { Form, Field } from 'react-final-form';

import { listAdd } from 'ducks/list';

import { Input } from 'common';
import { HeaderContainer, Logo } from './styled';

class Header extends React.Component {
  componentDidMount() {
    document.addEventListener('keydown', this.focusInputOnKeyPress);
  }

  focusInputOnKeyPress = (e) => {
    if (e.metaKey && e.code === 'Enter') {
      document.querySelector('.add-todo').focus();
    }
  }

  render() {
    const { add } = this.props;

    return (
      <HeaderContainer>
        <Logo>Lyst</Logo>
        <Form
          onSubmit={add}
          render={({ handleSubmit, form }) => (
            <form onSubmit={(e) => { handleSubmit(e).then(form.reset); }}>
              <Field
                name="todo"
                component={Input}
                placeholder="New todo"
                className="add-todo"
              />
            </form>
          )}
        />
      </HeaderContainer>
    );
  }
}

Header.propTypes = {
  add: PT.func,
};

export default connect(null, { add: listAdd })(Header);
