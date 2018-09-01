import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import { Nav, Home } from './../components';

function App() {
  return (
    <BrowserRouter>
      <div className="container">
        <Nav />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route render={() => <p>Not Found</p>} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;