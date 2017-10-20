import React from 'react';
import { Route, Switch } from 'react-router-dom';
import AddSongPage from './AddSongPage';
import NavigationBar from './NavigationBar';
import Home from './Home';

class App extends React.Component {
  render() {
    return (
      <div className="App">

        <NavigationBar />

        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/add-song-form" component={AddSongPage} />
        </Switch>

      </div>
    );
  }
}

export default App;
