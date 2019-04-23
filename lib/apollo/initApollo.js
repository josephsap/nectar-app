import { ApolloClient } from 'apollo-client';
import { ApolloLink } from 'apollo-link';
import { InMemoryCache } from 'apollo-cache-inmemory';
import createFetchLink from './createFetchLink';
// import createRequestIdLink from './createRequestIdLink';
// import createStateLink from './createStateLink';
// import { HttpLink } from 'apollo-link-http';


let apolloClient = null;

function create(initialState, { ctx }) {
  // const { publicRuntimeConfig } = getConfig();
  // const { API_APP_KEY, NODE_ENV } = publicRuntimeConfig;

  const cache = new InMemoryCache();

  // const authLink = createAuthLink(API_APP_KEY, getSession);
  const fetchLink = createFetchLink(ctx);
  // const requestIdLink = createRequestIdLink();
  // const stateLink = createStateLink(cache);
  // const logLink = createLogLink(NODE_ENV, logger, ['X-Client-Request-Id']);


  return new ApolloClient({
    ssrMode: !process.browser, // Disables forceFetch on the server (so queries are only run once)
    // link: new HttpLink({
    //   uri: 'http://localhost:4000/graphql',
    // }),
    link: ApolloLink.from([
      fetchLink,
    ]),
    cache: cache.restore(initialState || {}),
  });
}

export default function ({ initialState = {}, ctx } = {}) {
  // const cookies = getCookies(ctx);
  // const getSession = () => cookies.get(SESSION);

  // Make sure to create a new client for every server-side request so that data
  // isn't shared between connections (which would be bad)
  if (!process.browser) {
    return create(initialState, { ctx });
  }

  // Reuse client on the client-side
  if (!apolloClient) {
    apolloClient = create(initialState, { ctx });
  }

  return apolloClient;
}
