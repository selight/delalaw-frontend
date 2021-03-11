import {REGISTER_USER,AUTHENTICATED_USER,AUTHENTICATE_USER} from "src/graphql";
import {apolloClient} from "src/vue-apollo";
import { Notify } from 'quasar'
import firebase from "firebase";

 export async function registerUser ({dispatch},userData) {
  try{
   let {data:{registerUser}} = await apolloClient.mutate({
     mutation:REGISTER_USER,
     variables: userData
   })
   dispatch('setAuthUserData',registerUser);

  }
  catch (e) {

    let a=e.message.split(':')[1].split(':')[0].toString().trim();

    if(a.localeCompare("EmailPHONE")===0){
      dispatch('sendOtp',(userData.phonenumber));

    }
    else if(a.localeCompare("PHONE")===0){

      await this.$router.push("/verify")
    }
    }
}
export async function sendOtp({getters},userNumber){

     let phoneNumber = userNumber;

    let appVerifier=getters.appVerifier;
let vm=this
    //
    firebase.auth().signInWithPhoneNumber(phoneNumber, appVerifier)
      .then(function (confirmationResult) {
        // SMS sent. Prompt user to type the code from the message, then sign the
        // user in with confirmationResult.confirm(code).
        window.confirmationResult = confirmationResult;
        //
        Notify.create({
          type: 'positive',
          color: 'positive',
          timeout: 2000,
          position: 'center',
          message: 'Yeah. sms sent. Great Job!'
        });
        vm.$router.push('signIn/verify')

      }).catch(function (error) {
      Notify.create({
        type: 'negative',
        color: 'negative',
        timeout: 1000,
        position: 'center',
        message: error
      })

    });



}
export async function initReCaptcha({commit}){

    setTimeout(()=>{
      let vm = this
      window.recaptchaVerifier = new firebase.auth.RecaptchaVerifier('recaptcha-container', {
        'size': 'invisible',
        'callback': function(response) {
          // reCAPTCHA solved, allow signInWithPhoneNumber.
          // ...
        },
        'expired-callback': function() {
          // Response expired. Ask user to solve reCAPTCHA again.
          // ...
        }
      });
      //
       commit("APP_VERIFIER",window.recaptchaVerifier)
      // this.appVerifier =  window.recaptchaVerifier
    },5000)

}
export async function getAuthUser ({commit,dispatch}) {
   try {
     let {data: {authUser}} = await apolloClient.query({
       query: AUTHENTICATED_USER
     });
     commit("LOGIN_USER", {user: authUser})
   }
   catch (e) {
     dispatch('logoutUser')
   }
}
export async function logoutUser({commit}){
   commit('LOGOUT_USER');
   localStorage.removeItem('apollo-token');
}
export async function loginUser({dispatch},userData) {
try{
   let {data:{loginUser}}=await apolloClient.query({
  query:AUTHENTICATE_USER,
  variables:userData
});
  dispatch('setAuthUserData',loginUser);}
  catch (e) {
    console.log(e);
  }

}
export async function setAuthUserData({commit},payload){
  commit('LOGIN_USER',payload);
  commit('SET_TOKEN',payload);
  localStorage.setItem('apollo-token',payload.token.split(' ')[1]);
  await this.$router.push('/');
}
export function  setDialog({commit},payload) {
   commit('DIALOG_SHOW',payload);

}
