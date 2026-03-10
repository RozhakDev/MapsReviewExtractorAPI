async function getReviews(url, sort_type, pages, clean) {
  const { scraper } = await import("google-maps-review-scraper");
  const reviews = await scraper(url, {
    sort_type: sort_type,
    pages: pages,
    clean: clean,
  });

  return reviews.map(review => {
    return {
      username: review.author.name,
      rating: review.review.rating,
      isi_ulasan: review.review.text,
      waktu: new Date(review.time.published / 1000).toLocaleString('id-ID')
    };
  });
}

module.exports = {
  getReviews,
};