import gql from 'graphql-tag'
export const REGISTER_USER= gql `mutation REGISTER_USER(
    $email: String,
    $phonenumber:String!
    $username: String!,
    $password: String!,
    $firstName: String!,
    $lastName: String!,
     $phoneVerified:Boolean
  ) {
    registerUser(
    newUser: {
      phonenumber:$phonenumber,
      email: $email,
      username: $username,
      password: $password,
      lastName: $lastName,
      firstName: $firstName,
      phoneVerified: $phoneVerified,
    }
  ) {
    token
    user {
      id
      email
      username
      lastName
      firstName
    }
  }
}`;
//POSTS
export const CREATE_NEW_POST = gql `
mutation NEW_POST(
    $location: String!,
    $description: String!,
    $NoOfRooms:String!,
    $price:String!,
    $featuredImage: [ImageInput],
  ) {
    createPost(newPost:{
      location: $location,
      content: $description,
      size:$NoOfRooms,
      price:$price,
      featuredImage: $featuredImage
    }){
      id
      location
      content
      size
      price,
      createdAt
      featuredImage{
        image
      }
    }
}
`;
//UPLOAD IMAGE
export const UPLOAD_IMAGE=gql`mutation UPLOAD_IMAGE($file: Upload!) {
  imageUploader(file: $file)
}`;
//Handyman new post
export const  HANDYMAN_NEW_POST= gql `
mutation NEW_POST(
    $location: String!,
    $description: String,
    $workExperience:String,
    $rate:String!,
    $services: [String!],
  ) {
    createHandymanPost(newPost:{
      location: $location,
      description: $description,
      workExperience:$workExperience,
      rate:$rate,
      services: $services
    }){
      id
      location
      description
      rate
      services,
      createdAt
    }
}
`;
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
