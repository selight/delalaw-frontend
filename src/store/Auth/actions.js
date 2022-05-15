import {REGISTER_USER,AUTHENTICATED_USER,AUTHENTICATE_USER,UPDATE_USER, GET_GOOGLE_AUTH_LINK,LOGIN_WITH_GOOGLE} from "src/graphql";
import {apolloClient} from "src/vue-apollo";
import { Notify } from 'quasar'
import firebase from "firebase";

export async function getGoogleAuthLink(){
  try {
    let {data:{getGoogleAuthLink}} = await apolloClient.query({
      query: GET_GOOGLE_AUTH_LINK,
    })
    return getGoogleAuthLink;
  }
  catch (e) {
    console.log(e)
  }
}
export async  function loginWithGoogle({dispatch},code) {
  try {
    let {data:{signInWithGoogle}} = await apolloClient.mutate({
      mutation: LOGIN_WITH_GOOGLE,
      variables: {code:code}
    });
    dispatch('setAuthUserData',signInWithGoogle);
  }catch (e) {
    console.log(e)
  }
  }
export async function registerUser ({dispatch},userData) {
  try{
   let {data:{registerUser}} = await apolloClient.mutate({
     mutation:REGISTER_USER,
     variables: userData
   })
   dispatch('setAuthUserData',registerUser);

  }
  catch (e) {

    let a=e.message.split(':')[1]//.split(':')[0].toString().trim();
    Notify.create({
      position:'center',
      message:a,
      color:'negative',
    })

    if(a.localeCompare("EmailPHONE")===0){
      dispatch('sendOtp',(userData));

    }
    else if(a.localeCompare("PHONE")===0){

      await this.$router.push("/verify")
    }
    }
}
export async function sendOtp({commit,getters},user){

     let phoneNumber = user.phoneNumber;

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
        commit('SAVE_USER',user)
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
     console.log('from auth',e);
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

  dispatch('setAuthUserData',loginUser);

}
  catch (e) {
    let a=e.message.split(':')[1]
    Notify.create({
      position:'center',
      message:a,
      color:'negative',
    })

  }

}
export async function setAuthUserData({commit},payload){
console.log("payload from set Auth User Data",payload);
  commit('LOGIN_USER',payload);
  commit('SET_TOKEN',payload);
  localStorage.setItem('apollo-token',payload.token.split(' ')[1]);

}
export async function  updateUser({commit}) {
   commit('UPDATE_USER');

}
export async function editUser ({commit,getters},userData) {

  try{
    let {data:{updateUser}} = await apolloClient.mutate({
      mutation:UPDATE_USER,
      variables: {id:getters.user.id,profilePicture:userData}
    })
    commit('LOGIN_USER',updateUser);

  }
  catch (e) {
    console.log(e)
  }}
