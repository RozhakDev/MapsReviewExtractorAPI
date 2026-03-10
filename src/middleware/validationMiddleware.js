const Joi = require('joi');
const { error } = require('../utils/response');

const reviewSchema = Joi.object({
  url: Joi.string().uri().required(),
  sort_type: Joi.string().valid('newest', 'most_relevant').default('newest'),
  pages: Joi.number().integer().min(1).default(1),
  clean: Joi.boolean().default(true),
});

function validateReviewRequest(req, res, next) {
  const { error: validationError, value } = reviewSchema.validate(req.body);

  if (validationError) {
    return error(res, validationError, 'Data permintaan tidak valid', 400);
  }

  req.body = value;
  next();
}

module.exports = {
  validateReviewRequest,
};