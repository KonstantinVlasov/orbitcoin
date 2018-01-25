<template lang="pug">
  .dashboard-page
    h1.app-page-title Dashboard
      .app-page-subtitle Orbit Credit Network

    .row
      .column
        .panel.is-widget
          h2.panel-title Balance &nbsp;
          .finances-amount
            img(src="https://png.icons8.com/color/28/bitcoin.png")
            | 8.34 BTC
          .finances-amount
            img(src="https://png.icons8.com/color/28/ethereum.png")
            | 194 ETH
          .finances-amount
            img(src="https://png.icons8.com/color/28/us-dollar.png")
            | $24000
          .button.is-tiny Purchase
          | &nbsp;
          .button.is-tiny.is-white Withdraw
      .column.is-widget
        .panel.is-clean.is-widget
          .finances-widget.is-btc
      .column.is-widget
        .panel.is-clean.is-widget
          .finances-widget.is-eth
    .row
      .column
        .panel.is-clean
          h2.panel-title Next Payments
          table
            thead
              tr
                th #
                th Amount
                th Date
                th remaining amount
            tbody
              tr(v-for="payment in payments")
                td {{ payment.id }}
                td ${{ payment.amount }}
                td {{ payment.date }}
                td ${{ payment.remaining }}

      .column
        .panel.is-clean
          .panel-title Active deals
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


    .panel.is-clean
      .panel-title Market
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
    name: 'dashboardPage',
    scrollToTop: true,
    data () {
      return {
        icon: {
          id: 20825,
          name: 'Icon8 Logo'
        },
        deal: undefined,
        columns: ['id', 'amount'],
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
        }],
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
        }],
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
      const baseUrl = "https://widgets.cryptocompare.com/";
      window.cccTheme = {"General":{"borderWidth":"0","borderColor":"#fff","borderRadius":"0"},"Header":{"background":"white","displayFollowers":false},"Followers":{"background":"transparent","color":"#3d9400","borderColor":"transparent"},"Chart":{"fillColor":"#ffcaa0","borderColor":"#f07b20"},"Trend":{"colorUnchanged":"#f07b20"}};

      var appName = encodeURIComponent(window.location.hostname);
      if(appName==""){appName="local";}
      var s = document.createElement("script");
      s.type = "text/javascript";
      s.async = true;
      var theUrl = baseUrl+'serve/v2/coin/chart?fsym=ETH&tsym=USD&period=3M';
      s.src = theUrl + ( theUrl.indexOf("?") >= 0 ? "&" : "?") + "app=" + appName;
      this.$el.querySelector('.finances-widget.is-eth').appendChild(s)

      s = document.createElement("script");
      s.type = "text/javascript";
      s.async = true;
      theUrl = baseUrl+'serve/v2/coin/chart?fsym=BTC&tsym=USD&period=3M';
      s.src = theUrl + ( theUrl.indexOf("?") >= 0 ? "&" : "?") + "app=" + appName;
      this.$el.querySelector('.finances-widget.is-btc').appendChild(s)

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

  .finances-amount {
    font-family: $font-text;
    height: 28px;
    line-height: 28px;
    font-size: 1.25rem;
    font-weight: 400;
    margin-bottom: 1.5rem;
    color: $color-font-light;

    &>img {
      margin-right: 0.5rem;
      vertical-align: top;
    }
  }

  .finances-widget {
    font-family: $font-text;
    vertical-align: top;
    display: inline-block;
    width: 320px;
    height: 274px;
  }

  .column.is-widget {
    width: 320px;
    flex: 0 0 320px;
  }

  .panel.is-widget {
    height: 274px;
    overflow: hidden;
  }
</style>
