const _get = require('lodash/get');

module.exports = async (error, customResponse = {}) => ({
  ...customResponse,
  ...{ errors: _get(error, 'errors', [error]) },
});
