'use strict'
//модель базы mpe1gem
module.exports = (sequelize,Datatypes)=>{
return sequelize.define("mpe1gem", {
           id: {
               type: Datatypes.INTEGER,
               autoIncrement: true,
               primaryKey: true,
               allowNull: false
           },
           r1022:{
               type:Datatypes.STRING,
               allowNull:false,
               references: {
                   model: 'r1022s',
                   key: 'p00',
                   onDelete: 'RESTRICT',
                   onUpdate: 'RESTRICT',
               }
               },
           npp:{
               type:Datatypes.INTEGER,
               allowNull:false
           },
           naim_org:{
               type:Datatypes.STRING,
               allowNull:false
           },
           adr_fact:{
               type:Datatypes.STRING,
               allowNull:false
           },
           inn:{
               type:Datatypes.STRING,
               allowNull:false
           },
           plazma_max:{
               type:Datatypes.BIGINT,
               allowNull:false
           },
           plazma_cena:{
               type:Datatypes.BIGINT,
               allowNull:false
           },
           erm_max:{
               type:Datatypes.BIGINT,
               allowNull:false
           },
           erm_cena:{
               type:Datatypes.BIGINT,
               allowNull:false
           },
           immg_max:{
               type:Datatypes.BIGINT,
               allowNull:false
           },
           immg_cena:{
               type:Datatypes.BIGINT,
               allowNull:false
           },
           alb_max:{
               type:Datatypes.BIGINT,
               allowNull:false
           },
           alb_cena:{
               type:Datatypes.BIGINT,
               allowNull:false
           },
         },

       );
}