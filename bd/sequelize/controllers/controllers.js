const R1022S = require('../models/');

module.exports = {
    create(req,res){
        console.log('contr');
        return R1022S.create({
                p00:'0100000000',
                p01:'Алтайский край',
                utv: '0',
                p02: "Алтайского края",
                sp: '0'
            })
            .then(r1022=>res(201).send(r1022))
            .catch((error=>res.status(400).send(error)))
    }
}