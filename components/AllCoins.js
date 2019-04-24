import React, { Fragment } from 'react';
import { Query } from 'react-apollo';
import { GET_COINS } from '../lib/apollo/queries';
import CoinItem from './CoinItem';


const AllCoins = () => {
  return (
    <Fragment>
      <ul>
        <Query query={GET_COINS}>
          {
            ({ loading, error, data }) => {
              if (loading) return <h4>Loading...</h4>;
              if (error) return <h4>error...</h4>;
              return (
                <Fragment>
                  {
                    data.coins.map(coin => (
                      <CoinItem key={coin.id} coin={coin} />
                    ))
                  }
                </Fragment>
              );
            }
          }
        </Query>
      </ul>
    </Fragment>
  );
};

export default AllCoins;
