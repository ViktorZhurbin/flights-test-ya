import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Home from './Home';

function App() {
  return (
    <BrowserRouter>
      <div className="container">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route render={() => <p>Not Found</p>} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
