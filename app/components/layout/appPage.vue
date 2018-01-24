<template lang="pug">
  .app-page
    .app-page-content
      slot
</template>

<script>
  export default {
    name: 'appPage'
  }
</script>

<style lang="scss">
  @import '../../assets/css/variables';
  @import '../../assets/css/breakpoints';

  .app-page {
    //background-color: #f5f5f5;
    position: absolute;
    top: 4rem;
    left: $sidebar-width;
    right: 0;
    bottom: 0;

    &.is-left-sidebar-disabled {
      left: 0;
    }
    &.is-right-sidebar-disabled {
      right: 0;
    }

    .app-page-content {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      padding: 2rem;
      overflow-y: auto;
      /*background-color: #f4f5f7;*/
      /*background-image: linear-gradient(to top, #f3e7e9 0%, #e3eeff 99%, #e3eeff 100%);*/
      /*background-image: linear-gradient(to top, #d5d4d0 0%, #d5d4d0 1%, #eeeeec 31%, #efeeec 75%, #e9e9e7 100%);*/
      /*background-image: linear-gradient(to top, #e6e9f0 0%, #eef1f5 100%);*/
      /*background-image: linear-gradient(0deg, #eff1f4 0%, #c3cfe2 100%);*/
    }

    .app-page-title {
      text-align: left;
      font-size: 1.5rem;
      margin: 0 0 1.5rem;
      &:first-letter {
        text-transform: capitalize;
      }

      &.is-small {
        margin: 0.5rem auto;
        font-size: 2rem;
        color: $color-font-dark;
      }
    }
    .app-page-subtitle {
      max-width: 50rem;
      color: $color-font;
      font-size: 16px;
      font-weight: 400;
    }
    .app-page-section {
      padding: 2.5rem 1rem;

      &.is-underline {
        border-bottom: 1px solid $color-grey;
      }
      &.is-grey {
        background-color: #fafafa;
      }
    }
  }
</style>
