import React, { Component } from 'react';
import {Column, Panel, Container, Grid, SearchField, Toolbar, DatePickerField,RendererCell , Button} from '@extjs/ext-react';
import axios from 'axios';
import {medium, small} from "../responsiveFormulas";
import modelR1022 from '../Models/R1022Model';
import modelMpe1gem from '../Models/Mpe1gem';

Ext.require([
    'Ext.grid.plugin.Editable',
    'Ext.grid.plugin.CellEditing',
    'Ext.data.validator.Presence',
    'Ext.data.validator.Number',
    'Ext.data.validator.Date',
    'Ext.Toast',
    'Ext.grid.plugin.Clipboard'
]);

var datar;
// Класс для БД r1022
var R1022 = function(id, name,xname) {
    this.p00 = id;
    this.p01 = name;
    this.p02 = xname;
};
// для связи со store
var data = [];
var dat='';
export default class Contacts extends Component {
    constructor(props){
        super(props);
        this.state={
            r1022List:[],//для запроса данных
            message: null,//для отображения выбора субъекта
            mes_id:null,
            selectable: {// для свойства выделения региона
                cells: true
            },
        }

    }

    componentDidMount() {


    }
    //подготовка хранилища
    store_R1022 = Ext.create('Ext.data.Store', {
        modelR1022,
        autoLoad: true,
        rootVisible: false,
        proxy: {
            type: 'ajax',
            url: 'http://94.73.212.60:3000/r1022/list.json',
            reader: {
                type: 'json',
                rootProperty: 'data'
            },
        }
    });

    store_Mpe1gem = Ext.create('Ext.data.Store', {
        modelMpe1gem,
        /*//autoLoad: true,*/
        rootVisible: false,
        paramsAsJson:true,
        proxy: {
            type: 'ajax',
            url: 'http://94.73.212.60:3000/list',
            reader: {
                type: 'json',
                rootProperty: 'data'
            },
            actionMethods: {
                create : 'POST',
                read   : 'POST',
                update : 'POST',
                destroy: 'POST'
            }
    }});
    render() {
        const { selectable } = this.state;
        return (

            <Container title="Планирование поставок"  shadow layout="hbox"  padding="30">
                {/*заполнение регионов*/}
                <Grid store={this.store_R1022}
                      plugins={{
                          selectionreplicator: true,
                          clipboard: true
                      }}
                      shadow
                      width ={280}
                      dataIndex="grid"
                      onSelectionChange={this.onSelectionChange}
                      selectable={{
                          ...selectable
                      }}
                      platformConfig={{
                          desktop: {
                              plugins: {
                                  gridcellediting: true
                              }
                          },
                          '!desktop': {
                              plugins: {
                                  grideditable: true
                              }
                          }
                      }}
                >
                    <Column
                        text="Регионы"
                        dataIndex="p02"
                        flex={3}
                        resizable
                        editable
                        responsiveConfig={{
                            [small]: {
                                hidden: true
                            },
                            [medium]: {
                                hidden: false
                            }
                        }}
                    />

                </Grid>

                <Container shadow layout="vbox"
                    defaults={{  margin: 10 }}
                >
                    <Panel  shadow layout="hbox" width={900} height={100} split={true}>
                        <h1>Таблица о возможностях организаций,
                            находящихся в ведении или <br></br>сфере деятельности {this.state.message ==null? '____' : this.state.message} (субъекта РФ или ФОИВ)</h1>

                    </Panel>
                    <Panel  shadow layout="hbox" width={900} height={300} split={true}>
                    <Grid store = {this.store_Mpe1gem}

                          dataIndex="grid2"
                    >
{/*                        <Column
                            text="Регионы"
                            dataIndex="naim_org"
                            resizable
                            editable
                            responsiveConfig={{
                                [small]: {
                                    hidden: true
                                },
                                [medium]: {
                                    hidden: false
                                }
                            }}
                        />*/}
                        <Column
                            resizable
                            text="Организация исполнитель"

                       >
                        <Column
                            dataIndex="naim_org"
                        text = '<br>Наимено<br>вание<br><br>'
                    />
                        <Column
                            dataIndex="adr_fact"
                            text = "Место<br>нахождение"
                        />
                        <Column
                            dataIndex="inn"
                            text = "ИНН"
                        />
                        </Column>
                       <Column
                            text="Плазма свежезамор."
                            resizable
                        >
                            <Column
                                dataIndex="plazma_max"
                                text = 'Макс.<br>об.<br>(тыс.<br>литров)<br>'
                            />
                            <Column
                                dataIndex="plazma_cena"
                                text = "Цена(тыс. <br>руб. за один <br>литр"
                            />
                        </Column>
                        <Column
                            text="Эритроцитарная масса"
                        >
                            <Column
                                dataIndex="erm_max"
                                text = 'Макс.<br>об.<br>(тыс.<br>литров)<br>'
                            />
                            <Column
                                dataIndex="erm_cena"
                                text = "Цена(тыс. <br>руб. за один <br>литр"
                            />
                        </Column>
                        <Column
                            text="Иммуноглобулин человека"
                        >
                            <Column
                                dataIndex="immg_max"
                                text = 'Макс.<br>об.<br>(тыс.<br>литров)<br>'
                            />
                            <Column
                                dataIndex="immg_cena"
                                text = "Цена(тыс. <br>руб. за один <br>литр"
                            />
                        </Column>
                        <Column
                            text="Альбумин 10-процентный"
                        >
                            <Column
                                dataIndex="alb_max"
                                text = 'Макс.<br>об.<br>(тыс.<br>литров)<br>'
                            />
                            <Column
                                dataIndex="alb_cena"
                                text = "Цена(тыс. <br>руб. за один <br>литр"
                            />
                        </Column>
                    </Grid>
                    </Panel>
                    </Container>
                </Container>
            /*</Container>*/

        )
    }
    //событие при нажатии на регион
    onSelectionChange = (grid, records, selecting, selection) => {
        this.store_Mpe1gem.load({
            params:{
                'r1022': records[0].data.p00,
            }
        });
       console.log(this.store_Mpe1gem);
        this.setState({ message: records[0].data.p02});
    }

}
