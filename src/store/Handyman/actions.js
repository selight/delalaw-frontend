import {
  HANDYMAN_NEW_POST,
  HANDYMAN_GET_ALL_POSTS_WITH_PAGINATION,
  HANDYMAN_GET_MY_HANDYMAN_POSTS_WITH_PAGINATION, GET_HANDYMAN_POST_BY_ID
} from "src/graphql";
import {apolloClient} from "src/vue-apollo";
import {getMyPostsWithPagination} from "src/store/Roommate/actions";

export async function createNewHandyman({commit},postData){
  console.log("hey",postData)
try {let data =await apolloClient.mutate({
  mutation:HANDYMAN_NEW_POST,
  variables:postData
})
 return data
}
catch (e) {
  this.$q.notify({message:e})
}
}
export async function getPostsWithPagination({commit}){
  let {data:{getHandymanPostsWithPagination}}=await apolloClient.query({
    query: HANDYMAN_GET_ALL_POSTS_WITH_PAGINATION,
    variables:{page:1,limit:15}
  });
  console.log(getHandymanPostsWithPagination)
  return getHandymanPostsWithPagination.posts;
}

export async function getMyHandymanPostsWithPagination({commit}){
  let {data:{getMyHandymanPostsWithPagination}}=await apolloClient.query({
    query: HANDYMAN_GET_MY_HANDYMAN_POSTS_WITH_PAGINATION,
    variables:{page:1,limit:15}
  });
  console.log(getMyHandymanPostsWithPagination)
  return getMyHandymanPostsWithPagination.posts;
}
export async function getHandymanPostById({commit},id){
  let {data: {getPostById}} =await apolloClient.query({
    query:GET_HANDYMAN_POST_BY_ID,
    variables:{id:id}
  })
  return getPostById;
}
