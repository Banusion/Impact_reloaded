/*eslint no-console: "error"*/
import axios from 'axios'
import router from '../router'
import MessageStore from './MessageStore'

// URL and endpoint constants
const API_URL = process.env.API_URL
const LOGIN_URL = API_URL + 'login'

export default {
  // User object will let us check authentication status
  user: {
    authenticated: false
  },
  // Send a request to the login URL and save the returned JWT
  login (email, password, redirect) {
    let self = this
    axios.post(LOGIN_URL, {
      email: email,
      password: password
    })
    .then(function (response) {
      if (response.status === 200) {
        sessionStorage.setItem('token', response.data.token)
        self.user.authenticated = true
        self.user.email = response.data.user
        sessionStorage.setItem('user', JSON.stringify(self.user))
        // Redirect to a specified route
        if (redirect) {
          router.push(redirect)
        }
      } else {
        self.user.authenticated = false
        MessageStore.setMessage('Email or Password invalid !')
        router.push('login')
      }
    })
    .catch(function () {
      self.user.authenticated = false
      MessageStore.setMessage('Email or Password invalid !')
    })
  },

  // To log out, we just need to remove the token
  logout () {
    sessionStorage.removeItem('token')
    sessionStorage.removeItem('user')
    this.user.authenticated = false
  },
  checkAuth () {
    let user = sessionStorage.getItem('user')
    if (user) {
      this.user = JSON.parse(user)
    }
    let jwt = sessionStorage.getItem('token')
    if (jwt) {
      this.user.authenticated = true
    } else {
      this.user.authenticated = false
    }
  },

  getUser () {
    return this.user
  },

  // The object to be passed as a header for authenticated requests
  getToken () {
    return sessionStorage.getItem('token')
  }
}
