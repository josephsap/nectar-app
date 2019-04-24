const resolverMap = {
  Coin: {
    async coinHistory(Coin, args, { dataSources }) {
      const { id } = Coin;
      return dataSources.coinAPI.getCoinHistory(id);
    },
  },
};

module.exports = resolverMap;
