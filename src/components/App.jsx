import React from 'react';
import Header from './Header';
import Artists from './Artists';
import AddArtist from './AddArtist';
import { Switch, Route } from 'react-router-dom';
import '../styles/app.scss';

const App = () => (
  <React.Fragment>
    <Header />
    <Switch>
      <Route
        exact
        path="/"
        component={Artists}
      />
      <Route
        exact
        path="/add-artist"
        component={AddArtist}
      />
    </Switch>
  </React.Fragment>
);

export default App;
