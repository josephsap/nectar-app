/* eslint-disable import/prefer-default-export */
import gql from 'graphql-tag';

export const GET_COINS = gql`
  query CoinsQuery {
    coins {
      name
      id
      symbol
      rank
    }
  }
`;

export const COIN_DETAIL_QUERY = gql`
  query CoinQuery {
    coin(id: $id) {
      id
      name
      symbol
      description
      coinHistory {
        open
        high
        low
      }
    }
  }
`;