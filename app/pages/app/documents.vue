<template lang="pug">
  .documents-page
    h1.app-page-title Documents
      .app-page-subtitle Company, technology, and privacy documents
    .panel
      a.is-document(href="#") White Paper
      br
      a.is-document(href="#") Membership Agreement
      br
      a.is-document(href="#") Privacy Policy
      br
      a.is-document(href="#") Terms of Use
</template>

<script>
  export default {
    name: 'documentsPage',
    scrollToTop: true,
    data () {
      return {
      }
    },
    mounted () {
    }
  }
</script>

<style lang="scss">
  @import '../../assets/css/variables';
  @import '../../assets/css/breakpoints';

  .documents-page {
    a {
      font-weight: 500;

      &.is-document {
        display: inline-block;
        padding-left: 30px;
        line-height: 30px;
        background: url(https://png.icons8.com/material/f07b20/document.png) 0 3px no-repeat;
      }
    }
  }
</style>
