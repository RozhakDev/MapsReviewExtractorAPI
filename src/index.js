const express = require('express');
const reviewRoutes = require('./routes/reviewRoutes');
const errorMiddleware = require('./middleware/errorMiddleware');

const app = express();
const port = 3000;

app.use(express.json());
app.use('/api', reviewRoutes);
app.use(errorMiddleware);

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});