import React from 'react';
import { Switch, Route } from 'react-router-dom';
import List from 'modules/List';

const App = () => (
  <main>
    <Switch>
      <Route path="/" component={List} exact />
    </Switch>
  </main>
);

export default App;
