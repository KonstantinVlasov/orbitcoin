<template lang="pug">
  .login-page
    .content
      app-logo.is-loading
      h1 Orbitcoin
      p.subtitle Orbit Credit Network
      form.login.panel.is-elevation-18(v-on:submit.prevent="submit('login')")
        .title Login

        .form-item
          input(v-model="email" name="email" placeholder="Email")
        .form-item
          input(v-model="password" type="password" name="password" placeholder="Password")

        .form-controls
          button.button(
            type="submit"
            v-bind:class="{'is-loading': isSubmitting}"
          ) Login
</template>

<script>
  import { mapState, mapActions } from 'vuex'

  export default {
    name: 'loginPage',
    layout: 'empty',
    scrollToTop: true,
    data () {
      return {
        email: 'test@orbitcoin.com',
        password: 'test@orbitcoin.com',
        isSubmitting: false
      }
    },
    methods: {
      ...mapActions(['login']),
      submit () {
        console.log('submit')
        this.isSubmitting = true
        setTimeout(() => {
          this.login()
            .then(() => {
              this.isSubmitting = false
              this.$router.push('/app')
            })
            .catch(() => {
              this.isSubmitting = false
            })
        }, 1500)
      }
    }
  }
</script>

<style lang="scss">
  @import '../../assets/css/variables';

  .login-page {
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    padding-bottom: 4rem;

    &:before {
      content: '';
      position: absolute;
      z-index: -1;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      pointer-events: none;
      background: url(/static/images/universe.jpeg) 50% 50%, radial-gradient(#261d66, #040613);
      background-size: cover;
    }
    &:after {
      content: '';
      position: absolute;
      z-index: -1;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      pointer-events: none;
      background-image: radial-gradient(#333c46, black);
      opacity: 0.55;
    }

    .app-logo {
      margin: 0 auto;
    }

    h1 {
      margin : 0 0 0.25rem;
      font-size: 2rem;
      font-weight: 300;
      color: white;
      line-height: 1;
      text-align: center;
      text-shadow: 0 1px 2px black;
    }

    .login {
      margin-top: 1.5rem;
      width: 18rem;
      padding: 1.5rem;
      text-align: center;
    }

    .title {
      font-size: 1.5rem;
      margin-bottom: 2rem;
    }
    .subtitle {
      text-align: center;
      color: white;
      margin: 0.25rem 0 1rem;
      text-shadow: 0 1px 2px black;
    }
  }
</style>
