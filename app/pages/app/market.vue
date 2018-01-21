<template lang="pug">
  .market-page
    h1.app-page-title Market
      .app-page-subtitle List of actual applications
    .panel.is-clean
      table
        thead
          tr
            th #
            th Amount
            th Borrower
            th Score
            th Duration
            th Interest
            th Date
        tbody
          tr(v-for="request in requests")
            td {{ request.id }}
            td ${{ request.amount }}
            td {{ request.borrower }}
            td {{ request.score }}
            td {{ request.duration }}
            td {{ request.interest }}
            td {{ request.date }}
</template>

<script>
  export default {
    name: 'marketPage',
    scrollToTop: true,
    data () {
      return {
        requests: [{
          id: 1,
          amount: 1000,
          borrower: 'Jane S',
          score: 8.7,
          duration: '3 month',
          interest: 20,
          date: '20.01.2018'
        }, {
          id: 2,
          amount: 5000,
          duration: '6 month',
          borrower: 'Sam P',
          score: 9.5,
          interest: 20,
          date: '20.01.2018'
        }, {
          id: 3,
          amount: 2000,
          duration: '1 month',
          borrower: 'Rodger Jr',
          score: 7.4,
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
