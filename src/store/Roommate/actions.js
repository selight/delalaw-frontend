import {CREATE_NEW_POST,UPLOAD_IMAGE, GET_POSTS_WITH_PAGINATION} from "src/graphql";
import {apolloClient} from "src/vue-apollo";

export async function createNewPost({commit},postData){
  console.log("hey",postData)
try {let data =await apolloClient.mutate({
  mutation:CREATE_NEW_POST,
  variables: postData
})

 return data

}
catch (e) {
  this.$q.notify({message:e})
}
}
export async function getPostsWithPagination({commit}){
  let {data:{getPostsWithPagination}}=await apolloClient.query({
    query: GET_POSTS_WITH_PAGINATION,
    variables:{page:1,limit:15}
  });
  console.log(getPostsWithPagination)
  return getPostsWithPagination.posts;
}
export async function uploadImage({commit},Images) {
console.log('here');
let {data:{singleUploadStream}} = await  apolloClient.mutate({
    mutation:UPLOAD_IMAGE,
    variables: {file:Images}
  })

  return singleUploadStream;
}
