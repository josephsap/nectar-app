const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer'); /* eslint-disable-line import/no-extraneous-dependencies */

const { ANALYZE, ANALYZE_SERVER } = process.env;

const bundleAnalyzerConfig = (nextConfig = {}) => Object.assign({}, nextConfig, {
  webpack(config, options) {
    const { isServer } = options;

    if (ANALYZE) {
      const serverStatsFileName = '../../bundle-analyzer/server-stats.json';
      const serverReportFileName = '../../bundle-analyzer/server-stats.html';
      const clientStatsFileName = '../bundle-analyzer/client-stats.json';
      const clientReportFileName = '../bundle-analyzer/client-stats.html';

      config.plugins.push(new BundleAnalyzerPlugin({
        analyzerMode: 'static',
        generateStatsFile: true,
        openAnalyzer: false,
        statsFilename: isServer ? serverStatsFileName : clientStatsFileName,
        reportFilename: isServer ? serverReportFileName : clientReportFileName,
      }));
    } else if (ANALYZE_SERVER) {
      config.plugins.push(new BundleAnalyzerPlugin({
        analyzerMode: 'server',
        analyzerPort: isServer ? 8888 : 8889,
        openAnalyzer: true,
      }));
    }

    if (typeof nextConfig.webpack === 'function') {
      return nextConfig.webpack(config, options);
    }

    return config;
  },
});

module.exports = bundleAnalyzerConfig;
