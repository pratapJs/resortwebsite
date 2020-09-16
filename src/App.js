import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.scss';

//import components
import Home from '../src/pages/Home';
import Rooms from '../src/pages/Rooms';
import SingleRoom from '../src/pages/SingleRoom';
import Error from '../src/pages/Error';
import Navbar from '../src/components/Navbar';

function App() {
  return (
    <>
      <Navbar />
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/rooms/' component={Rooms} />
        <Route exact path='/singleroom/:slug' component={SingleRoom} />
        <Route component={Error} />
      </Switch>
    </>
  );
}

export default App;
