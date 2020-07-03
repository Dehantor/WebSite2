'use strict';
const fs = require('fs');
const path = require('path');
const Sequelize = require('sequelize');
const basename = path.basename(__filename);
const config = require('../config');
const db= {};
//настраиваем соединение
const sequelize = new Sequelize(config.db.database, config.db.username,
        config.db.password,{
    dialect:'postgres',
    host:config.db.host
    } );
//импортируем модели
fs
    .readdirSync(__dirname)
    .filter(file=>{
        return (file.indexOf('.')!==0) && (file !== basename) && (file.slice(-3)==='.js');
    })
    .forEach(file=>{
        const model = sequelize['import'](path.join(__dirname,file));
});
//настраиваем ассоциации в моделях
Object.keys(db).forEach(modelName=>{
    if(db[modelName].associate){
        db[modelName].associate(db);
    }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;
//устанавливаем соединение
sequelize
    .authenticate()
    .then(function(err) {
        console.log('Connection has been established successfully.');
    }, function (err) {
        console.log('Unable to connect to the database:', err);
    });

module.exports = db;