
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
                    <Container
                        autoSize
                        defaults={{ flex: 1, bodyPadding: 10, shadow: true, margin: 10 }}
                        layout={{ type: Ext.os.is.Phone ? 'vbox' : 'hbox', pack: 'center', align: 'stretch' }}
                        flex={1}
                    >
                        <Panel>
                            qweqwe
                        </Panel>
                        <Panel title="Title">
                          qweqwe
                        </Panel>
                    </Container>
                    <Container
                        autoSize
                        defaults={{ flex: 1, bodyPadding: 10, shadow: true, margin: 10 }}
                        layout={{ type: Ext.os.is.Phone ? 'vbox' : 'hbox', pack: 'center', align: 'stretch' }}
                        flex={1}
                    >
                        <Panel
                            title="Built in Tools"
                            tools={[
                                {type: 'minimize', handler: toolHandler },
                                {type: 'refresh', handler: toolHandler },
                                {type: 'search', handler: toolHandler },
                                {type: 'save', handler: toolHandler },
                                {type: 'menu', handler: toolHandler }
                            ]}
                        >
                            qweqwe
                        </Panel>
                        <Panel
                            title="Custom Tools w/ iconCls"
                            tools={[
                                {iconCls: 'x-fa fa-wrench', handler: toolHandler },
                                {iconCls: 'x-fa fa-reply', handler: toolHandler },
                                {iconCls: 'x-fa fa-reply-all', handler: toolHandler }
                            ]}
                        >
                            qweqwe
                        </Panel>
                    </Container>
                </Container>
            )
        }
    }
