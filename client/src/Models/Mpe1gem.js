export default Ext.define('mpe1gem.model', {
    extend: 'Ext.data.Model',
    fields: [
        {name: 'id', type: 'integer'},
        {name: 'r1022', type: 'string'},
        {name: 'npp', type: 'integer'},
        {name: 'naim_org', type: 'string'},
        {name: 'adr_fact', type: 'string'},
        {name: 'inn', type: 'string'},
       /* {name: 'plazma_max', type: 'integer'},
        {name: 'plazma_cena', type: 'integer'},
        {name: 'ern_max', type: 'integer'},
        {name: 'ern_cena', type: 'integer'},
        {name: 'immg_cena', type: 'integer'},
        {name: 'immg_max', type: 'integer'},
        {name: 'alb_cena', type: 'integer'},
        {name: 'alb_max', type: 'integer'},*/
    ],

})