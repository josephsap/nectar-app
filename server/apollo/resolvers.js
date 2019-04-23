const glob = require('glob');
const path = require('path');
const _merge = require('lodash/merge');

const resolverMap = {
  Query: {},
  Mutation: {},
};

const resolverFiles = glob.sync(path.join(__dirname, 'graphql/**/*.+(enum|field|input|mutation|scalar|query).js'));
resolverFiles.forEach((filePath) => {
  const resolvers = require(filePath); // eslint-disable-line global-require, import/no-dynamic-require
  _merge(resolverMap, resolvers);
});

module.exports = resolverMap;
