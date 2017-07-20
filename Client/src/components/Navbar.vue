<template>
<div>
  <md-toolbar>
    <md-button class="md-icon-button" @click.native="toggleLeftSidenav">
      <md-icon>menu</md-icon>
    </md-button>
    <router-link to="/"  class="md-title" style="flex: 1"> Claims Portal </router-link><img src="../assets/hsv_blanc.png">
  </md-toolbar>

  <md-sidenav class="md-left" ref="leftSidenav" @open="open('Left')" @close="close('Left')">
    <md-toolbar class="md-large">
      <div class="md-toolbar-container">
        <h3 class="md-title">Menu</h3>
      </div>
      <span class="md-subheading">{{user.email}}</span>
    </md-toolbar>
     <md-list>
      <md-list-item>
          <router-link to="/" exact>
            <md-icon>home</md-icon> <span>Home</span>
          </router-link>
      </md-list-item>
      <md-list-item>
          <router-link to="/logout" event="click" v-on:click.native="logout()">
            <md-icon>power_settings_new</md-icon> <span>Logout</span>
          </router-link>
      </md-list-item>
    </md-list>
  </md-sidenav>
  </div>
</template>

<script>
import AuthService from '@/services/AuthService'
export default {
  name: 'navbar',
  data () {
    return {
      title: 'Claims Portal',
      user: AuthService.user
    }
  },
   methods: {
    logout () {        
        AuthService.logout();
    },
    toggleLeftSidenav() {
      this.$refs.leftSidenav.toggle();
    }
  }
  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.md-subheading{
  font-size: 0.9em;
}

.md-theme-default a:not(.md-button),.md-theme-default a:not(.md-button):hover{
  text-decoration: none;
  color:white;
}

.md-toolbar img{
  max-height: 44px;
}
</style>
