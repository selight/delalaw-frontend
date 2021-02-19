import gql from 'graphql-tag'
export const REGISTER_USER= gql `mutation REGISTER_USER(
    $email: String!,
    $username: String!,
    $password: String!,
    $firstName: String!,
    $lastName: String!,
  ) {
    registerUser(
    newUser: {
      email: $email,
      username: $username,
      password: $password,
      lastName: $lastName,
      firstName: $firstName
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
