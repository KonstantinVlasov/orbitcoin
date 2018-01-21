<template lang="pug">
  .loans-page
    h1.app-page-title Loans &nbsp;
      .button.is-tiny(v-on:click="createLoan") Create loan
      .app-page-subtitle My available loans
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
          tr(v-for="loan in loans" v-on:click="openLoan(loan)")
            td {{ loan.id }}
            td ${{ loan.amount }}
            td {{ loan.duration }}
            td {{ loan.interest }}%
            td {{ loan.date }}

    app-modal(
      name="loan-detail"
    )
      div(v-if="loan")
        .title Loan # {{loan.id}}
        p Amount ${{loan.amount}}
        p Duration {{loan.duration}}
        p Interest (per year) {{loan.interest}}%
        p Income ${{income(loan)}}
        p Minimum credit score {{loan.score}}
        p Views {{loan.views}}
        p Created date {{loan.date}}

    .loan-create-modal
      app-modal(name="loan-create")
        .modal-options
        .modal-info
          .p Return amount
          .p Income

</template>

<script>
  export default {
    name: 'loansPage',
    scrollToTop: true,
    data () {
      return {
        loan: undefined,
        newLoan: {
          amount: 100,
          duration: 1,
          interest: 1,
          score: 1,
          income: undefined
        },
        loans: [{
          id: 1,
          amount: 1000,
          duration: '6 months',
          interest: 20,
          date: '20.01.2018',
          views: 57,
          score: 5
        }, {
          id: 2,
          amount: 5000,
          duration: '9 months',
          interest: 20,
          date: '20.01.2018',
          views: 82,
          score: 8
        }, {
          id: 3,
          amount: 2000,
          duration: '3 months',
          interest: 20,
          date: '20.01.2018',
          views: 64,
          score: 6.5
        }]
      }
    },
    methods: {
      createLoan () {
        this.$modal.show('loan-create')
      },
      openLoan (loan) {
        this.loan = loan
        this.$modal.show('loan-detail')
      },
      income (loan) {
        return Math.round(loan.amount*(1+loan.interest/100*2/3) - loan.amount)
      }
    }
  }
</script>

<style lang="scss">
  @import '../../assets/css/variables';
  @import '../../assets/css/breakpoints';

  .loan-create-modal {
    .app-modal {
      display: flex;
      justify-content: space-around;
      align-items: stretch;
      padding: 0;
      height: 334px;
    }

    .modal-options {
      order: 0;
      flex: 0 0 300px;
      width: 300px;
      border-radius: 4px 0 0 4px;
    }

    .modal-info {
      order: 1;
      flex: 0 0 300px;
      width: 300px;
      padding: 1rem 1rem 0;
      background-color: #f4f4f4;
      box-shadow: inset 3px 1px 2px -2px rgba(0, 0, 0, 0.25);
      border-radius: 0 4px 4px 0;
      overflow-y: auto;
    }
  }
</style>
