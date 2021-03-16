import gql from "graphql-tag";
export const AUTHENTICATED_USER=gql `
query AUTH_USER {
  authUser{
    id
    lastName
    username
    firstName
  }
}`;
export const AUTHENTICATE_USER=gql`query LOGIN_USER (
    $username: String!,
    $password: String!
  ) {
  loginUser(
      username: $username,
      password: $password
    ) {
    token
    user {
      id
      email
      firstName
      lastName
      roommateInfo{
       age
        gender
      }
    }
  }
}`;
//Posts
export const GET_POSTS_WITH_PAGINATION = gql `
query GET_POSTS_BY_LIMIT_AND_PAGE(
    $page: Int,
    $limit: Int,

  ){
  getPostsWithPagination(
    page: $page,
    limit: $limit,

  ){
    posts{
      id
      location
      content
      size
      price
      featuredImage{
          image
         size
          }
      author{
        id
        username
        firstName
        lastName
      }
    }
    paginator{
      next
      prev
      slNo
      perPage
      totalPosts
      totalPages
      currentPage
      hasPrevPage
      hasNextPage
    }
  }
}
`;
