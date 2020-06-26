import React, { Component } from 'react';
import {Column, Panel, Container, Grid, SearchField, Toolbar, DatePickerField,RendererCell , Button} from '@extjs/ext-react';
import axios from 'axios';
import {medium, small} from "../responsiveFormulas";
import {DateField} from "@extjs/reactor/modern";
//import data from './data';
Ext.require([
    'Ext.grid.plugin.Editable',
    'Ext.grid.plugin.CellEditing',
    'Ext.data.validator.Presence',
    'Ext.data.validator.Number',
    'Ext.data.validator.Date'
]);
var datar;
var Animal = function(id, name,xt) {
    this.p00 = id;
    this.p01 = name;
};

var data = [];

export default class Contacts extends Component {
    constructor(props){
        super(props);
        this.state={
            r1022List:[],
            message: null
        }

    }

    componentDidMount() {

        const url="http://127.0.0.1:3000/r1022/list";
        axios.get(url)
            .then(res=>{
                if(res.data.success){
                    const data= res.data.data;
                    datar=data;
                    this.setState({r1022List:data})

                }
                else{
                    alert("Error")
                }
                data=[]
                for (var i=0;i<datar.length;i++)
                    data.push(new Animal(datar[i].p00,datar[i].p01));
            })
            .catch(error=>
                alert("er "+error)
            )

    }

    stort = Ext.create('Ext.data.Store', {
        fields: ['p00', 'p01'],
        data
    });
    render() {
        return (

            //  <p>sdf</p>

            <Container title="Планирование поставок"  layout="hbox"  padding="30">

                <Grid store={this.stort}
                      shadow
                      width ={280}

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
                        dataIndex="p01"
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
                    <Column
                        text=""
                        width="100"
                        ignoreExport
                        dataIndex="verified"
                        align="center"
                    >
                        <RendererCell
                            renderer={this.renderVerify}
                            bodyStyle={{ padding: 0 }}
                        >

                        </RendererCell>
                    </Column>
                </Grid>

                <Container
                    defaults={{  margin: 10 }}
                >
                    <Panel  width={800} height={100} split={true}>
                        <h1>Таблица о возможностях организаций,
                            находящихся в ведении или сфере деятельности {this.state.message ==null? '____' : this.state.message} (субъекта РФ или ФОИВ)</h1>

                    </Panel>
                    <Panel title="таблица" width={500}  height={400}
                           draggable={true}
                           collapsible={true} //сворачиваемость
                           closable={true}// закрываемость
                    >
                        <Grid store={this.stort}>
                            <Column
                                text="таблица"
                                dataIndex="p01"
                                flex={3}
                                resizable
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
                    </Panel>

                </Container>
            </Container>

        )
    }
    onButtonTap() {
        this.setState({ message: 'Tapped!' });
    }
    renderVerify = (value, record) => (
        <Container>
            <Button
                text='Выбрать'
                ui="action"
                handler={this.onVerify.bind(this, record)}
            />
        </Container>
    )
    onVerify = (record) => {
        this.setState({ message: record.get('p01')});
    }
    loadFillData(){
        return this.state.r1022List.map((data)=>{
            return(

                <tr>
                    <td>{data.p00}</td>
                    <td>{data.p01}</td>
                    <td>{data.p02}</td>
                </tr>
            )
        });
    }
    /**
     * Filter the store when the migrations types in the search box
     */


}

/*class  Contacts extends Component{

    /!*constructor(props){
        super(props);
        this.state={
            r1022List:[]
        }
    }
    componentDidMount() {
        const url="http://192.168.1.104/r1022/list";
        axios.get(url)
            .then(res=>{
            if(res.data.success){
                const data= res.data.data
                this.setState({r1022List:data})
            }
            else{
                alert("Error")
            }
        })
            .catch(error=>
            alert("er "+error))}*!/

    render() {
        return (
            <p>werwser</p>

        )
    }

 /!*           loadFillData(){
                return this.state.r1022List.map((data)=>{
                return(
                <tr>
                <td>{data.p00}</td>
                <td>{data.p01}</td>
                <td>{data.p02}</td>
                </tr>
                )
            });
            }*!/
};*/



/*
export default function Contacts() {
    return(
    <Container padding="30">
        <p>
            Директор: Спирин Александр Владимирович</p>
        <p>
            телефон +79235779488
        </p>
    </Container>
    )
}*/
