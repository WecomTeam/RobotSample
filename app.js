var createError = require('http-errors');
var express = require('express');
const fileUpload = require('express-fileupload');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var bodyParser = require('body-parser');

var app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));


app.use(fileUpload());

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(function(req, res, next) {
  const send = res.send;
  console.log(`\ncurrent request CGI is: ${req.url}`);
  console.log(`query: ${JSON.stringify(req.query)}`);
  console.log(`params: ${JSON.stringify(req.params)}`);
  console.log(`body: ${JSON.stringify(req.body)}`);
  res.send = function(data) {
    console.log(`return data: ${JSON.stringify(data)}\n`);
    send.call(this, data);
  }
  next();
})
app.use('/', indexRouter);
app.use('/api', usersRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
