'use strict'

const USER_LOGGED_IN = 'USER_LOGGED_IN'

const state = () => ({
  user: {
    isGuest: true,
    activeLicense: false,
    authToken: false,
    loaded: false,
    licenses: undefined
  },
  loggedIn: false,
  token: false
})

const mutations = {
  [USER_LOGGED_IN] (state, user) {
    state.user = user
    state.loggedIn = true
  }
}

const actions = {
  login ({commit}, user) {
    return new Promise(function (resolve) {
      commit(USER_LOGGED_IN, user)
      resolve()
    })
  }
}

const store = () => ({
  state,
  mutations,
  actions
})

export default store
