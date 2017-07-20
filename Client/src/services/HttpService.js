/* eslint no-undef: "error" */
/* eslint-env node */
import axios from 'axios'
import AuthService from './AuthService'

// URL and endpoint constants
const API_URL = process.env.API_URL

export default {
  request (method, url, data) {
    const jwt = AuthService.getToken()
    return axios.request({
      method: method,
      url: API_URL + url,
      data: data,
      headers: {
        'Authorization': jwt
      }
    })
  }
}
