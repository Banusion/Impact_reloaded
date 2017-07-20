module.exports = {
  state: {
    message: null
  },
  setMessage: function(message) {
    this.state.message = message
  },
  clearMessage: function() {
    this.state.message = null
  }
}