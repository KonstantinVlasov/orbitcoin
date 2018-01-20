<template lang="pug">
  .dashboard-page
    h1.app-page-title Dashboard
    .button.is-shadow button
</template>

<script>
  export default {
    name: 'dashboardPage',
    scrollToTop: true,
    data () {
      return {
        icon: {
          id: 20825,
          name: 'Icon8 Logo'
        }
      }
    },
    mounted () {
    }
  }
</script>

<style lang="scss">
  @import '../../assets/css/variables';
  @import '../../assets/css/breakpoints';
</style>
