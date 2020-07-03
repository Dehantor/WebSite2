
    import React, { Component } from 'react';
    import { Container, Panel, Button } from '@extjs/ext-react';


    Ext.require('Ext.Toast');

    function toolHandler(owner, tool) {
        Ext.toast(`You clicked ${tool.config.type || 'a custom tool'}.`);
    }

    export default class Personal extends Component {

        render() {


            return (
                <Container
                    padding={10}
                    width={700}
                    layout={{
                        type: 'vbox',
                        pack: 'center',
                        align: 'stretch'
                    }}
                >
                dxsdf
                </Container>
            )
        }
    }
