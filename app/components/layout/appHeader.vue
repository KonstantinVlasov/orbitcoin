<template lang="pug">
  .app-header
    span Search

    .actions
      .item
        img.notification(src="https://png.icons8.com/material/fbaa51/appointment-reminders.png")
      .item
        img.comments(src="https://png.icons8.com/material/fbaa51/comments.png")
      .item
        img.comments(src="https://png.icons8.com/material/fbaa51/user-male.png")
</template>

<script>
  export default {
    name: 'AppHeader'
  }
</script>

<style lang="scss" scoped>
  @import '../../assets/css/variables';

  .app-header {
    position: absolute;
    z-index: 1;
    top: 0;
    left: $sidebar-width;
    right: 0;
    padding: 0 1.5rem 0 2rem;
    height: 4rem;
    line-height: 4rem;
    background: white;
    box-shadow: 0 0 15px 3px rgba(0,0,0,0.2);

    .actions {
      float: right;
    }
    .item {
      display: inline-block;
      vertical-align: top;
      padding: 0 0.5rem;
      img {
        vertical-align: middle;
      }
    }

    .notification {

    }
  }
</style>
