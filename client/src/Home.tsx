import * as React from 'react';
import './App.css';
import BeerList from './BeerList';
import { withAuth } from '@okta/okta-react';
import { Auth } from './App';

const logo = require('./logo.svg');

interface HomeProps {
  auth: Auth;
}

interface HomeState {
  authenticated: boolean;
}

export default withAuth(class Home extends React.Component<HomeProps, HomeState> {
  constructor(props: HomeProps) {
    super(props);
    this.state = {authenticated: false};
    this.checkAuthentication = this.checkAuthentication.bind(this);
    this.checkAuthentication();
  }

  async checkAuthentication() {
    const isAuthenticated = await this.props.auth.isAuthenticated();
    const {authenticated} = this.state;
    if (isAuthenticated !== authenticated) {
      this.setState({authenticated: isAuthenticated});
    }
  }

  componentDidUpdate() {
    this.checkAuthentication();
  }

  render() {
    const {authenticated} = this.state;
    let body = null;
    if (authenticated) {
      body = (
        <div className="Buttons">
          <button onClick={this.props.auth.logout}>Logout</button>
          <BeerList auth={this.props.auth}/>
        </div>
      );
    } else {
      body = (
        <div className="Buttons">
          <button onClick={this.props.auth.login}>Login</button>
        </div>
      );
    }

    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo"/>
          <h2>Welcome to React</h2>
        </div>
        {body}
      </div>
    );
  }
});