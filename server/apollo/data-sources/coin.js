const { RESTDataSource } = require('apollo-datasource-rest');

class CoinAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = 'https://sandbox-api.coinmarketcap.com/v1/cryptocurrency/';
  }

  coinReducer(coin) {
    return {
      id: coin.id,
      name: coin.name,
      symbol: coin.symbol,
      slug: coin.slug,
      quote: {
        price: coin.quote.USD.price,
        market_cap: coin.quote.USD.market_cap,
      }
    };
  }

  async getAllCoins() {
    const response = await this.get('listings/latest', { CMC_PRO_API_KEY: '0a00b2a6-6f32-4e59-ae20-aae953d1a917' });
    return response.data.map(coin => this.coinReducer(coin));
  }

  async getCoinBySymbol({ symbol }) {
    const response = await this.get(`quotes/latest?symbol=${symbol}`, { CMC_PRO_API_KEY: '0a00b2a6-6f32-4e59-ae20-aae953d1a917' });
    return this.coinReducer(response.data[`${symbol}`]);
  }
}

module.exports = CoinAPI;

// https://sandbox-api.coinmarketcap.com/v1/cryptocurrency/quotes/latest
