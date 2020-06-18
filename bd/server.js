// подключение express
const express = require("express");
// создаем объект приложения
const app = express();
app.use(express.json());
app.set('port',process.env.POST||3000);
/*const bodyParser = require("body-parser");
const urlencodedParser = bodyParser.urlencoded({extended: false});*/
// определяем обработчик для маршрута "/"
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
});

app.use("/test", function(req, res){

    // отправляем ответ
    res.send("<h2>Ntcn Express!</h2>");
});
const R1022Routers = require('./router/R1022Route');
app.use('/r1022',R1022Routers);
/*app.use(function (err,req,res,next) {
    res.locals.message = err.message;
    res.locals.error = req.app.get('env')==='development'? err:{};
    res.status(err.status || 500);

});*/

app.use("/", function(req, res){
    // отправляем ответ
    res.send("<h2>Привет Express!</h2>");
});
// начинаем прослушивать подключения на 3000 порту
app.listen(app.get('port'),()=>{
    console.log("Start");
});
