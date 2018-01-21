<template lang="pug">
  .finances-page
    h1.app-page-title Finances
      .app-page-subtitle Balance and payments information

    .panel
      h2.panel-title Balance &nbsp;
        .button.is-tiny Purchase
        | &nbsp;
        .button.is-tiny.is-white Withdraw
      .finances-amount
        img(src="https://png.icons8.com/color/24/bitcoin.png")
        | 8.34 BTC
      .finances-amount
        img(src="https://png.icons8.com/color/24/ethereum.png")
        | 194 ETH
      .finances-amount
        img(src="https://png.icons8.com/color/24/us-dollar.png")
        | $24000
    .panel.is-clean
      h2.panel-title Next Payments
      table
        thead
          tr
            th #
            th Date
            th Amount
            th remaining amount
        tbody
          tr(v-for="payment in payments")
            td {{ payment.id }}
            td {{ payment.date }}
            td ${{ payment.amount }}
            td ${{ payment.remaining }}
</template>

<script>
  export default {
    name: 'financesPage',
    scrollToTop: true,
    data () {
      return {
        payments: [{
          id: 1,
          amount: 500,
          remaining: 500,
          date: '30.01.2018'
        }, {
          id: 2,
          amount: 450,
          remaining: 3200,
          date: '03.02.2018'
        }, {
          id: 3,
          amount: 820,
          remaining: 1640,
          date: '11.02.2018'
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

  .finances-amount {
    display: inline-block;
    height: 24px;
    line-height: 24px;
    font-size: 1.25rem;
    font-weight: 400;
    margin-right: 1.5rem;
    color: $color-font-light;

    &>img {
      margin-right: 0.5rem;
      vertical-align: top;
    }
  }
</style>
