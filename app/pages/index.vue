<template lang="pug">
  .index-page
    .content
      app-logo.is-loading
      h1 Orbitcoin
</template>

<script>
  export default {
    name: 'indexPage',
    layout: 'empty',
    scrollToTop: true,
    data () {
      return {}
    }
  }
</script>

<style lang="scss">
  @import '../assets/css/variables';

  .index-page {
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    padding-bottom: 4rem;
    background-image: linear-gradient(60deg, #29323c 0%, #485563 100%);

    .app-logo {
      margin: 0 auto;
    }

    h1 {
      margin-top: 0;
      font-size: 2rem;
      font-weight: 300;
      color: white;
      line-height: 1;
    }
  }
</style>
