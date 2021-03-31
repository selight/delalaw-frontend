import gql from "graphql-tag";
export const AUTHENTICATED_USER=gql `
query AUTH_USER {
  authUser{
    id
    lastName
    username
    firstName
    email
    profilePicture
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
      profilePicture
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
export const GET_MY_POSTS_WITH_PAGINATION= gql `
 query GET_ALL_MY_POSTS_WITH_PAGINATION{
  getMyPostsWithPagination(page: 1, limit: 10){
    posts{
      id
      location
      content
      size
      featuredImage{
          image
         size
          }
      price
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
export const GET_POST_BY_ID =gql `query POST_BY_ID($id: ID!) {
  getPostById(id: $id) {
    location
    content
    size
    price
    createdAt
    updatedAt
    featuredImage{
    image
    size
    }
    author {
      id
      username
      firstName
    }
  }
}`;
//handyman
export const HANDYMAN_GET_ALL_POSTS_WITH_PAGINATION = gql `
query GET_POSTS_BY_LIMIT_AND_PAGE(
    $page: Int,
    $limit: Int,

  ){
  getHandymanPostsWithPagination(
    page: $page,
    limit: $limit,

  ){
    posts{
      id
      location
         description
              rate
              workExperience
              services
      author{
        id
        username
        firstName
        lastName
        profilePicture
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
export const HANDYMAN_GET_MY_HANDYMAN_POSTS_WITH_PAGINATION = gql `
query GET_ALL_MY_POSTS_WITH_PAGINATION{
  getMyHandymanPostsWithPagination(page: 1, limit: 10){
    posts{
      id
         description
              rate
              workExperience
              services
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
export const GET_HANDYMAN_POST_BY_ID =gql `query HANDYMAN_POST_BY_ID($id: ID!) {
  getHandymanPostById(id: $id) {
    location
    description
    rate
    workExperience
    services
    createdAt
    updatedAt
    author {
      id
      username
      firstName
    }
  }
}`;
