<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
  #app {
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: stretch;
  }

  body{
    height: 100%;
    background-color: #fff!important;
  }
  .md-theme-default.md-toolbar,.md-theme-default.md-tabs>.md-tabs-navigation,.md-theme-default.md-card.md-primary{
    background-color: rgb(237,26,59) !important
  }
  .md-theme-default.md-tabs>.md-tabs-navigation .md-tab-indicator{
    background-color: rgb(87,87,86)!important;
  }
  .swagger-ui .topbar{
    background-color: rgb(87,87,86)!important;
  }
  .swagger-ui .topbar .download-url-wrapper .download-url-button{
    background-color: rgb(237,26,59) !important
  }

  .swagger-ui .scheme-container{
    display: none;
  }
</style>
