const compose = require('lodash/fp/compose');
const withCSS = require('@zeit/next-css');
const withImages = require('next-images');
const withSourceMaps = require('@zeit/next-source-maps');
const withBundleAnalyzerConfig = require('./next-config/bundle-analyzer-config');
const withRuntimeConfig = require('./next-config/runtime-config');

require('dotenv').config();

module.exports = compose(
  withCSS,
  withImages,
  withSourceMaps(),
  withRuntimeConfig,
  withBundleAnalyzerConfig,
);
