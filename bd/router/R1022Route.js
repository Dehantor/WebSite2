const express = require('express');
const router = express.Router();

const R1022Controller = require('../sequelize/controllers/R1022Controller');

router.get('/datatest',R1022Controller.testdata);
router.get('/test',R1022Controller.test);
router.get('/list',R1022Controller.list);
router.get('/save',(req,res)=>{
    res.json({ status:"Saved"});
})

module.exports = router;