export function LOGIN_USER ( state,payload) {
  state.user=payload.user;
  state.authStatus=true;
}
export function SET_TOKEN ( state,payload) {
  state.token=payload.token;
}
export function LOGOUT_USER ( state) {
  state.user= {};
  state.authStatus=false;
  state.token=null;
}
