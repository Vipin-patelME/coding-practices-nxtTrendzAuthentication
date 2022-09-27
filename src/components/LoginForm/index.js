// Write your JS code here
import {Component} from 'react'

import './index.css'

class LoginForm extends Component {
  state = {username: '', password: '', islogin: 'true'}

  onSuccessLogin = () => {
    const {history} = this.props
    history.replace('/')
  }

  onFormSubmit = async event => {
    event.preventDefault()
    const {username, password} = this.state
    const userDetails = {username, password}

    const url = 'https://apis.ccbp.in/login'
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }

    const response = await fetch(url, options)
    console.log(response)
    if (response.ok === true) {
      this.onSuccessLogin()
    } else {
      this.setState({islogin: false})
    }
  }

  onChangeusername = event => {
    this.setState({username: event.target.value})
  }

  onChangepassword = event => {
    this.setState({password: event.target.value})
  }

  render() {
    const {username, password, islogin} = this.state
    return (
      <div className="form-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-login-img.png"
          alt="website login"
          className="web-login-image"
        />
        <div className="form-items">
          <img
            src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
            alt="website logo"
            className="logo"
          />
          <form onSubmit={this.onFormSubmit}>
            <label htmlFor="username">USERNAME</label>
            <input
              type="text"
              id="username"
              value={username}
              className="user-input"
              placeholder="USERNAME"
              onChange={this.onChangeusername}
            />
            <label htmlFor="password">PASSWORD</label>
            <input
              type="password"
              id="password"
              placeholder="PASSWORD"
              value={password}
              className="user-input"
              onChange={this.onChangepassword}
            />
            <button type="submit">Login</button>
            {islogin ? '' : <p>* username and Password did not match</p>}
          </form>
        </div>
      </div>
    )
  }
}

export default LoginForm
