import React from 'react';
import Link from 'next/link';
import { withRouter } from 'next/router';
// import { Button } from 'semantic-ui-react';
// import { Query } from 'react-apollo';
// import { GET_COINS } from '../lib/apollo/queries';

const CoinItem = ({ coin }) => {
  return (
    <li>
      <h3>{coin.name} ({coin.symbol})</h3>
      <p>Rank: {coin.rank}</p>
      <Link href={`/coin/?id=${coin.id}`} as={`/coin/${coin.id}`}>
        <a>See Coin Details</a>
      </Link>
    </li>
  );
};

export default withRouter(CoinItem);
