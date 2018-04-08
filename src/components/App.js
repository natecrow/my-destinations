import React from 'react';
import { Route, Switch } from 'react-router-dom';
import NavigationBar from './NavigationBar';
import AddDestinationContainer from '../containers/AddDestinationContainer';
import DestinationListContainer from '../containers/DestinationListContainer';

const App = () => (
  <div className='App'>
    <NavigationBar />
    <Switch>
      <div style={{display: 'flex', justifyContent: 'center'}}>
        <Route exact path='/' component={AddDestinationContainer} />
        <Route exact path='/destination-list' component={DestinationListContainer} />
        <Route path='/destination' component={AddDestinationContainer} />
      </div>
    </Switch>
  </div >
);

export default App;
