import gql from 'graphql-tag'
export const LOGIN_WITH_GOOGLE = gql `
  mutation loginWithGoogle($code:String!){
    signInWithGoogle(code:$code){
      token
      user{
        id
        email
        firstName
        lastName
      }
    }
  }
`;
export const REGISTER_USER= gql `mutation REGISTER_USER(
  $email: String!,
  $password: String!,
  $firstName: String!,
  $lastName: String!,
  $phoneNumber:String!
) {
  registerUser(
  newUser: {
    email: $email,
    password: $password,
    lastName: $lastName,
    firstName: $firstName,
    phoneNumber:$phoneNumber
  }
) {
    token
    user {
      id
      email
      lastName
      firstName
    }
  }
}`;
export const UPDATE_USER = gql `mutation UPDATE_USER_BY_ID(
  $id: ID!,
  $profilePicture:String,
  $age:String,
  $firstName: String,
  $lastName: String,
  $gender: String,
  $phonenumber: String,
  $roommateInfo:RoommateInput) {
  updateUser(
    id: $id
    updatedUser: {
      firstName:$firstName,
      lastName:$lastName,
      age:$age,
      gender: $gender,
      phoneNumber: $phonenumber,
      roommateInfo:$roommateInfo
    }
  ) {
    id
    firstName
    email
    lastName
    age
    gender
    phoneNumber
    roommateInfo{
      age
      gender
      nationality
    }
  }
}
`;
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
  singleUploadStream(file: $file)
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

