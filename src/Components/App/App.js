import './App.css';
import React, { Component } from 'react'
import axios from 'axios'
import Navbar from '../Navbar'
import Cart from '../Cart'
import Home from '../Home'
import LoginPage from '../LoginPage'
import RegisterPage from '../RegisterPage'
import Dashboard from '../Dashboard'

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      apitoken: '',
      isLoggedIn: false,
      currentPage: 'home'
    }
    this.logIn = this.logIn.bind(this)
  }

  logIn(email, password) {
    const data = {
      email: email,
      password: password
    };

    axios.post('http://127.0.0.1:8000/api/login', data)
      .then(response => {
        if (response.data.loggedIn) {
          this.setState({
            apitoken: response.data.token,
            isLoggedIn: true,
            currentPage: 'dashboard'
          })
        } else {
          return (alert('Incorrect email or password'))
        }
      })
      .catch(response => {
        console.log(response);
      });
  }

  register(name, email, password) {
    const data = {
      name: name,
      email: email,
      password: password
    };

    axios.post('http://127.0.0.1:8000/api/register', data)
      .then(response => {
        if (response.data.registerSuccess) {
          this.setState({
            currentPage: 'home'
          })
        }
      })
      .catch(response => {
        console.log(response);
      });
  }

  updatePage(newPage) {
    this.setState({
      currentPage: newPage
    })
  }

  logOut() {
    this.setState({
      apitoken: '',
      isLoggedIn: false,
      currentPage: 'home'
    });
  }

  render() {
    let pagesArray = {
      "home": <Home />,
      "cart": <Cart />,
      "login": <LoginPage logIn={this.logIn} />,
      "register": <RegisterPage register={this.register.bind(this)}/>,
      "dashboard": <Dashboard apitoken={this.state.apitoken}/>
    }

    return (
      <div>
        <header>
          <Navbar state={this.state} logOut={this.logOut.bind(this)} updatePage={this.updatePage.bind(this)} />
        </header>
        <div className="App">
          {pagesArray[this.state.currentPage]}
        </div>
      </div>
    )
  }
}

export default App;
