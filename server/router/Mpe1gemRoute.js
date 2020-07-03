const express = require('express');
const router = express.Router();

const bodyParser = require("body-parser");

// создаем парсер для данных
const urlencodedParser = bodyParser.urlencoded({extended: false});

const Mpe1gemController = require('../sequelize/controllers/Mpe1gemController');
router.post('/list',urlencodedParser,Mpe1gemController.mpelist)
router.post('/listr',urlencodedParser, (req,res)=>{
    console.log('sdsf');
    res.json({ status:"Saved"});
})

router.get('/listg',urlencodedParser,(req,res)=>{
    res.render('reg');
})
router.get('/',urlencodedParser,(req,res)=>{
    res.render('reg');
})
module.exports = router;