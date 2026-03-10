const { error } = require('../utils/response');

function errorMiddleware(err, req, res, next) {
  error(res, err);
}

module.exports = errorMiddleware;