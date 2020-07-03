'use strict'
//модель базы r1022
module.exports = (sequelize,Datatypes)=>{

    return sequelize.define("r1022", {
            p00:{
                type:Datatypes.STRING,
                primaryKey: true,
                allowNull:false
            },
            p01:{
                type:Datatypes.STRING,
                allowNull:false
            },
            p02:{
                type:Datatypes.STRING,
                allowNull:false
            },
            utv:{
                type:Datatypes.STRING,
                allowNull:false
            },
            sp:{
                type:Datatypes.STRING,
                allowNull:false
            },

        }
    );
}