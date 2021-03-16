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
export function APP_VERIFIER(state,captcha) {
state.appVerifier=captcha;
}
export function  SAVE_USER(state,payload) {
  state.user=payload;
}
export function UPDATE_USER(state) {
state.user.phoneVerified=true;
}
