import React, {Component} from 'react';
import {Home, Signup} from './pages/index';
import {Route, Switch} from 'react-router-dom';

class App extends Component {
  render(){
    return (
      <div>
        <Route exact path="/" component={Home} />
        <Switch>
          <Route exact path="/signup" component={Signup} />
          <Route exact path="/signup/:name" component={Signup} />
          <Route exact path="/signup/:name/:number" component={Signup} />
        </Switch>
        
      </div>
    );
  }
}
  
  


export default App;
