import React, { Component } from 'react';
import {Column, Container, Grid, SearchField, Toolbar} from '@extjs/ext-react';
import axios from 'axios';
import {medium, small} from "../responsiveFormulas";
//import data from './data';
var datar;
var Animal = function(id, name,xt) {
    this.p00 = id;
    this.p01 = name;
};

var data = [];
var Form = require('react-json-editor');

export default class Contacts extends Component {
    constructor(props){
        super(props);
        this.state={
            r1022List:[]
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
            <Grid store={this.stort}>
                <Column
                    dataIndex="p00"
                    flex={2}
                    resizable
                />
                <Column
                    text="Email"
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


           /* <Container>

              <p> hkjh</p>
                <p> sdfsdfgdfg{this.loadFillData()}</p>
            </Container>*/

        )
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
