'use strict'

import Vuex from 'vuex'

import auth from './auth'

const store = () => new Vuex.Store({
  strict: process.env.NODE_ENV !== 'production',
  modules: {
    auth: auth()
  }
})

export default store
