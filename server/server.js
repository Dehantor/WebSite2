// подключение express
const express = require("express");
var createError = require('http-errors');
var path = require('path');
const bodyParser = require('body-parser');
// создаем объект приложения
const app = express();
//использование json данных
//app.use(express.json());
//установка порта сервера
app.set('port',process.env.POST||3000);
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');
//Parser
//app.use(cookieParser());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

// view engine setup
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

//предоставление прав доступа при запросе от клиента
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
});

// устанавливаем роутер для работы с БД R1022
const R1022Routers = require('./router/R1022Route');
app.use('/r1022',R1022Routers);
const Mpe1gemRouters = require('./router/Mpe1gemRoute');
app.use('/',Mpe1gemRouters);
//тестовая страница
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

// начинаем прослушивать подключения на 3000 порту
app.listen(3000);
