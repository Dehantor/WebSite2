
const Sequelize = require("sequelize");
const sequelize = new Sequelize("KPIS", "postgres", "123123", {
    dialect: "postgres"
});
/*
sequelize.createSchema('minzdrav').then(() => {
    forse: true
});
*/
const mpe1gem = sequelize.define("mpe1gem", {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
    },
    r1022:{
        type:Sequelize.STRING,
        allowNull:false,
        references: {
            model: 'r1022s',
            key: 'p00',
            onDelete: 'CASCADE',
            onUpdate: 'CASCADE',
        }
        },
    npp:{
        type:Sequelize.INTEGER,
        allowNull:false
    },
    naim_org:{
        type:Sequelize.STRING,
        allowNull:false
    },
    adr_fact:{
        type:Sequelize.STRING,
        allowNull:false
    },
    inn:{
        type:Sequelize.STRING,
        allowNull:false
    },
    plazma_max:{
        type:Sequelize.BIGINT,
        allowNull:false
    },
    plazma_cena:{
        type:Sequelize.BIGINT,
        allowNull:false
    },
    erm_max:{
        type:Sequelize.BIGINT,
        allowNull:false
    },
    erm_cena:{
        type:Sequelize.BIGINT,
        allowNull:false
    },
    immg_max:{
        type:Sequelize.BIGINT,
        allowNull:false
    },
    immg_cena:{
        type:Sequelize.BIGINT,
        allowNull:false
    },
    alb_max:{
        type:Sequelize.BIGINT,
        allowNull:false
    },
    alb_cena:{
        type:Sequelize.BIGINT,
        allowNull:false
    },
  },

);

const r1022 = sequelize.define("r1022", {

        p00:{
            type:Sequelize.STRING,
            primaryKey: true,
            allowNull:false
        },
        p01:{
            type:Sequelize.STRING,
            allowNull:false
        },
        p02:{
            type:Sequelize.STRING,
            allowNull:false
        },
        utv:{
            type:Sequelize.STRING,
            allowNull:false
        },
        sp:{
            type:Sequelize.STRING,
            allowNull:false
        },
    }
);

/*mpe1gem.belongsTo(r1022, {
    onDelete: 'RESTRICT',
    onUpdate: 'RESTRICT',
});*/
//r1022.hasMany(mpe1gem);


sequelize.sync({force: true}).then(result=>{

})
    .catch(err=> console.log(err));