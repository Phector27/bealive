import "./App.css";
import React, { Component } from 'react'
import { Switch, Route, Redirect } from "react-router-dom";
import Navigation from "./layout/Navigation/Navigation";
import Home from "./Home/Home";
import HomeLogged from "./Home/HomeLogged";
import Footer from "./layout/Footer/Footer";
import Signup from "./Signup/Signup";
import Login from "./Login/Login";
import AuthService from './../service/auth.service'
import Profile from './Profile/Profile'


class App extends Component {
  constructor() {
    super();
    this.state = { loggedInUser: undefined };
    this.authServices = new AuthService();
  }

  componentDidMount = () => {
    this.authServices
      .isLoggedIn()
      .then(response => this.setTheUser(response.data))
      .catch(err => this.setTheUser(undefined))
  }

  setTheUser = user => this.setState({ loggedInUser: user })

  render() {
    return (
      <>
        <Navigation storeUser={this.setTheUser} loggedUser={this.state.loggedInUser}/>
        <main>
          <Switch>
            <Route path="/" exact render={() => this.state.loggedInUser ? <HomeLogged /> : <Home />} />
            <Route path="/signup" render={props => this.state.loggedInUser ? <Redirect to="/profile" /> : <Signup storeUser={this.setTheUser} {...props} />} />
            <Route path="/login" render={props => this.state.loggedInUser ? <Redirect to="/profile" /> : <Login storeUser={this.setTheUser} {...props} />} />
            <Route path="/profile" render={() => this.state.loggedInUser ? <Profile loggedUser={this.state.loggedInUser} storeUser={this.setTheUser} /> : <Redirect to="/login" />} />
          </Switch>
        </main>
        <Footer />
      </>
    );
  }
}

export default App;
