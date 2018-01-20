<template lang="pug">
  .app-logo
    .content
</template>

<style lang="scss" scoped>
  @import '../assets/css/variables';
  @import '../assets/css/breakpoints';

  .app-logo {
    width: 70px;
    height: 70px;
    padding: 25px;
    transform: rotate(-45deg);

    .content {
      $color: $color-orange;
      position: relative;
      width: 20px;
      height: 20px;
      border-radius: 50%;
      background: $color;

      $radius: 15px;
      &:before {
        content: '';
        position: absolute;
        top: -$radius;
        left: -$radius;
        right: -$radius;
        bottom: -$radius;
        border-radius: 50%;
        border: 2px solid white;
      }
      &:after {
        content: '';
        position: absolute;
        top: -($radius + 4px);
        left: 50%;
        margin-left: -5px;
        width: 10px;
        height: 10px;
        border-radius: 50%;
        background: $color;
      }
    }

    &.is-loading {
      animation: spin 2s linear infinite;
    }
  }
</style>
