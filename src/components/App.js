import React from 'react';
import { Route, Switch } from 'react-router-dom';
import NavigationBar from './NavigationBar';
import Home from './Home';
import AddSongPage from '../containers/AddSongPage';

class App extends React.Component {
  render() {
    return (
      <div className='App'>

        <NavigationBar />

        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/song' component={AddSongPage} />
        </Switch>

      </div>
    );
  }
}

export default App;
