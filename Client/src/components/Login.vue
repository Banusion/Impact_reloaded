<template>

<md-layout md-gutter>
  <md-layout md-flex-xsmall="100" md-flex-small="50" md-flex-medium="50">
      <md-card class="loginCard" md-with-hover>
          <md-card-media>
            <img id="profile-img" class="profile-img-card" src="../assets/logo_hsv.jpg" />
          </md-card-media>
          <md-card-header>
            <div class="md-title">Login</div>
          </md-card-header>
          <md-card-content>
            <form @submit.stop.prevent="login">
             <md-input-container>
                  <label>Email</label>
                  <md-input v-model="email" required type="email"></md-input>
            </md-input-container>
            <md-input-container md-has-password>
                <label>Password</label>
            <md-input type="password" v-model="password" required></md-input>
            </md-input-container>
            <md-card-actions>
                <md-button type="submit">SignIn</md-button>
            </md-card-actions>
                </form>
            </md-card-content>
      </md-card>
  </md-layout>  
    <md-snackbar md-position="top center" ref="snackbar" md-duration="15000" @close="snackClose">
      <span>{{messageStore.message}}</span>
      <md-button class="md-accent" @click.native="$refs.snackbar.close()">close</md-button>
    </md-snackbar>
  </md-layout>
</template>

<script>
import AuthService from '@/services/AuthService'
import MessageStore from '@/services/MessageStore'

export default {
  name: 'login',
  data () {
    return {
      email: '',
      password: '',
      messageStore: MessageStore.state
    }
  },
  watch: {
    'messageStore': {
      deep: true,
      handler: function (val) {
        if (val.message) {
          this.open()
        }
      }
    }
  },
  methods: {
    open () {
      this.$refs.snackbar.open()
    },
    snackClose () {
      MessageStore.clearMessage()
    },
    login () {
      if (this.email.trim() || this.password.trim()) {
        AuthService.login(this.email, this.password, '/dev')
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

<style scoped>

.md-layout {  
  margin: auto;
  margin-top: 5%;
  min-width: 350px;
  max-width: 400px;
}
.md-snackbar .md-button{
  background-color: rgb(237,26,59);
  color:white!important;
}
</style>
