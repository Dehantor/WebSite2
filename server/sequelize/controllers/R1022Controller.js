const controllers={};
const db= require('../models/');

//тестовый запрос
controllers.testdata = async (req,res)=>{
        const response =await db.sequelize.sync().then(function () {
        const data =db.sequelize.models.r1022.findAll();
        return data;
    })
            .catch(error=>{
                return error;
            });
    res.json(response);
};
//заполнение тестовыми данными
controllers.test=(req,res)=>{
    db.sequelize.sync({force: true}).then(result=>{
    db.sequelize.models.r1022.create({
        p00:'0100000000',
        p01:'Алтайский край',
        utv: '0',
        p02: "Алтайского края",
        sp: '0'
    });
    db.sequelize.models.r1022.create({
        p00:'0300000000',
        p01:'Краснодарский край',
        utv: '0',
        p02: "Краснодарского края",
        sp: '0'
    });
   db.sequelize.models.r1022.create({
        p00:'0400000000',
        p01:'Красноярский край',
        utv: '0',
        p02: "Красноярского края",
        sp: '0'
    });
    db.sequelize.models.r1022.create({
        p00:'0500000000',
        p01:'Приморский край',
        utv: '0',
        p02: "Приморского края",
        sp: '0'
    });
    db.sequelize.models.r1022.create({
        p00:'0700000000',
        p01:'Ставропольский край',
        utv: '0',
        p02: "Ставропольского края",
        sp: '0'
    });
    db.sequelize.models.r1022.create({
        p00:'0800000000',
        p01:'Хабаровский край',
        utv: '0',
        p02: "Хабаровского края",
        sp: '0'
    });
    db.sequelize.models.r1022.create({
        p00:'1000000000',
        p01:'Амурская область',
        utv: '0',
        p02: "Амурской области",
        sp: '0'
    });
     db.sequelize.models.mpe1gem.create({
        r1022:'0100000000',
        npp:'1',
        naim_org:'ЭнергоСбыт',
        adr_fact:'40 лет Победы 24',
        inn:'345',
        plazma_max:'235',
        plazma_cena:'34634',
        erm_max:'235',
        erm_cena:'234',
        immg_max:'2345',
        immg_cena:'234',
        alb_max:'4357',
        alb_cena:'547',
    });
    });
    console.log("данные залиты");
    res.json({success:'Ura'});
}
//получение данных с бд
controllers.list=async (req,res)=>{

        const data = await db.sequelize.models.r1022.findAll()
            .then(function (data) {
                return data;
        })
        .catch(error=>{
            return error;
        });
        res.json({success:function(response, request) {
                // do whatever you need to with the generated HTML
                console.log(response);
            },data:data})
    console.log(data);
}

module.exports = controllers;