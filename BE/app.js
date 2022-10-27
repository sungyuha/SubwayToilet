const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');
const app = express();

dotenv.config();

// const subLineRoutes = require('./routes/subLineRoutes');
const usersRoutes = require('./routes/usersRoutes');
const adminRoutes = require('./routes/adminRoutes');

app.use(bodyParser.json());
app.use(cors());
// app.use('/home', subLineRoutes);
app.use('/user', usersRoutes);
app.use('/admin', adminRoutes);

// 오류 처리 미들웨어
app.use((error, req, res, next) => {
  if (res.headerSent) {
    return next(error);
  }
  res.status(error.code || 500);
  res.json({ message: error.message || '에러 발생!' });
});
mongoose
  .connect(process.env.DB)
  .then(app.listen(process.env.PORT), console.log('mongoDB server connected'))
  .catch((err) => {
    console.log(err);
  });
