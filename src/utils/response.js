function success(res, data, message = 'Permintaan berhasil diproses') {
  res.status(200).json({
    status: 'sukses',
    message,
    data,
  });
}

function error(res, error, message = 'Terjadi kesalahan pada server', statusCode = 500) {
  console.error(error);
  res.status(statusCode).json({
    status: 'gagal',
    message,
    error: {
      message: error.message,
    },
  });
}

module.exports = {
  success,
  error,
};