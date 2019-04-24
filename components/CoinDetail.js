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
                    text: 'My chart',
                  },
                  series: [
                    {
                      data: highchartsData,
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

// candlestick chart
// data needs to look like this
// [
//   [
//     1493127000000,
//     143.91,
//     144.9,
//     143.87,
//     144.53
//   ],
//   [
//     1493213400000,
//     144.47, open
//     144.6, high
//     143.38, low
//     143.68 close
//   ]
// ]
// https://jsfiddle.net/gh/get/library/pure/highcharts/highcharts/tree/master/samples/stock/demo/candlestick/

// https://api.highcharts.com/highstock/plotOptions.candlestick