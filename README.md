# MapsReviewExtractorAPI

REST API sederhana berbasis **Node.js + Express** untuk mengambil ulasan dari **Google Maps** menggunakan library `google-maps-review-scraper`.
API ini mengembalikan data ulasan dalam format JSON yang lebih sederhana dan mudah digunakan.

## Features

* Validasi request menggunakan Joi
* Scrape ulasan Google Maps
* REST API berbasis Express
* Format response konsisten
* Struktur project modular (controller, service, middleware)

## Installation

1. Clone repository:
   
   ```bash
   git clone https://github.com/RozhakDev/MapsReviewExtractorAPI.git
   cd MapsReviewExtractorAPI
   ```

2. Install dependencies:
   
   ```bash
   npm install
   ```

3. Jalankan server:
   
   ```bash
   node src/index.js
   ```

4. Server akan berjalan di:
   
   ```
   http://localhost:3000
   ```

Entry point aplikasi ada di `src/index.js`. 

## API Endpoint

### Get Google Maps Reviews

**Endpoint**

```
POST /api/reviews
```

**Request Body**

```json
{
  "url": "https://maps.google.com/...",
  "sort_type": "newest",
  "pages": 1,
  "clean": true
}
```

Parameter:

| Field     | Type    | Required | Description                               |
| --------- | ------- | -------- | ----------------------------------------- |
| url       | string  | yes      | URL tempat Google Maps                    |
| sort_type | string  | no       | Urutan review (`newest`, `most_relevant`) |
| pages     | number  | no       | Jumlah halaman review                     |
| clean     | boolean | no       | Output hasil yang lebih bersih            |

Validasi request dilakukan menggunakan **Joi middleware**. 

## Example Response

```json
{
  "status": "sukses",
  "message": "Berhasil mengambil ulasan",
  "data": [
    {
      "username": "Sutarso",
      "rating": 5,
      "isi_ulasan": null,
      "waktu": "10/3/2026, 09.26.52"
    }
  ]
}
```

Format response distandarkan menggunakan helper response utility. 

## Project Structure

```
src
├── controllers
│   └── reviewController.js   # menangani request dan response dari endpoint review
├── index.js                  # entry point aplikasi Express
├── middleware
│   ├── errorMiddleware.js    # middleware untuk menangani error global
│   └── validationMiddleware.js # middleware validasi request menggunakan Joi
├── routes
│   └── reviewRoutes.js       # definisi endpoint API untuk review
├── services
│   └── reviewService.js      # logika scraping Google Maps menggunakan library
└── utils
    └── response.js           # helper untuk format response JSON yang konsisten
```

Logika scraping berada pada service layer yang menggunakan library `google-maps-review-scraper`. 

## Dependencies

* Express
* Joi
* google-maps-review-scraper

## License

MIT License