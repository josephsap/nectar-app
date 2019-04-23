const { decodeId } = require('@gloojs/apollo-server/id-conversion');

const resolverMap = {
  Query: {
    post(_, args, { dataSources }) {
      const { id } = decodeId(args.id, 'Post');
      return dataSources.exampleAPI.getPost(id);
    },
  },
};

module.exports = resolverMap;
