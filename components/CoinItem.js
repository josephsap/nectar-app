import React from 'react';
import Link from 'next/link';

const CoinItem = ({ coin }) => {
  return (
    <li>
      <h3>
        {coin.name} ({coin.symbol})
      </h3>
      <p>Rank: {coin.rank}</p>
      <Link as={`/coin/${coin.id}`}  href={`/coin?id=${coin.id}`}>
        <a>See Coin Details</a>
      </Link>
    </li>
  );
};

export default CoinItem;
