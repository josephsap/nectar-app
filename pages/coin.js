import React, { Component } from 'react';
import CoinDetail from '../components/CoinDetail';


class Coin extends Component {

  static async getInitialProps({ query }) {
    return {
      id: query.id,
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
