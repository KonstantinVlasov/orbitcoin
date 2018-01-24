<template lang="pug">
  .app-logo
    .planet
    .content
</template>

<style lang="scss" scoped>
  @import '../assets/css/variables';
  @import '../assets/css/breakpoints';

  .app-logo {
    width: 70px;
    height: 70px;
    padding: 22px;
    transform: rotate(-45deg);

    .planet {
      position: absolute;
      width: 26px;
      height: 26px;
      border-radius: 50%;
      background-image: linear-gradient(120deg, #f6d365 0%, #fda085 100%);
      background-image: linear-gradient(-60deg, #ff5858 0%, #f09819 100%);
      //box-shadow: 2px 2px 0 4px $color-orange;
    }

    .content {
      $color: $color-orange;
      position: relative;
      width: 26px;
      height: 26px;
      border-radius: 50%;
      //background: white;
      //box-shadow: 10px 10px 0 10px $color;

      $radius: 15px;
      &:before {
        content: '';
        position: absolute;
        top: -$radius;
        left: -$radius;
        right: -$radius;
        bottom: -$radius;
        border-radius: 50%;
        border: 2px solid rgba(255,255,255,0.4);
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
        background-image: linear-gradient(120deg, #f6d365 0%, #fda085 100%);
        background-image: linear-gradient(-60deg, #ff5858 0%, #f09819 100%);
      }
    }

    &.is-loading .content {
      animation: spin 2s linear infinite;
    }
  }
</style>
