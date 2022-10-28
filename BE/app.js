const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');
const app = express();
const session = require('express-session');
const cookieParser = require('cookie-parser');
const passport = require('passport');

dotenv.config();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser('COOKIE_SECRET'));
app.use(
  session({
    resave: false,
    saveUninitialized: false,
    secret: process.env.COOKIE,
    cookie: {
      httpOnly: true,
      secure: false,
    },
  })
);
app.use(passport.initialize());
app.use(passport.session());
const adminRoutes = require('./routes/adminRoutes');
const usersRoutes = require('./routes/usersRoutes');
const authRoutes = require('./routes/authRoutes');
const boardRoutes = require('./routes/boardRoutes');

app.use(cors());
// app.use('/home', subLineRoutes);
app.use('/user', usersRoutes);
app.use('/admin', adminRoutes);
app.use('/auth', authRoutes);
app.use('/page-notice', boardRoutes);

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
