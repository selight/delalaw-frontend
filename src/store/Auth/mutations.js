export function LOGIN_USER ( state,payload) {
  state.user=payload.user;
  state.authStatus=true;
}
export function SET_TOKEN ( state,payload) {
  state.token=payload;
}
export function LOGOUT_USER ( state) {
  state.use= {};
  state.authStatus=false;
  state.token=null;
}
