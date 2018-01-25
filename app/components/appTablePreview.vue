<template lang="pug">
  .app-table
    table
      thead
        tr
          th(v-for="column in columns") {{titles[column] || column}}
      tbody
        tr(v-for="item in data")
          td(v-for="column in columns") {{item[column]}}

    .pagination
      .page(
        v-on:click="firstPage"
        v-bind:class="{'is-disabled': paginate.page === 1}"
      ) &#171;
      .page(
        v-bind:click="prevPage"
        v-bind:class="{'is-disabled': paginate.page === 1}"
      ) &#8249;

      .page.is-number(
        v-for="page in paginate.visiblePages"
        v-on:click="page(page)"
        v-bind:class="{'is-active': page === paginate.page}"
      ) {{ page }}

      .page(
        v-on:click="nextPage"
        v-bind:class="{'is-disabled': paginate.page === paginate.pages}"
      ) &#8250;
      .page(
        v-on:click="lastPage"
        v-bind:class="{'is-disabled': paginate.page === paginate.pages}"
      ) &#187;
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
      },
      paginate: {
        pages: 1,
        page: 1,
        visiblePages: 7
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

  .app-table {
    tr:hover {
      background-color: inherit;
    }

    .pagination {
      color: $color-font;
      height: 2rem;
      float: right;
    }

    .page {
      display: inline-block;
      cursor: pointer;

      width: 2rem;
      height: 2rem;
      margin: 0 0.125rem;
      vertical-align: top;
      text-align: center;
      line-height: 1.5rem;
      border: 2px solid transparent;
      border-radius: 50%;
      font-weight: 300;
      font-size: 1.25rem;

      &.m-active, &:hover:not(.m-disabled) {
        color: $color-orange;
        border: 2px solid lighten($color-orange, 10%);
        border-radius: 50%;
      }

      &.m-disabled {
        color: $color-font-light;
        cursor: default;
      }

      &.m-number {
        line-height: 1.75rem;
        font-size: 1rem;
      }
    }
  }
</style>
