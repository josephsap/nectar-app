const { RESTDataSource } = require('apollo-datasource-rest');

class CoinAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = 'https://api.coinpaprika.com/v1/';
  }

  coinReducer(coin) {
    return {
      id: coin.id,
      name: coin.name,
      symbol: coin.symbol,
      rank: coin.rank,
      description: coin.description || null,
      proof_type: coin.proof_type || null,
      coinHistory: coin.coinHistory || []
    };
  }

  async getAllCoins() {
    const response = await this.get('coins');
    const top50Coins = response.slice(0, 50);
    return top50Coins.map(coin => this.coinReducer(coin));
  }

  async getCoinById({ coinId }) {
    const response = await this.get(`coins/${coinId}`);
    return this.coinReducer(response);
  }

  async getCoinHistory(coinId) {
    const response = await this.get(`coins/${coinId}/ohlcv/historical?start=2019-01-01&end=2019-01-30`);
    return response;
  }
}

module.exports = CoinAPI;
