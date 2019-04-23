const apiErrorHandler = require('../../lib/api-error-handler');

const resolverMap = {
  Mutation: {
    async createPost(_, args, { dataSources }) {
      try {
        const post = await dataSources.exampleAPI.createPost(args.title);
        return { errors: [], post };
      } catch (error) {
        return apiErrorHandler(error);
      }
    },
  },
};

module.exports = resolverMap;
