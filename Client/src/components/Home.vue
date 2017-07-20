<template>
  <div>
    <navbar></navbar>
      <div v-if="!loading">
          <Claims v-for="claim in claims.deployments" :key="claim.id" :job="claim"></Claims>
      </div>
      <md-layout md-align="center">
          <md-spinner v-if="loading" :md-size="150" md-indeterminate></md-spinner>
      </md-layout>
  </div>
</template>

<script>
import Navbar from './Navbar'
import Claims from '@/components/Claims'
import HttpService from '@/services/HttpService'
import AuthService from '@/services/AuthService'

export default {
  components: {
    Navbar, Claims
  },
  name: 'home',
  data () {
    return {
      loading: false,
      claims: null,
      user: AuthService.getUser()
    }
  },
  mounted () {
    this.claims= null
    this.loading = true
    HttpService.request('get', 'api/claims/').then(response => {
      if (response.status === 200) {
        this.claims = response.data
        console.log(response.data)
      }
      this.loading = false
    }).catch(err => {
      this.loading = false
      if (err.response.status === 401) {
        this.$router.push('/logout')
      }
    })
  }
}
</script>
  
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}

md-spinner{
  margin: auto;
}

</style>
