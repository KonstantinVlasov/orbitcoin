<template lang="pug">
  .app-sidebar
    app-logo
    .title OrbitCoin
    app-menu
</template>

<script>
  import logo from '~/assets/svg/logo.svg'
  export default {
    name: 'AppSidebar',
    data () {
      return {
        logo
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import '../../assets/css/variables';

  .app-sidebar {
    position: absolute;
    z-index: 1;
    top: 0;
    left: 0;
    bottom: 0;
    width: $sidebar-width;
    //background-image: linear-gradient(60deg, #29323c 0%, #485563 100%);
    color: #f8f8f8;
    box-shadow: 0 0 15px 3px rgba(0,0,0,0.4);

    &:before {
      content: '';
      position: absolute;
      z-index: -1;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      pointer-events: none;
      background: url(/static/images/universe.jpeg), radial-gradient(#261d66, #040613);
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
      background-image: linear-gradient(#333c46, black);
      opacity: 0.55;
    }

    .app-logo {
      margin: 1rem auto 0;
    }

    .title {
      text-align: center;
      font-size: 16px;
      font-weight: 400;
      margin-bottom: 1rem;
    }
  }
</style>
