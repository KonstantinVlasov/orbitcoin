<template lang="pug">
  .loans-page
    h1.app-page-title Loans &nbsp;
      .button.is-tiny Create loan
    .panel
      table
        thead
          tr
            th #
            th Amount
            th Duration
            th Interest
            th Date
        tbody
          tr(v-for="loan in loans")
            td {{ loan.id }}
            td ${{ loan.amount }}
            td {{ loan.duration }}
            td {{ loan.interest }}
            td {{ loan.date }}
</template>

<script>
  export default {
    name: 'loansPage',
    scrollToTop: true,
    data () {
      return {
        loans: [{
          id: 1,
          amount: 1000,
          duration: '3 month',
          interest: 20,
          date: '20.01.2018'
        }, {
          id: 1,
          amount: 5000,
          duration: '6 month',
          interest: 20,
          date: '20.01.2018'
        }, {
          id: 1,
          amount: 2000,
          duration: '1 month',
          interest: 20,
          date: '20.01.2018'
        }]
      }
    },
    mounted () {
    }
  }
</script>

<style lang="scss">
  @import '../../assets/css/variables';
  @import '../../assets/css/breakpoints';
</style>
