

export default function(){
  return{
    authStatus:false,
    user:{},
    token:localStorage.getItem('apollo-token') || null,
}




}
