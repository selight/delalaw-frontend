import {HANDYMAN_NEW_POST, HANDYMAN_GET_ALL_POSTS_WITH_PAGINATION} from "src/graphql";
import {apolloClient} from "src/vue-apollo";

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

