<template lang="pug">
  .app-menu
    router-link.item(to="/app") Dashboard
    router-link.item(to="/app/deals") Deals
    router-link.item(to="/app/loans") Loans
    router-link.item(to="/app/market") Market
    router-link.item(to="/app/finances") Finances
    router-link.item(to="/app/documents") Documents
    router-link.item(to="/app/about") About
</template>

<script>
  export default {
    name: 'AppMenu'
  }
</script>

<style lang="scss" scoped>
  @import '../../assets/css/variables';

  .app-menu {
    width: 100%;

    .item {
      display: block;
      height: 2.5rem;
      line-height: 2.5rem;
      padding: 0 1rem 0 1.5rem;
      font-size: 12px;
      font-weight: 500;
      text-transform: uppercase;
      text-decoration: none;
      color: inherit;
      transition: 0.3s ease all;
      border-left: 4px solid transparent;
      &:hover {
        background-color: rgba(255,255,255,0.1);
        border-color: $color-orange;
      }
      &.is-exact-active {
        background-color: rgba(255,255,255,0.1);
        border-color: $color-orange;
      }
    }
  }
</style>
