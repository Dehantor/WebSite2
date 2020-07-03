import React from 'react';
import PropTypes from 'prop-types';
import { TreeList } from '@extjs/ext-react';

Ext.require('Ext.data.TreeStore');

/**
 * The main navigation menu
 */
export default function NavMenu({ 
    onItemClick, 
    selection,

    ...props 
}) {
    return (
        <TreeList 
            {...props}
            ui="nav"
            expanderFirst={false}
            onItemClick={(tree, item) => onItemClick(item.node.getId())}
            selection={selection}
            width={290}
            store={{
                root: {
                    children: [
                        { id: '/', text: 'Главная', iconCls: 'x-fa fa-home', leaf: true },
                        { id: '/planning', text: 'Планирование поставок', iconCls: 'x-fa fa-calendar', leaf: true },
                        { id: '/personal', text: 'ПОШ структура', iconCls: 'x-fa fa-user', leaf: true },
                        { id: '/contacts', text: 'Контракты и договора', iconCls: 'x-fa fa-info', leaf: true },
                        { id: '/about', text: 'Данные о ресурсах', iconCls: 'x-fa fa-file', leaf: true },
                        { id: '/about', text: 'Подразделения', iconCls: 'x-fa fa-cloud', leaf: true },
                        { id: '/about', text: 'Подготовка', iconCls: 'x-fa fa-pencil', leaf: true },
                        { id: '/about', text: 'Реестр НПА', iconCls: 'x-fa fa-list', leaf: true },
                        { id: '/about', text: 'Исполение поручений', iconCls: 'x-fa fa-calendar', leaf: true },
                        { id: '/about', text: 'Задачи', iconCls: 'x-fa fa-calendar', leaf: true },
                    ]
                }
            }}
        />        
    )
}

NavMenu.propTypes = {
    onSelectionChange: PropTypes.func,
    selection: PropTypes.string
};