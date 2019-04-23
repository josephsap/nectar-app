const pick = require('lodash/pick');

const getPublicRuntimeConfig = () => pick(
  process.env,
);

const runtimeConfig = (nextConfig = {}) => Object.assign({}, nextConfig, {
  publicRuntimeConfig: getPublicRuntimeConfig(),
});

module.exports = runtimeConfig;
