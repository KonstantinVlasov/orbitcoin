'use strict'

export default ({ store, redirect, route }) => {
  if (route.fullPath.startsWith('/app')) {
    if (!store.state.auth.loggedIn) {
      redirect('/app/login')
    }
  }
}
