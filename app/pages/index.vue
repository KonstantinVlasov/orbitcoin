<template lang="pug">
  .index-page
    .content
      app-logo.is-loading
      h1 Orbitcoin
      p.subtitle Orbit Credit Network
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

    &:before {
      content: '';
      position: absolute;
      z-index: -1;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      pointer-events: none;
      background: url(/static/images/universe.jpeg) 50% 50%, radial-gradient(#261d66, #040613);
      background-size: cover;
    }
    &:after {
      content: '';
      position: absolute;
      z-index: -1;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      pointer-events: none;
      background-image: radial-gradient(#333c46, black);
      opacity: 0.55;
    }

    .app-logo {
      margin: 0 auto;
    }

    h1 {
      margin : 0 0 0.25rem;
      font-size: 2.5rem;
      font-weight: 300;
      color: white;
      line-height: 1;
      text-align: center;
      text-shadow: 0 1px 2px black;
    }
    .subtitle {
      font-size: 1.25rem;
      text-align: center;
      color: white;
      margin: 0.25rem 0 1rem;
      text-shadow: 0 1px 2px black;
    }
  }
</style>
