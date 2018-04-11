import React from 'react';
import { Route, Switch } from 'react-router-dom';
import NavigationBar from './NavigationBar';
import DestinationFormContainer from '../containers/DestinationFormContainer';
import DestinationListContainer from '../containers/DestinationListContainer';

const App = () => (
  <div className='App'>
    <NavigationBar />
    <Switch>
      <div style={{display: 'flex', justifyContent: 'center'}}>
        <Route exact path='/' component={DestinationListContainer} />
        <Route exact path='/destinations' component={DestinationListContainer} />
        <Route path='/destinations/new' component={DestinationFormContainer} />
      </div>
    </Switch>
  </div >
);

export default App;
