const reviewService = require('../services/reviewService');
const { success, error } = require('../utils/response');

async function getReviews(req, res, next) {
  const { url, sort_type, pages, clean } = req.body;

  try {
    const reviews = await reviewService.getReviews(url, sort_type, pages, clean);
    success(res, reviews, 'Berhasil mengambil ulasan');
  } catch (err) {
    error(res, err, 'Gagal mengambil ulasan');
  }
}

module.exports = {
  getReviews
};