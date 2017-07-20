<template>
    <md-layout md-gutter>
        <md-layout md-flex-xsmall="100" md-flex-small="50" md-flex-medium="50">
            <md-card-media>
                {{ jobdetail }}
            </md-card-media>
        </md-layout>
    </md-layout>
</template>

<script>
  import HttpService from '@/services/HttpService'
  import AuthService from '@/services/AuthService'
  export default {
    props: ['jobdetail'],
    name: 'ClaimsDetail',
    data () {
      return {
        title: 'Claims Detail Portal'
      }
    }
  }
</script>
