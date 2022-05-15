import {CREATE_NEW_POST,UPLOAD_IMAGE, GET_POSTS_WITH_PAGINATION,
  GET_MY_POSTS_WITH_PAGINATION,GET_POST_BY_ID,Search_Post,FILTER_POST} from "src/graphql";
import {apolloClient} from "src/vue-apollo";

export async function createNewPost({commit},postData){
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
export async function getPostsWithPagination({commit},limit){
  let {data:{getPostsWithPagination}}=await apolloClient.query({
    query: GET_POSTS_WITH_PAGINATION,
    variables:{page:1,limit:limit}
  });
  console.log(getPostsWithPagination)
  return getPostsWithPagination.posts;
}
export async function getMyPostsWithPagination({commit}){
  let {data:{getMyPostsWithPagination}}=await apolloClient.query({
    query: GET_MY_POSTS_WITH_PAGINATION,
    variables:{page:1,limit:15}
  });
  console.log(getMyPostsWithPagination)
  return getMyPostsWithPagination.posts;
}

export async function uploadImage({commit},Images) {

let {data:{singleUploadStream}} = await  apolloClient.mutate({
    mutation:UPLOAD_IMAGE,
    variables: {file:Images}
  })

  return singleUploadStream;
}
export async function getPostById({commit},id){
  let {data: {getPostById}} =await apolloClient.query({
    query:GET_POST_BY_ID,
    variables:{id:id}
  })
  return getPostById;
}
export async function searchPost({commit},word) {
  let {data:{searchPost}} = await  apolloClient.query({
    query:Search_Post,
    variables:{query:word}
  })
  return searchPost
}
export async function filterPost({commit},filterData) {
  let {data:{filterPost}} = await apolloClient.query({
    query:FILTER_POST,
    variables:{query:filterData}
  })
  return filterPost
}
