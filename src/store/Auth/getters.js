export function isAuth (state) {
return !!state.token

}
export function user (state) {
  return state.user

}
export function authStatus (state) {
  return state.authStatus

}
export function appVerifier (state) {
  return state.appVerifier

}
