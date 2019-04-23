const resolverMap = {
  Coin: {
    async coinHistory(Coin, args, { dataSources }) {
      const { id } = Coin;
      return dataSources.coinAPI.getCoinHistory(id);
    },
  },
};

module.exports = resolverMap;

// const resolverMap = {
//   Post: {
//     async user(post, args, { dataSources }) {
//       return dataSources.exampleAPI.getUser(post.userId);
//     }
//   }
// };

// module.exports = resolverMap;

