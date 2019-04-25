import React from 'react';
import { Query } from 'react-apollo';
import Highcharts from 'highcharts/highstock';
import HighchartsReact from 'highcharts-react-official';
import { COIN_DETAIL_QUERY } from '../lib/apollo/queries';


const CoinDetail = ({ coinId }) => {

  return (
    <Query query={COIN_DETAIL_QUERY} variables={{ coinId }}>
      {
        ({ loading, error, data }) => {
          if (loading) return <h4>Loading...</h4>;
          if (error) return <h4>error...</h4>;

          // format data into array of arrays lik highcharts wants.
          // also getting rid of object keys that aren't numbers
          const highchartsData = data.coin.coinHistory.map((obj) => {

            // format date to milliseconds. should this be a scalar?
            obj.time_open = Date.parse(obj.time_open);
            return Object.keys(obj).map((key) => {
              const objKey = parseFloat(obj[key]);
              if (!isNaN(objKey % 1) && objKey !== 'undefined') {
                return objKey;
              }
            });
          });

          return (
            <div>
              <h3>Single Coin Detail</h3>
              <p>{data.coin.name}</p>
              <p>{data.coin.description}</p>
              <HighchartsReact
                highcharts={Highcharts}
                constructorType={'stockChart'}
                options={{
                  title: {
                    text: `${data.coin.name} Price Chart`,
                  },
                  series: [
                    {
                      type: 'candlestick',
                      name: `${data.coin.name} Price Chart`,
                      data: highchartsData,
                      dataGrouping: {
                        units: [
                          [
                            'week',
                            [1],
                          ],
                          ['month', [1, 2, 3, 4]],
                        ],
                      },
                    },
                  ],
                }}
              />
            </div>
          );
        }
      }
    </Query>
  );
};

export default CoinDetail;
