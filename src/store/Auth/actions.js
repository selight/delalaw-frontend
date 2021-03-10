import {REGISTER_USER,AUTHENTICATED_USER,AUTHENTICATE_USER} from "src/graphql";
import {apolloClient} from "src/vue-apollo";
import {dialog_show} from "src/store/Auth/mutations";

 export async function registerUser ({dispatch},userData) {
  try{
   let {data:{registerUser}} = await apolloClient.mutate({
     mutation:REGISTER_USER,
     variables: userData
   })
   dispatch('setAuthUserData',registerUser)
  }
  catch (e) {
      console.log(e);
    console.log(e.message);
    console.log(e.locations);
    }
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
