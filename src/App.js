import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Login from './components/Login/index';
import Home from './components/Home';
import { verifyLogin } from './components/Auth/index';

class App extends Component {
  state = {
    auth: true
  }

  isAuth = response => this.setState({ auth: !!response }, () => this.setState({auth: true}));

  componentDidMount() {
    if (localStorage.getItem('token') === null)
      return this.setState({auth: false}, () => this.setState({auth: true}));
    
    verifyLogin(this.isAuth);
  }
  
  render() {
    return (
      <div className="App">
        <Router>
          <Switch>
            <Route exact path="/login" component={Login} />
            <Route path="/" render={(props) => <Home {...props} auth={this.state.auth} />} />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
