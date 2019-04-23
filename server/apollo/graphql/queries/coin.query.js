// this is a resolver.
const resolverMap = {
  Query: {
    coins: (_, __, { dataSources }) => dataSources.coinAPI.getAllCoins(),
    coin: (_, { symbol }, { dataSources }) => {
      return dataSources.coinAPI.getCoinBySymbol({ symbol });
    },
  },
};

module.exports = resolverMap;
