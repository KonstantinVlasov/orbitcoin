<template lang="pug">
  .dashboard-page
    h1.app-page-title Deals
      .app-page-subtitle Active deals list
    .panel.is-clean
      table
        thead
          tr
            th #
            th Amount
            th Duration
            th Interest
            th Date
        tbody
          tr(v-for="deal in deals" v-on:click="openDeal(deal)")
            td {{ deal.id }}
            td ${{ deal.amount }}
            td {{ deal.duration }}
            td {{ deal.interest }}%
            td {{ deal.date }}

    app-modal(
    name="deal-detail"
    )
      div(v-if="deal")
        .title Loan # {{deal.id}}
        p Borrower ${{deal.borrower}}
        p Credit score {{deal.score}}
        p Amount ${{deal.amount}}
        p Duration {{deal.duration}}
        p Interest (per year) {{deal.interest}}%
        p Income ${{income(deal)}}
        p Created date {{deal.date}}
</template>

<script>
  export default {
    name: 'dashboardPage',
    scrollToTop: true,
    data () {
      return {
        icon: {
          id: 20825,
          name: 'Icon8 Logo'
        },
        deal: undefined,
        deals: [{
          id: 1,
          amount: 1500,
          duration: '8 months',
          interest: 15,
          borrower: 'Tom C',
          date: '20.01.2018',
          score: 5
        }, {
          id: 2,
          amount: 4000,
          duration: '4 months',
          interest: 5,
          borrower: 'Molly N',
          date: '20.01.2018',
          score: 8
        }, {
          id: 3,
          amount: 3800,
          duration: '5 months',
          interest: 10,
          borrower: 'Chandler B',
          date: '20.01.2018',
          score: 6.5
        }]
      }
    },
    methods: {
      openDeal (deal) {
        this.deal = deal
        this.$modal.show('deal-detail')
      },
      income (deal) {
        return Math.round(deal.amount*(1+deal.interest/100*2/3) - deal.amount)
      }
    }
  }
</script>

<style lang="scss">
  @import '../../assets/css/variables';
  @import '../../assets/css/breakpoints';
</style>
