import { split } from 'apollo-link';
// import { BatchHttpLink } from 'apollo-link-batch-http';
import { HttpLink } from 'apollo-link-http';
import fetch from 'node-fetch';

export default function createFetchLink(ctx) {
  const baseUrl = ctx && ctx.req ? 'http://localhost:3000' : '';
  const options = {
    uri: `${baseUrl}/graphql`, // Server URI (must be absolute)
    credentials: 'same-origin', // Additional fetch() options like `credentials` or `headers`
    fetch: !process.browser ? fetch : undefined, // Pass custom fetcher only when we're in Node since fetch isn't supported in Node
  };

  return split(
    operation => operation.getContext().batch === false, // The condition to test for
    new HttpLink(options), // Use this link if condition is true
    // new BatchHttpLink(options), // Use this link if condition is false
  );
}
