<template lang="pug">
  table.app-table-preview
    thead
      tr
        th(v-for="column in columns") {{titles[column] || column}}
    tbody
      tr(v-for="item in data")
        td(v-for="column in columns") {{item[column]}}
</template>

<script>
  export default {
    name: 'appTablePreview',
    props: {
      data: Array,
      columns: Array,
      titles: {
        type: Object,
        'default': {}
      }
    },
    created () {
      console.log('this.data', this.data)
      console.log('this.columns', this.columns)
      console.log('this.titles', this.titles)
    }
  }
</script>

<style lang="scss" scoped>
  @import '../assets/css/variables';
  @import '../assets/css/breakpoints';

  .app-table-preview {
    tr:hover {
      background-color: inherit;
    }
  }
</style>
