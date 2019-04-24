import React, { Fragment } from 'react';
import { Query } from 'react-apollo';
import { GET_COINS } from '../lib/apollo/queries';
import CoinItem from './CoinItem';


const AllCoins = () => {
  return (
    <Fragment>
      <ul>
        <div>15267</div>
        <Query query={GET_COINS}>
          {
            ({ loading, error, data }) => {
              if (loading) return <h4>Loading...</h4>;
              if (error) return <h4>error...</h4>;
              console.log(data, 'data');
              return (
                <Fragment>
                  {
                    <div>hi</div>
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
