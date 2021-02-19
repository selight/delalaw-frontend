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
