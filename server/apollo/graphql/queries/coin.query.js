// this is a resolver.
const resolverMap = {
  Query: {
    coins: (_, __, { dataSources }) => dataSources.coinAPI.getAllCoins(),
    coin: (_, { coinId }, { dataSources }) => dataSources.coinAPI.getCoinById({ coinId }),
  },

};

module.exports = resolverMap;
