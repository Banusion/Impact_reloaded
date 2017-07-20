<template>
    <md-whiteframe md-elevation="7">
        <h3>Claims : {{ job.id }}</h3>
            <ClaimsDetails v-for="claimdetails in claimsdetails" :key="claimdetails" :jobdetail="claimdetails"></ClaimsDetails>
    </md-whiteframe>
</template>

<script>
  import HttpService from '@/services/HttpService'
  import AuthService from '@/services/AuthService'
  import ClaimsDetails from '@/components/ClaimsDetails'
  export default {
    components: {
      ClaimsDetails
    },
    props: ['job'],
    name: 'Claims',
    data () {
      return {
        title: 'Claims Portal',
        claimsdetails: null
      }
    },
    mounted () {
      this.claimsdetails = null
      this.loading = true
      HttpService.request('get', 'api/claims/details?' + this.job.id).then(response => {
        if (response.status === 200) {
          this.claimsdetails = response.data
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
    .md-whiteframe{
        margin: auto;
        background-color: #dfdfdf;
        max-width: 80%;
    }

    .md-display-1,h3{
        padding: 10px;
    }
</style>
