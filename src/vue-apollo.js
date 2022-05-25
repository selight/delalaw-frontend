import Vue from 'vue'
import { ApolloClient, HttpLink, InMemoryCache } from '@apollo/client/core'
import { createApolloProvider } from '@vue/apollo-option'
import {setContext} from "@apollo/client/link/context";
import {WebSocketLink} from "@apollo/client/link/ws";
// Name of the localStorage item
const AUTH_TOKEN = 'apollo-token'

// Http endpoint
const httpEndpoint =  'http://localhost:4000/graphql'
const authLink = setContext(async (_,{headers})=>{
  const token=localStorage.getItem('apollo-token');
  return{
    ...headers ,
    Authorization:token || ''
  }
});
const httpLink = new HttpLink({
  // You should use an absolute URL here
  uri:httpEndpoint,
})

// Create the subscription websocket link
const wsLink = new WebSocketLink({
  uri: 'ws://localhost:4000/subscriptions',
  options: {
    reconnect: true,
  },
})
// Config
const defaultOptions = {
  httpEndpoint,
  wsEndpoint:null,
  tokenName: AUTH_TOKEN,
  persisting: false,
  websocketsOnly: false,
  ssr: false,
  cache: new InMemoryCache(),
  connectToDevTools: true,
  link: authLink
}
// Create the apollo client
export const apolloClient = new ApolloClient({
  ...defaultOptions
})
export const apolloProvider = createApolloProvider({
  defaultClient: apolloClient,
})
// Call this in the Vue app file
export function createProvider (options = {}) {
  // Create apollo client
  const { apolloClient, wsClient } = createApolloClient({
    ...defaultOptions,
    ...options,
  })
  apolloClient.wsClient = wsClient

  return apolloProvider
}

// Manually call this when user log in
export async function onLogin (apolloClient, token) {
  if (typeof localStorage !== 'undefined' && token) {
    localStorage.setItem(AUTH_TOKEN, token)
  }
  if (apolloClient.wsClient) restartWebsockets(apolloClient.wsClient)
  try {
    await apolloClient.resetStore()
  } catch (e) {
    // eslint-disable-next-line no-console
    console.log('%cError on cache reset (login)', 'color: orange;', e.message)
  }
}

// Manually call this when user log out
export async function onLogout (apolloClient) {
  if (typeof localStorage !== 'undefined') {
    localStorage.removeItem(AUTH_TOKEN)
  }
  if (apolloClient.wsClient) restartWebsockets(apolloClient.wsClient)
  try {
    await apolloClient.resetStore()
  } catch (e) {
    // eslint-disable-next-line no-console
    console.log('%cError on cache reset (logout)', 'color: orange;', e.message)
  }
}
