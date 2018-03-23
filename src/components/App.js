import React from 'react';
import { Route, Switch } from 'react-router-dom';
import NavigationBar from './NavigationBar';
import Home from './Home';
import AddSongContainer from '../containers/AddSongContainer';
import PlaylistContainer from '../containers/PlaylistContainer';

const App = () => (
  <div className='App'>
    <NavigationBar />
    <Switch>
      <div style={{display: 'flex', justifyContent: 'center'}}>
        <Route exact path='/' component={Home} />
        <Route exact path='/playlist' component={PlaylistContainer} />
        <Route path='/song' component={AddSongContainer} />
      </div>
    </Switch>
  </div >
);

export default App;
