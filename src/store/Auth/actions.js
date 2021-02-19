import {REGISTER_USER,AUTHENTICATED_USER,AUTHENTICATE_USER} from "src/graphql";
import {apolloClient} from "src/vue-apollo";

 export async function registerUser ({dispatch},userData) {
   let {data:{registerUser}} = await apolloClient.mutate({
     mutation:REGISTER_USER,
     variables: userData
   })
   dispatch('setAuthUserData',registerUser)
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
let {data:{loginUser}}=await apolloClient.query({
  query:AUTHENTICATE_USER,
  variables:userData
});

  dispatch('setAuthUserData',loginUser);
}
export async function setAuthUserData({commit},payload){
  commit('LOGIN_USER',payload);
  commit('SET_TOKEN',payload);
  localStorage.setItem('apollo-token',payload.token.split('')[1])
}
