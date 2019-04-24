import React, { Component, Fragment } from 'react';
import CoinDetail from '../components/CoinDetail';


class Coin extends Component {

  static async getInitialProps({ query }) {
    return {
      id: query.slug,
    };
  }

  render() {
    const { id } = this.props;
    return (
      <CoinDetail coinId={id} />
    );
  }
}

export default Coin;
