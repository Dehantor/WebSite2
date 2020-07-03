Ext.require(["Ext.app.Application", "Ext.Component", "Ext.Widget"]);
Ext.require("Ext.reactor.RendererCell");
Ext.create({
  xtype: 'container',
  padding: '20'
});
Ext.create({"xtype":"container"});
Ext.require('Ext.plugin.Responsive');
Ext.require(['Ext.grid.plugin.Editable', 'Ext.grid.plugin.CellEditing', 'Ext.data.validator.Presence', 'Ext.data.validator.Number', 'Ext.data.validator.Date']);
Ext.create('Ext.data.Store', {
  fields: ['p00', 'p01'],
  data: data
});
Ext.create({
  xtype: 'container',
  title: '\u041F\u043B\u0430\u043D\u0438\u0440\u043E\u0432\u0430\u043D\u0438\u0435 \u043F\u043E\u0441\u0442\u0430\u0432\u043E\u043A',
  layout: 'hbox',
  padding: '30'
});
Ext.create({
  xtype: 'grid',
  store: this.stort,
  shadow: true,
  width: 280,
  platformConfig: {
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
  }
});
Ext.create({
  xtype: 'column',
  text: '\u0420\u0435\u0433\u0438\u043E\u043D\u044B',
  dataIndex: 'p01',
  flex: 3,
  resizable: true,
  editable: true,
  responsiveConfig: (_ref = {}, _defineProperty(_ref, small, {
    hidden: true
  }), _defineProperty(_ref, medium, {
    hidden: false
  }), _ref)
});
Ext.create({
  xtype: 'column',
  text: '',
  width: '100',
  ignoreExport: true,
  dataIndex: 'verified',
  align: 'center'
});
Ext.create({
  xtype: 'renderercell',
  renderer: this.renderVerify,
  bodyStyle: {
    padding: 0
  }
});
Ext.create({
  xtype: 'container',
  defaults: {
    margin: 10
  }
});
Ext.create({
  xtype: 'panel',
  width: 800,
  height: 100,
  split: true
});
Ext.create({
  xtype: 'panel',
  title: '\u0442\u0430\u0431\u043B\u0438\u0446\u0430',
  width: 500,
  height: 400,
  draggable: true,
  collapsible: true //сворачиваемость
  ,
  closable: true // закрываемость

});
Ext.create({
  xtype: 'grid',
  store: this.stort
});
Ext.create({
  xtype: 'column',
  text: '\u0442\u0430\u0431\u043B\u0438\u0446\u0430',
  dataIndex: 'p01',
  flex: 3,
  resizable: true,
  responsiveConfig: (_ref2 = {}, _defineProperty(_ref2, small, {
    hidden: true
  }), _defineProperty(_ref2, medium, {
    hidden: false
  }), _ref2)
});
Ext.create({"xtype":"container"});
Ext.create({
  xtype: 'button',
  text: '\u0412\u044B\u0431\u0440\u0430\u0442\u044C',
  ui: 'action',
  handler: this.onVerify.bind(this, record)
});
Ext.create({"xtype":"column"});
Ext.create({"xtype":"panel"});
Ext.create({"xtype":"container"});
Ext.create({"xtype":"grid"});
Ext.create({"xtype":"searchfield"});
Ext.create({"xtype":"toolbar"});
Ext.create({"xtype":"datepickerfield"});
Ext.create({"xtype":"renderercell"});
Ext.create({"xtype":"button"});
Ext.create({"xtype":"datefield"});
Ext.create({
  xtype: 'container',
  padding: '20'
});
Ext.create({"xtype":"container"});
Ext.create({
  xtype: 'container',
  fullscreen: true,
  layout: 'fit'
});
Ext.create({
  xtype: 'titlebar',
  title: '\u041F\u043B\u0430\u043D\u0438\u0440\u043E\u0432\u0430\u043D\u0438\u0435 \u043F\u043E\u0441\u0442\u0430\u0432\u043E\u043A',
  docked: 'top'
});
Ext.create({
  xtype: 'button',
  align: 'left',
  iconCls: 'x-fa fa-bars',
  handler: this.toggleAppMenu,
  ripple: false
});
Ext.create({
  xtype: 'sheet',
  displayed: showAppMenu,
  side: 'left',
  onHide: this.onHideAppMenu
});
Ext.create({
  xtype: 'panel',
  scrollable: true,
  title: 'ExtReact Boilerplate'
});
Ext.create({
  xtype: 'panel',
  scrollable: true,
  docked: 'left',
  shadow: true,
  zIndex: 2
});
Ext.create({
  xtype: 'transition',
  type: 'fade'
});
Ext.create({"xtype":"transition"});
Ext.create({"xtype":"container"});
Ext.create({"xtype":"titlebar"});
Ext.create({"xtype":"button"});
Ext.create({"xtype":"sheet"});
Ext.create({"xtype":"panel"});
Ext.define('mpe1gem.model', {
  extend: 'Ext.data.Model',
  fields: [{
    name: 'id',
    type: 'integer'
  }, {
    name: 'r1022',
    type: 'string'
  }, {
    name: 'npp',
    type: 'integer'
  }, {
    name: 'naim_org',
    type: 'string'
  }, {
    name: 'adr_fact',
    type: 'string'
  }, {
    name: 'inn',
    type: 'string'
  }]
});
Ext.define('R1022.model', {
  extend: 'Ext.data.Model',
  fields: [{
    name: 'p00',
    type: 'string'
  }, {
    name: 'p01',
    type: 'string'
  }, {
    name: 'p02',
    type: 'string'
  }, {
    name: 'utv',
    type: 'string'
  }, {
    name: 'sp',
    type: 'string'
  }]
});
Ext.require('Ext.data.TreeStore');
Ext.create({"xtype":"treelist"});
Ext.create({"xtype":"treelist"});
Ext.require('Ext.Toast');
Ext.create({
  xtype: 'container',
  padding: 10,
  width: 700,
  layout: {
    type: 'vbox',
    pack: 'center',
    align: 'stretch'
  }
});
Ext.create({"xtype":"container"});
Ext.create({"xtype":"panel"});
Ext.create({"xtype":"button"});
Ext.require(['Ext.grid.plugin.Editable', 'Ext.grid.plugin.CellEditing', 'Ext.data.validator.Presence', 'Ext.data.validator.Number', 'Ext.data.validator.Date', 'Ext.Toast', 'Ext.grid.plugin.Clipboard']);
Ext.create('Ext.data.Store', {
  modelR1022: modelR1022,
  autoLoad: true,
  rootVisible: false,
  proxy: {
    type: 'ajax',
    url: 'http://94.73.212.60:3000/r1022/list.json',
    reader: {
      type: 'json',
      rootProperty: 'data'
    }
  }
});
Ext.create('Ext.data.Store', {
  modelMpe1gem: modelMpe1gem,
  rootVisible: false,
  paramsAsJson: true,
  proxy: {
    type: 'ajax',
    url: 'http://94.73.212.60:3000/list',
    reader: {
      type: 'json',
      rootProperty: 'data'
    },
    actionMethods: {
      create: 'POST',
      read: 'POST',
      update: 'POST',
      destroy: 'POST'
    }
  }
});
Ext.create({
  xtype: 'container',
  title: '\u041F\u043B\u0430\u043D\u0438\u0440\u043E\u0432\u0430\u043D\u0438\u0435 \u043F\u043E\u0441\u0442\u0430\u0432\u043E\u043A',
  shadow: true,
  layout: 'hbox',
  padding: '30'
});
Ext.create({
  xtype: 'grid',
  store: this.store_R1022,
  plugins: {
    selectionreplicator: true,
    clipboard: true
  },
  shadow: true,
  width: 280,
  dataIndex: 'grid',
  onSelectionChange: this.onSelectionChange,
  selectable: _extends({}, selectable),
  platformConfig: {
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
  }
});
Ext.create({
  xtype: 'column',
  text: '\u0420\u0435\u0433\u0438\u043E\u043D\u044B',
  dataIndex: 'p02',
  flex: 3,
  resizable: true,
  editable: true,
  responsiveConfig: (_ref = {}, _defineProperty(_ref, small, {
    hidden: true
  }), _defineProperty(_ref, medium, {
    hidden: false
  }), _ref)
});
Ext.create({
  xtype: 'container',
  shadow: true,
  layout: 'vbox',
  defaults: {
    margin: 10
  }
});
Ext.create({
  xtype: 'panel',
  shadow: true,
  layout: 'hbox',
  width: 800,
  height: 100,
  split: true
});
Ext.create({
  xtype: 'panel',
  shadow: true,
  layout: 'hbox',
  width: 800,
  height: 300,
  split: true
});
Ext.create({
  xtype: 'grid',
  store: this.store_Mpe1gem,
  dataIndex: 'grid2'
});
Ext.create({
  xtype: 'column',
  text: '\u0420\u0435\u0433\u0438\u043E\u043D\u044B',
  dataIndex: 'inn',
  resizable: true,
  editable: true,
  responsiveConfig: (_ref2 = {}, _defineProperty(_ref2, small, {
    hidden: true
  }), _defineProperty(_ref2, medium, {
    hidden: false
  }), _ref2)
});
Ext.create({"xtype":"column"});
Ext.create({"xtype":"panel"});
Ext.create({"xtype":"container"});
Ext.create({"xtype":"grid"});
Ext.create({"xtype":"searchfield"});
Ext.create({"xtype":"toolbar"});
Ext.create({"xtype":"datepickerfield"});
Ext.create({"xtype":"renderercell"});
Ext.create({"xtype":"button"});
Ext.require(['Ext.grid.plugin.Editable', 'Ext.grid.plugin.CellEditing', 'Ext.data.validator.Presence', 'Ext.data.validator.Number', 'Ext.data.validator.Date', 'Ext.Toast', 'Ext.grid.plugin.Clipboard']);
Ext.create('Ext.data.Store', {
  modelR1022: modelR1022,
  autoLoad: true,
  rootVisible: false,
  proxy: {
    type: 'ajax',
    url: 'http://94.73.212.60:3000/r1022/list.json',
    reader: {
      type: 'json',
      rootProperty: 'data'
    }
  }
});
Ext.create('Ext.data.Store', {
  modelMpe1gem: modelMpe1gem,
  rootVisible: false,
  paramsAsJson: true,
  proxy: {
    type: 'ajax',
    url: 'http://94.73.212.60:3000/list',
    reader: {
      type: 'json',
      rootProperty: 'data'
    },
    actionMethods: {
      create: 'POST',
      read: 'POST',
      update: 'POST',
      destroy: 'POST'
    }
  }
});
Ext.create({
  xtype: 'container',
  title: '\u041F\u043B\u0430\u043D\u0438\u0440\u043E\u0432\u0430\u043D\u0438\u0435 \u043F\u043E\u0441\u0442\u0430\u0432\u043E\u043A',
  shadow: true,
  layout: 'hbox',
  padding: '30'
});
Ext.create({
  xtype: 'grid',
  store: this.store_R1022,
  plugins: {
    selectionreplicator: true,
    clipboard: true
  },
  shadow: true,
  width: 280,
  dataIndex: 'grid',
  onSelectionChange: this.onSelectionChange,
  selectable: _extends({}, selectable),
  platformConfig: {
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
  }
});
Ext.create({
  xtype: 'column',
  text: '\u0420\u0435\u0433\u0438\u043E\u043D\u044B',
  dataIndex: 'p02',
  flex: 3,
  resizable: true,
  editable: true,
  responsiveConfig: (_ref = {}, _defineProperty(_ref, small, {
    hidden: true
  }), _defineProperty(_ref, medium, {
    hidden: false
  }), _ref)
});
Ext.create({
  xtype: 'container',
  shadow: true,
  layout: 'vbox',
  defaults: {
    margin: 10
  }
});
Ext.create({
  xtype: 'panel',
  shadow: true,
  layout: 'hbox',
  width: 800,
  height: 100,
  split: true
});
Ext.create({
  xtype: 'panel',
  shadow: true,
  layout: 'hbox',
  width: 800,
  height: 300,
  split: true
});
Ext.create({
  xtype: 'grid',
  store: this.store_Mpe1gem,
  dataIndex: 'grid2'
});
Ext.create({
  xtype: 'column',
  text: '\u0420\u0435\u0433\u0438\u043E\u043D\u044B',
  dataIndex: 'naim_org',
  resizable: true,
  editable: true,
  responsiveConfig: (_ref2 = {}, _defineProperty(_ref2, small, {
    hidden: true
  }), _defineProperty(_ref2, medium, {
    hidden: false
  }), _ref2)
});
Ext.create({"xtype":"column"});
Ext.create({"xtype":"panel"});
Ext.create({"xtype":"container"});
Ext.create({"xtype":"grid"});
Ext.create({"xtype":"searchfield"});
Ext.create({"xtype":"toolbar"});
Ext.create({"xtype":"datepickerfield"});
Ext.create({"xtype":"renderercell"});
Ext.create({"xtype":"button"});
Ext.require(['Ext.grid.plugin.Editable', 'Ext.grid.plugin.CellEditing', 'Ext.data.validator.Presence', 'Ext.data.validator.Number', 'Ext.data.validator.Date', 'Ext.Toast', 'Ext.grid.plugin.Clipboard']);
Ext.create('Ext.data.Store', {
  modelR1022: modelR1022,
  autoLoad: true,
  rootVisible: false,
  proxy: {
    type: 'ajax',
    url: 'http://94.73.212.60:3000/r1022/list.json',
    reader: {
      type: 'json',
      rootProperty: 'data'
    }
  }
});
Ext.create('Ext.data.Store', {
  modelMpe1gem: modelMpe1gem,
  rootVisible: false,
  paramsAsJson: true,
  proxy: {
    type: 'ajax',
    url: 'http://94.73.212.60:3000/list',
    reader: {
      type: 'json',
      rootProperty: 'data'
    },
    actionMethods: {
      create: 'POST',
      read: 'POST',
      update: 'POST',
      destroy: 'POST'
    }
  }
});
Ext.create({
  xtype: 'container',
  title: '\u041F\u043B\u0430\u043D\u0438\u0440\u043E\u0432\u0430\u043D\u0438\u0435 \u043F\u043E\u0441\u0442\u0430\u0432\u043E\u043A',
  shadow: true,
  layout: 'hbox',
  padding: '30'
});
Ext.create({
  xtype: 'grid',
  store: this.store_R1022,
  plugins: {
    selectionreplicator: true,
    clipboard: true
  },
  shadow: true,
  width: 280,
  dataIndex: 'grid',
  onSelectionChange: this.onSelectionChange,
  selectable: _extends({}, selectable),
  platformConfig: {
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
  }
});
Ext.create({
  xtype: 'column',
  text: '\u0420\u0435\u0433\u0438\u043E\u043D\u044B',
  dataIndex: 'p02',
  flex: 3,
  resizable: true,
  editable: true,
  responsiveConfig: (_ref = {}, _defineProperty(_ref, small, {
    hidden: true
  }), _defineProperty(_ref, medium, {
    hidden: false
  }), _ref)
});
Ext.create({
  xtype: 'container',
  shadow: true,
  layout: 'vbox',
  defaults: {
    margin: 10
  }
});
Ext.create({
  xtype: 'panel',
  shadow: true,
  layout: 'hbox',
  width: 800,
  height: 100,
  split: true
});
Ext.create({
  xtype: 'panel',
  shadow: true,
  layout: 'hbox',
  width: 800,
  height: 300,
  split: true
});
Ext.create({
  xtype: 'grid',
  store: this.store_Mpe1gem,
  dataIndex: 'grid2'
});
Ext.create({
  xtype: 'column',
  resizable: true,
  text: '\u041E\u0440\u0433\u0430\u043D\u0438\u0437\u0430\u0446\u0438\u044F \u0438\u0441\u043F\u043E\u043B\u043D\u0438\u0442\u0435\u043B\u044C'
});
Ext.create({
  xtype: 'column',
  dataIndex: 'naim_org',
  text: '<br>\u041D\u0430\u0438\u043C\u0435\u043D\u043E<br>\u0432\u0430\u043D\u0438\u0435<br><br>'
});
Ext.create({
  xtype: 'column',
  dataIndex: 'adr_fact',
  text: '\u041C\u0435\u0441\u0442\u043E<br>\u043D\u0430\u0445\u043E\u0436\u0434\u0435\u043D\u0438\u0435'
});
Ext.create({
  xtype: 'column',
  dataIndex: 'inn',
  text: '\u0418\u041D\u041D'
});
Ext.create({"xtype":"column"});
Ext.create({"xtype":"panel"});
Ext.create({"xtype":"container"});
Ext.create({"xtype":"grid"});
Ext.create({"xtype":"searchfield"});
Ext.create({"xtype":"toolbar"});
Ext.create({"xtype":"datepickerfield"});
Ext.create({"xtype":"renderercell"});
Ext.create({"xtype":"button"});
Ext.require(['Ext.grid.plugin.Editable', 'Ext.grid.plugin.CellEditing', 'Ext.data.validator.Presence', 'Ext.data.validator.Number', 'Ext.data.validator.Date', 'Ext.Toast', 'Ext.grid.plugin.Clipboard']);
Ext.create('Ext.data.Store', {
  modelR1022: modelR1022,
  autoLoad: true,
  rootVisible: false,
  proxy: {
    type: 'ajax',
    url: 'http://94.73.212.60:3000/r1022/list.json',
    reader: {
      type: 'json',
      rootProperty: 'data'
    }
  }
});
Ext.create('Ext.data.Store', {
  modelMpe1gem: modelMpe1gem,
  rootVisible: false,
  paramsAsJson: true,
  proxy: {
    type: 'ajax',
    url: 'http://94.73.212.60:3000/list',
    reader: {
      type: 'json',
      rootProperty: 'data'
    },
    actionMethods: {
      create: 'POST',
      read: 'POST',
      update: 'POST',
      destroy: 'POST'
    }
  }
});
Ext.create({
  xtype: 'container',
  title: '\u041F\u043B\u0430\u043D\u0438\u0440\u043E\u0432\u0430\u043D\u0438\u0435 \u043F\u043E\u0441\u0442\u0430\u0432\u043E\u043A',
  shadow: true,
  layout: 'hbox',
  padding: '30'
});
Ext.create({
  xtype: 'grid',
  store: this.store_R1022,
  plugins: {
    selectionreplicator: true,
    clipboard: true
  },
  shadow: true,
  width: 280,
  dataIndex: 'grid',
  onSelectionChange: this.onSelectionChange,
  selectable: _extends({}, selectable),
  platformConfig: {
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
  }
});
Ext.create({
  xtype: 'column',
  text: '\u0420\u0435\u0433\u0438\u043E\u043D\u044B',
  dataIndex: 'p02',
  flex: 3,
  resizable: true,
  editable: true,
  responsiveConfig: (_ref = {}, _defineProperty(_ref, small, {
    hidden: true
  }), _defineProperty(_ref, medium, {
    hidden: false
  }), _ref)
});
Ext.create({
  xtype: 'container',
  shadow: true,
  layout: 'vbox',
  defaults: {
    margin: 10
  }
});
Ext.create({
  xtype: 'panel',
  shadow: true,
  layout: 'hbox',
  width: 800,
  height: 100,
  split: true
});
Ext.create({
  xtype: 'panel',
  shadow: true,
  layout: 'hbox',
  width: 800,
  height: 300,
  split: true
});
Ext.create({
  xtype: 'grid',
  store: this.store_Mpe1gem,
  dataIndex: 'grid2'
});
Ext.create({
  xtype: 'column',
  resizable: true,
  text: '\u041E\u0440\u0433\u0430\u043D\u0438\u0437\u0430\u0446\u0438\u044F \u0438\u0441\u043F\u043E\u043B\u043D\u0438\u0442\u0435\u043B\u044C'
});
Ext.create({
  xtype: 'column',
  dataIndex: 'naim_org',
  text: '<br>\u041D\u0430\u0438\u043C\u0435\u043D\u043E<br>\u0432\u0430\u043D\u0438\u0435<br><br>'
});
Ext.create({
  xtype: 'column',
  dataIndex: 'adr_fact',
  text: '\u041C\u0435\u0441\u0442\u043E<br>\u043D\u0430\u0445\u043E\u0436\u0434\u0435\u043D\u0438\u0435'
});
Ext.create({
  xtype: 'column',
  dataIndex: 'inn',
  text: '\u0418\u041D\u041D'
});
Ext.create({
  xtype: 'column',
  text: '\u041F\u043B\u0430\u0437\u043C\u0430 \u0441\u0432\u0435\u0436\u0435\u0437\u0430\u043C\u043E\u0440.',
  resizable: true
});
Ext.create({
  xtype: 'column',
  text: '\u041C\u0430\u043A\u0441.<br>\u043E\u0431.<br>(\u0442\u044B\u0441.<br>\u043B\u0438\u0442\u0440\u043E\u0432)<br>'
});
Ext.create({
  xtype: 'column',
  text: '\u0426\u0435\u043D\u0430(\u0442\u044B\u0441. <br>\u0440\u0443\u0431. \u0437\u0430 \u043E\u0434\u0438\u043D <br>\u043B\u0438\u0442\u0440'
});
Ext.create({
  xtype: 'column',
  text: '\u042D\u0440\u0438\u0442\u0440\u043E\u0446\u0438\u0442\u0430\u0440\u043D\u0430\u044F \u043C\u0430\u0441\u0441\u0430'
});
Ext.create({
  xtype: 'column',
  text: '\u041C\u0430\u043A\u0441.<br>\u043E\u0431.<br>(\u0442\u044B\u0441.<br>\u043B\u0438\u0442\u0440\u043E\u0432)<br>'
});
Ext.create({
  xtype: 'column',
  text: '\u0426\u0435\u043D\u0430(\u0442\u044B\u0441. <br>\u0440\u0443\u0431. \u0437\u0430 \u043E\u0434\u0438\u043D <br>\u043B\u0438\u0442\u0440'
});
Ext.create({
  xtype: 'column',
  text: '\u0418\u043C\u043C\u0443\u043D\u043E\u0433\u043B\u043E\u0431\u0443\u043B\u0438\u043D \u0447\u0435\u043B\u043E\u0432\u0435\u043A\u0430'
});
Ext.create({
  xtype: 'column',
  text: '\u041C\u0430\u043A\u0441.<br>\u043E\u0431.<br>(\u0442\u044B\u0441.<br>\u043B\u0438\u0442\u0440\u043E\u0432)<br>'
});
Ext.create({
  xtype: 'column',
  text: '\u0426\u0435\u043D\u0430(\u0442\u044B\u0441. <br>\u0440\u0443\u0431. \u0437\u0430 \u043E\u0434\u0438\u043D <br>\u043B\u0438\u0442\u0440'
});
Ext.create({
  xtype: 'column',
  text: '\u0410\u043B\u044C\u0431\u0443\u043C\u0438\u043D 10-\u043F\u0440\u043E\u0446\u0435\u043D\u0442\u043D\u044B\u0439'
});
Ext.create({
  xtype: 'column',
  text: '\u041C\u0430\u043A\u0441.<br>\u043E\u0431.<br>(\u0442\u044B\u0441.<br>\u043B\u0438\u0442\u0440\u043E\u0432)<br>'
});
Ext.create({
  xtype: 'column',
  text: '\u0426\u0435\u043D\u0430(\u0442\u044B\u0441. <br>\u0440\u0443\u0431. \u0437\u0430 \u043E\u0434\u0438\u043D <br>\u043B\u0438\u0442\u0440'
});
Ext.create({"xtype":"column"});
Ext.create({"xtype":"panel"});
Ext.create({"xtype":"container"});
Ext.create({"xtype":"grid"});
Ext.create({"xtype":"searchfield"});
Ext.create({"xtype":"toolbar"});
Ext.create({"xtype":"datepickerfield"});
Ext.create({"xtype":"renderercell"});
Ext.create({"xtype":"button"});
Ext.require(['Ext.grid.plugin.Editable', 'Ext.grid.plugin.CellEditing', 'Ext.data.validator.Presence', 'Ext.data.validator.Number', 'Ext.data.validator.Date', 'Ext.Toast', 'Ext.grid.plugin.Clipboard']);
Ext.create('Ext.data.Store', {
  modelR1022: modelR1022,
  autoLoad: true,
  rootVisible: false,
  proxy: {
    type: 'ajax',
    url: 'http://94.73.212.60:3000/r1022/list.json',
    reader: {
      type: 'json',
      rootProperty: 'data'
    }
  }
});
Ext.create('Ext.data.Store', {
  modelMpe1gem: modelMpe1gem,
  rootVisible: false,
  paramsAsJson: true,
  proxy: {
    type: 'ajax',
    url: 'http://94.73.212.60:3000/list',
    reader: {
      type: 'json',
      rootProperty: 'data'
    },
    actionMethods: {
      create: 'POST',
      read: 'POST',
      update: 'POST',
      destroy: 'POST'
    }
  }
});
Ext.create({
  xtype: 'container',
  title: '\u041F\u043B\u0430\u043D\u0438\u0440\u043E\u0432\u0430\u043D\u0438\u0435 \u043F\u043E\u0441\u0442\u0430\u0432\u043E\u043A',
  shadow: true,
  layout: 'hbox',
  padding: '30'
});
Ext.create({
  xtype: 'grid',
  store: this.store_R1022,
  plugins: {
    selectionreplicator: true,
    clipboard: true
  },
  shadow: true,
  width: 280,
  dataIndex: 'grid',
  onSelectionChange: this.onSelectionChange,
  selectable: _extends({}, selectable),
  platformConfig: {
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
  }
});
Ext.create({
  xtype: 'column',
  text: '\u0420\u0435\u0433\u0438\u043E\u043D\u044B',
  dataIndex: 'p02',
  flex: 3,
  resizable: true,
  editable: true,
  responsiveConfig: (_ref = {}, _defineProperty(_ref, small, {
    hidden: true
  }), _defineProperty(_ref, medium, {
    hidden: false
  }), _ref)
});
Ext.create({
  xtype: 'container',
  shadow: true,
  layout: 'vbox',
  defaults: {
    margin: 10
  }
});
Ext.create({
  xtype: 'panel',
  shadow: true,
  layout: 'hbox',
  width: 800,
  height: 100,
  split: true
});
Ext.create({
  xtype: 'panel',
  shadow: true,
  layout: 'hbox',
  width: 800,
  height: 300,
  split: true
});
Ext.create({
  xtype: 'grid',
  store: this.store_Mpe1gem,
  dataIndex: 'grid2'
});
Ext.create({
  xtype: 'column',
  resizable: true,
  text: '\u041E\u0440\u0433\u0430\u043D\u0438\u0437\u0430\u0446\u0438\u044F \u0438\u0441\u043F\u043E\u043B\u043D\u0438\u0442\u0435\u043B\u044C'
});
Ext.create({
  xtype: 'column',
  dataIndex: 'naim_org',
  text: '<br>\u041D\u0430\u0438\u043C\u0435\u043D\u043E<br>\u0432\u0430\u043D\u0438\u0435<br><br>'
});
Ext.create({
  xtype: 'column',
  dataIndex: 'adr_fact',
  text: '\u041C\u0435\u0441\u0442\u043E<br>\u043D\u0430\u0445\u043E\u0436\u0434\u0435\u043D\u0438\u0435'
});
Ext.create({
  xtype: 'column',
  dataIndex: 'inn',
  text: '\u0418\u041D\u041D'
});
Ext.create({
  xtype: 'column',
  dataIndex: 'inn',
  text: '\u041F\u043B\u0430\u0437\u043C\u0430 \u0441\u0432\u0435\u0436\u0435\u0437\u0430\u043C\u043E\u0440.',
  resizable: true
});
Ext.create({
  xtype: 'column',
  dataIndex: 'inn',
  text: '\u041C\u0430\u043A\u0441.<br>\u043E\u0431.<br>(\u0442\u044B\u0441.<br>\u043B\u0438\u0442\u0440\u043E\u0432)<br>'
});
Ext.create({
  xtype: 'column',
  dataIndex: 'inn',
  text: '\u0426\u0435\u043D\u0430(\u0442\u044B\u0441. <br>\u0440\u0443\u0431. \u0437\u0430 \u043E\u0434\u0438\u043D <br>\u043B\u0438\u0442\u0440'
});
Ext.create({
  xtype: 'column',
  dataIndex: 'inn',
  text: '\u042D\u0440\u0438\u0442\u0440\u043E\u0446\u0438\u0442\u0430\u0440\u043D\u0430\u044F \u043C\u0430\u0441\u0441\u0430'
});
Ext.create({
  xtype: 'column',
  dataIndex: 'inn',
  text: '\u041C\u0430\u043A\u0441.<br>\u043E\u0431.<br>(\u0442\u044B\u0441.<br>\u043B\u0438\u0442\u0440\u043E\u0432)<br>'
});
Ext.create({
  xtype: 'column',
  dataIndex: 'inn',
  text: '\u0426\u0435\u043D\u0430(\u0442\u044B\u0441. <br>\u0440\u0443\u0431. \u0437\u0430 \u043E\u0434\u0438\u043D <br>\u043B\u0438\u0442\u0440'
});
Ext.create({
  xtype: 'column',
  dataIndex: 'inn',
  text: '\u0418\u043C\u043C\u0443\u043D\u043E\u0433\u043B\u043E\u0431\u0443\u043B\u0438\u043D \u0447\u0435\u043B\u043E\u0432\u0435\u043A\u0430'
});
Ext.create({
  xtype: 'column',
  dataIndex: 'inn',
  text: '\u041C\u0430\u043A\u0441.<br>\u043E\u0431.<br>(\u0442\u044B\u0441.<br>\u043B\u0438\u0442\u0440\u043E\u0432)<br>'
});
Ext.create({
  xtype: 'column',
  dataIndex: 'inn',
  text: '\u0426\u0435\u043D\u0430(\u0442\u044B\u0441. <br>\u0440\u0443\u0431. \u0437\u0430 \u043E\u0434\u0438\u043D <br>\u043B\u0438\u0442\u0440'
});
Ext.create({
  xtype: 'column',
  dataIndex: 'inn',
  text: '\u0410\u043B\u044C\u0431\u0443\u043C\u0438\u043D 10-\u043F\u0440\u043E\u0446\u0435\u043D\u0442\u043D\u044B\u0439'
});
Ext.create({
  xtype: 'column',
  dataIndex: 'inn',
  text: '\u041C\u0430\u043A\u0441.<br>\u043E\u0431.<br>(\u0442\u044B\u0441.<br>\u043B\u0438\u0442\u0440\u043E\u0432)<br>'
});
Ext.create({
  xtype: 'column',
  dataIndex: 'inn',
  text: '\u0426\u0435\u043D\u0430(\u0442\u044B\u0441. <br>\u0440\u0443\u0431. \u0437\u0430 \u043E\u0434\u0438\u043D <br>\u043B\u0438\u0442\u0440'
});
Ext.create({"xtype":"column"});
Ext.create({"xtype":"panel"});
Ext.create({"xtype":"container"});
Ext.create({"xtype":"grid"});
Ext.create({"xtype":"searchfield"});
Ext.create({"xtype":"toolbar"});
Ext.create({"xtype":"datepickerfield"});
Ext.create({"xtype":"renderercell"});
Ext.create({"xtype":"button"});
Ext.require(['Ext.grid.plugin.Editable', 'Ext.grid.plugin.CellEditing', 'Ext.data.validator.Presence', 'Ext.data.validator.Number', 'Ext.data.validator.Date', 'Ext.Toast', 'Ext.grid.plugin.Clipboard']);
Ext.create('Ext.data.Store', {
  modelR1022: modelR1022,
  autoLoad: true,
  rootVisible: false,
  proxy: {
    type: 'ajax',
    url: 'http://94.73.212.60:3000/r1022/list.json',
    reader: {
      type: 'json',
      rootProperty: 'data'
    }
  }
});
Ext.create('Ext.data.Store', {
  modelMpe1gem: modelMpe1gem,
  rootVisible: false,
  paramsAsJson: true,
  proxy: {
    type: 'ajax',
    url: 'http://94.73.212.60:3000/list',
    reader: {
      type: 'json',
      rootProperty: 'data'
    },
    actionMethods: {
      create: 'POST',
      read: 'POST',
      update: 'POST',
      destroy: 'POST'
    }
  }
});
Ext.create({
  xtype: 'container',
  title: '\u041F\u043B\u0430\u043D\u0438\u0440\u043E\u0432\u0430\u043D\u0438\u0435 \u043F\u043E\u0441\u0442\u0430\u0432\u043E\u043A',
  shadow: true,
  layout: 'hbox',
  padding: '30'
});
Ext.create({
  xtype: 'grid',
  store: this.store_R1022,
  plugins: {
    selectionreplicator: true,
    clipboard: true
  },
  shadow: true,
  width: 280,
  dataIndex: 'grid',
  onSelectionChange: this.onSelectionChange,
  selectable: _extends({}, selectable),
  platformConfig: {
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
  }
});
Ext.create({
  xtype: 'column',
  text: '\u0420\u0435\u0433\u0438\u043E\u043D\u044B',
  dataIndex: 'p02',
  flex: 3,
  resizable: true,
  editable: true,
  responsiveConfig: (_ref = {}, _defineProperty(_ref, small, {
    hidden: true
  }), _defineProperty(_ref, medium, {
    hidden: false
  }), _ref)
});
Ext.create({
  xtype: 'container',
  shadow: true,
  layout: 'vbox',
  defaults: {
    margin: 10
  }
});
Ext.create({
  xtype: 'panel',
  shadow: true,
  layout: 'hbox',
  width: 800,
  height: 100,
  split: true
});
Ext.create({
  xtype: 'panel',
  shadow: true,
  layout: 'hbox',
  width: 800,
  height: 300,
  split: true
});
Ext.create({
  xtype: 'grid',
  store: this.store_Mpe1gem,
  dataIndex: 'grid2'
});
Ext.create({
  xtype: 'column',
  resizable: true,
  text: '\u041E\u0440\u0433\u0430\u043D\u0438\u0437\u0430\u0446\u0438\u044F \u0438\u0441\u043F\u043E\u043B\u043D\u0438\u0442\u0435\u043B\u044C'
});
Ext.create({
  xtype: 'column',
  dataIndex: 'naim_org',
  text: '<br>\u041D\u0430\u0438\u043C\u0435\u043D\u043E<br>\u0432\u0430\u043D\u0438\u0435<br><br>'
});
Ext.create({
  xtype: 'column',
  dataIndex: 'adr_fact',
  text: '\u041C\u0435\u0441\u0442\u043E<br>\u043D\u0430\u0445\u043E\u0436\u0434\u0435\u043D\u0438\u0435'
});
Ext.create({
  xtype: 'column',
  dataIndex: 'inn',
  text: '\u0418\u041D\u041D'
});
Ext.create({
  xtype: 'column',
  text: '\u041F\u043B\u0430\u0437\u043C\u0430 \u0441\u0432\u0435\u0436\u0435\u0437\u0430\u043C\u043E\u0440.',
  resizable: true
});
Ext.create({
  xtype: 'column',
  dataIndex: 'plazma_max',
  text: '\u041C\u0430\u043A\u0441.<br>\u043E\u0431.<br>(\u0442\u044B\u0441.<br>\u043B\u0438\u0442\u0440\u043E\u0432)<br>'
});
Ext.create({
  xtype: 'column',
  dataIndex: 'inn',
  text: '\u0426\u0435\u043D\u0430(\u0442\u044B\u0441. <br>\u0440\u0443\u0431. \u0437\u0430 \u043E\u0434\u0438\u043D <br>\u043B\u0438\u0442\u0440'
});
Ext.create({
  xtype: 'column',
  dataIndex: 'inn',
  text: '\u042D\u0440\u0438\u0442\u0440\u043E\u0446\u0438\u0442\u0430\u0440\u043D\u0430\u044F \u043C\u0430\u0441\u0441\u0430'
});
Ext.create({
  xtype: 'column',
  dataIndex: 'inn',
  text: '\u041C\u0430\u043A\u0441.<br>\u043E\u0431.<br>(\u0442\u044B\u0441.<br>\u043B\u0438\u0442\u0440\u043E\u0432)<br>'
});
Ext.create({
  xtype: 'column',
  dataIndex: 'inn',
  text: '\u0426\u0435\u043D\u0430(\u0442\u044B\u0441. <br>\u0440\u0443\u0431. \u0437\u0430 \u043E\u0434\u0438\u043D <br>\u043B\u0438\u0442\u0440'
});
Ext.create({
  xtype: 'column',
  dataIndex: 'inn',
  text: '\u0418\u043C\u043C\u0443\u043D\u043E\u0433\u043B\u043E\u0431\u0443\u043B\u0438\u043D \u0447\u0435\u043B\u043E\u0432\u0435\u043A\u0430'
});
Ext.create({
  xtype: 'column',
  dataIndex: 'inn',
  text: '\u041C\u0430\u043A\u0441.<br>\u043E\u0431.<br>(\u0442\u044B\u0441.<br>\u043B\u0438\u0442\u0440\u043E\u0432)<br>'
});
Ext.create({
  xtype: 'column',
  dataIndex: 'inn',
  text: '\u0426\u0435\u043D\u0430(\u0442\u044B\u0441. <br>\u0440\u0443\u0431. \u0437\u0430 \u043E\u0434\u0438\u043D <br>\u043B\u0438\u0442\u0440'
});
Ext.create({
  xtype: 'column',
  dataIndex: 'inn',
  text: '\u0410\u043B\u044C\u0431\u0443\u043C\u0438\u043D 10-\u043F\u0440\u043E\u0446\u0435\u043D\u0442\u043D\u044B\u0439'
});
Ext.create({
  xtype: 'column',
  dataIndex: 'inn',
  text: '\u041C\u0430\u043A\u0441.<br>\u043E\u0431.<br>(\u0442\u044B\u0441.<br>\u043B\u0438\u0442\u0440\u043E\u0432)<br>'
});
Ext.create({
  xtype: 'column',
  dataIndex: 'inn',
  text: '\u0426\u0435\u043D\u0430(\u0442\u044B\u0441. <br>\u0440\u0443\u0431. \u0437\u0430 \u043E\u0434\u0438\u043D <br>\u043B\u0438\u0442\u0440'
});
Ext.create({"xtype":"column"});
Ext.create({"xtype":"panel"});
Ext.create({"xtype":"container"});
Ext.create({"xtype":"grid"});
Ext.create({"xtype":"searchfield"});
Ext.create({"xtype":"toolbar"});
Ext.create({"xtype":"datepickerfield"});
Ext.create({"xtype":"renderercell"});
Ext.create({"xtype":"button"});
Ext.require(['Ext.grid.plugin.Editable', 'Ext.grid.plugin.CellEditing', 'Ext.data.validator.Presence', 'Ext.data.validator.Number', 'Ext.data.validator.Date', 'Ext.Toast', 'Ext.grid.plugin.Clipboard']);
Ext.create('Ext.data.Store', {
  modelR1022: modelR1022,
  autoLoad: true,
  rootVisible: false,
  proxy: {
    type: 'ajax',
    url: 'http://94.73.212.60:3000/r1022/list.json',
    reader: {
      type: 'json',
      rootProperty: 'data'
    }
  }
});
Ext.create('Ext.data.Store', {
  modelMpe1gem: modelMpe1gem,
  rootVisible: false,
  paramsAsJson: true,
  proxy: {
    type: 'ajax',
    url: 'http://94.73.212.60:3000/list',
    reader: {
      type: 'json',
      rootProperty: 'data'
    },
    actionMethods: {
      create: 'POST',
      read: 'POST',
      update: 'POST',
      destroy: 'POST'
    }
  }
});
Ext.create({
  xtype: 'container',
  title: '\u041F\u043B\u0430\u043D\u0438\u0440\u043E\u0432\u0430\u043D\u0438\u0435 \u043F\u043E\u0441\u0442\u0430\u0432\u043E\u043A',
  shadow: true,
  layout: 'hbox',
  padding: '30'
});
Ext.create({
  xtype: 'grid',
  store: this.store_R1022,
  plugins: {
    selectionreplicator: true,
    clipboard: true
  },
  shadow: true,
  width: 280,
  dataIndex: 'grid',
  onSelectionChange: this.onSelectionChange,
  selectable: _extends({}, selectable),
  platformConfig: {
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
  }
});
Ext.create({
  xtype: 'column',
  text: '\u0420\u0435\u0433\u0438\u043E\u043D\u044B',
  dataIndex: 'p02',
  flex: 3,
  resizable: true,
  editable: true,
  responsiveConfig: (_ref = {}, _defineProperty(_ref, small, {
    hidden: true
  }), _defineProperty(_ref, medium, {
    hidden: false
  }), _ref)
});
Ext.create({
  xtype: 'container',
  shadow: true,
  layout: 'vbox',
  defaults: {
    margin: 10
  }
});
Ext.create({
  xtype: 'panel',
  shadow: true,
  layout: 'hbox',
  width: 800,
  height: 100,
  split: true
});
Ext.create({
  xtype: 'panel',
  shadow: true,
  layout: 'hbox',
  width: 800,
  height: 300,
  split: true
});
Ext.create({
  xtype: 'grid',
  store: this.store_Mpe1gem,
  dataIndex: 'grid2'
});
Ext.create({
  xtype: 'column',
  resizable: true,
  text: '\u041E\u0440\u0433\u0430\u043D\u0438\u0437\u0430\u0446\u0438\u044F \u0438\u0441\u043F\u043E\u043B\u043D\u0438\u0442\u0435\u043B\u044C'
});
Ext.create({
  xtype: 'column',
  dataIndex: 'naim_org',
  text: '<br>\u041D\u0430\u0438\u043C\u0435\u043D\u043E<br>\u0432\u0430\u043D\u0438\u0435<br><br>'
});
Ext.create({
  xtype: 'column',
  dataIndex: 'adr_fact',
  text: '\u041C\u0435\u0441\u0442\u043E<br>\u043D\u0430\u0445\u043E\u0436\u0434\u0435\u043D\u0438\u0435'
});
Ext.create({
  xtype: 'column',
  dataIndex: 'inn',
  text: '\u0418\u041D\u041D'
});
Ext.create({
  xtype: 'column',
  text: '\u041F\u043B\u0430\u0437\u043C\u0430 \u0441\u0432\u0435\u0436\u0435\u0437\u0430\u043C\u043E\u0440.',
  resizable: true
});
Ext.create({
  xtype: 'column',
  dataIndex: 'plazma_max',
  text: '\u041C\u0430\u043A\u0441.<br>\u043E\u0431.<br>(\u0442\u044B\u0441.<br>\u043B\u0438\u0442\u0440\u043E\u0432)<br>'
});
Ext.create({
  xtype: 'column',
  dataIndex: 'plazma_cena',
  text: '\u0426\u0435\u043D\u0430(\u0442\u044B\u0441. <br>\u0440\u0443\u0431. \u0437\u0430 \u043E\u0434\u0438\u043D <br>\u043B\u0438\u0442\u0440'
});
Ext.create({
  xtype: 'column',
  text: '\u042D\u0440\u0438\u0442\u0440\u043E\u0446\u0438\u0442\u0430\u0440\u043D\u0430\u044F \u043C\u0430\u0441\u0441\u0430'
});
Ext.create({
  xtype: 'column',
  dataIndex: 'inn',
  text: '\u041C\u0430\u043A\u0441.<br>\u043E\u0431.<br>(\u0442\u044B\u0441.<br>\u043B\u0438\u0442\u0440\u043E\u0432)<br>'
});
Ext.create({
  xtype: 'column',
  dataIndex: 'inn',
  text: '\u0426\u0435\u043D\u0430(\u0442\u044B\u0441. <br>\u0440\u0443\u0431. \u0437\u0430 \u043E\u0434\u0438\u043D <br>\u043B\u0438\u0442\u0440'
});
Ext.create({
  xtype: 'column',
  dataIndex: 'inn',
  text: '\u0418\u043C\u043C\u0443\u043D\u043E\u0433\u043B\u043E\u0431\u0443\u043B\u0438\u043D \u0447\u0435\u043B\u043E\u0432\u0435\u043A\u0430'
});
Ext.create({
  xtype: 'column',
  dataIndex: 'inn',
  text: '\u041C\u0430\u043A\u0441.<br>\u043E\u0431.<br>(\u0442\u044B\u0441.<br>\u043B\u0438\u0442\u0440\u043E\u0432)<br>'
});
Ext.create({
  xtype: 'column',
  dataIndex: 'inn',
  text: '\u0426\u0435\u043D\u0430(\u0442\u044B\u0441. <br>\u0440\u0443\u0431. \u0437\u0430 \u043E\u0434\u0438\u043D <br>\u043B\u0438\u0442\u0440'
});
Ext.create({
  xtype: 'column',
  dataIndex: 'inn',
  text: '\u0410\u043B\u044C\u0431\u0443\u043C\u0438\u043D 10-\u043F\u0440\u043E\u0446\u0435\u043D\u0442\u043D\u044B\u0439'
});
Ext.create({
  xtype: 'column',
  dataIndex: 'inn',
  text: '\u041C\u0430\u043A\u0441.<br>\u043E\u0431.<br>(\u0442\u044B\u0441.<br>\u043B\u0438\u0442\u0440\u043E\u0432)<br>'
});
Ext.create({
  xtype: 'column',
  dataIndex: 'inn',
  text: '\u0426\u0435\u043D\u0430(\u0442\u044B\u0441. <br>\u0440\u0443\u0431. \u0437\u0430 \u043E\u0434\u0438\u043D <br>\u043B\u0438\u0442\u0440'
});
Ext.create({"xtype":"column"});
Ext.create({"xtype":"panel"});
Ext.create({"xtype":"container"});
Ext.create({"xtype":"grid"});
Ext.create({"xtype":"searchfield"});
Ext.create({"xtype":"toolbar"});
Ext.create({"xtype":"datepickerfield"});
Ext.create({"xtype":"renderercell"});
Ext.create({"xtype":"button"});
Ext.require(['Ext.grid.plugin.Editable', 'Ext.grid.plugin.CellEditing', 'Ext.data.validator.Presence', 'Ext.data.validator.Number', 'Ext.data.validator.Date', 'Ext.Toast', 'Ext.grid.plugin.Clipboard']);
Ext.create('Ext.data.Store', {
  modelR1022: modelR1022,
  autoLoad: true,
  rootVisible: false,
  proxy: {
    type: 'ajax',
    url: 'http://94.73.212.60:3000/r1022/list.json',
    reader: {
      type: 'json',
      rootProperty: 'data'
    }
  }
});
Ext.create('Ext.data.Store', {
  modelMpe1gem: modelMpe1gem,
  rootVisible: false,
  paramsAsJson: true,
  proxy: {
    type: 'ajax',
    url: 'http://94.73.212.60:3000/list',
    reader: {
      type: 'json',
      rootProperty: 'data'
    },
    actionMethods: {
      create: 'POST',
      read: 'POST',
      update: 'POST',
      destroy: 'POST'
    }
  }
});
Ext.create({
  xtype: 'container',
  title: '\u041F\u043B\u0430\u043D\u0438\u0440\u043E\u0432\u0430\u043D\u0438\u0435 \u043F\u043E\u0441\u0442\u0430\u0432\u043E\u043A',
  shadow: true,
  layout: 'hbox',
  padding: '30'
});
Ext.create({
  xtype: 'grid',
  store: this.store_R1022,
  plugins: {
    selectionreplicator: true,
    clipboard: true
  },
  shadow: true,
  width: 280,
  dataIndex: 'grid',
  onSelectionChange: this.onSelectionChange,
  selectable: _extends({}, selectable),
  platformConfig: {
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
  }
});
Ext.create({
  xtype: 'column',
  text: '\u0420\u0435\u0433\u0438\u043E\u043D\u044B',
  dataIndex: 'p02',
  flex: 3,
  resizable: true,
  editable: true,
  responsiveConfig: (_ref = {}, _defineProperty(_ref, small, {
    hidden: true
  }), _defineProperty(_ref, medium, {
    hidden: false
  }), _ref)
});
Ext.create({
  xtype: 'container',
  shadow: true,
  layout: 'vbox',
  defaults: {
    margin: 10
  }
});
Ext.create({
  xtype: 'panel',
  shadow: true,
  layout: 'hbox',
  width: 800,
  height: 100,
  split: true
});
Ext.create({
  xtype: 'panel',
  shadow: true,
  layout: 'hbox',
  width: 800,
  height: 300,
  split: true
});
Ext.create({
  xtype: 'grid',
  store: this.store_Mpe1gem,
  dataIndex: 'grid2'
});
Ext.create({
  xtype: 'column',
  resizable: true,
  text: '\u041E\u0440\u0433\u0430\u043D\u0438\u0437\u0430\u0446\u0438\u044F \u0438\u0441\u043F\u043E\u043B\u043D\u0438\u0442\u0435\u043B\u044C'
});
Ext.create({
  xtype: 'column',
  dataIndex: 'naim_org',
  text: '<br>\u041D\u0430\u0438\u043C\u0435\u043D\u043E<br>\u0432\u0430\u043D\u0438\u0435<br><br>'
});
Ext.create({
  xtype: 'column',
  dataIndex: 'adr_fact',
  text: '\u041C\u0435\u0441\u0442\u043E<br>\u043D\u0430\u0445\u043E\u0436\u0434\u0435\u043D\u0438\u0435'
});
Ext.create({
  xtype: 'column',
  dataIndex: 'inn',
  text: '\u0418\u041D\u041D'
});
Ext.create({
  xtype: 'column',
  text: '\u041F\u043B\u0430\u0437\u043C\u0430 \u0441\u0432\u0435\u0436\u0435\u0437\u0430\u043C\u043E\u0440.',
  resizable: true
});
Ext.create({
  xtype: 'column',
  dataIndex: 'plazma_max',
  text: '\u041C\u0430\u043A\u0441.<br>\u043E\u0431.<br>(\u0442\u044B\u0441.<br>\u043B\u0438\u0442\u0440\u043E\u0432)<br>'
});
Ext.create({
  xtype: 'column',
  dataIndex: 'plazma_cena',
  text: '\u0426\u0435\u043D\u0430(\u0442\u044B\u0441. <br>\u0440\u0443\u0431. \u0437\u0430 \u043E\u0434\u0438\u043D <br>\u043B\u0438\u0442\u0440'
});
Ext.create({
  xtype: 'column',
  text: '\u042D\u0440\u0438\u0442\u0440\u043E\u0446\u0438\u0442\u0430\u0440\u043D\u0430\u044F \u043C\u0430\u0441\u0441\u0430'
});
Ext.create({
  xtype: 'column',
  dataIndex: 'erm_max',
  text: '\u041C\u0430\u043A\u0441.<br>\u043E\u0431.<br>(\u0442\u044B\u0441.<br>\u043B\u0438\u0442\u0440\u043E\u0432)<br>'
});
Ext.create({
  xtype: 'column',
  dataIndex: 'inn',
  text: '\u0426\u0435\u043D\u0430(\u0442\u044B\u0441. <br>\u0440\u0443\u0431. \u0437\u0430 \u043E\u0434\u0438\u043D <br>\u043B\u0438\u0442\u0440'
});
Ext.create({
  xtype: 'column',
  dataIndex: 'inn',
  text: '\u0418\u043C\u043C\u0443\u043D\u043E\u0433\u043B\u043E\u0431\u0443\u043B\u0438\u043D \u0447\u0435\u043B\u043E\u0432\u0435\u043A\u0430'
});
Ext.create({
  xtype: 'column',
  dataIndex: 'inn',
  text: '\u041C\u0430\u043A\u0441.<br>\u043E\u0431.<br>(\u0442\u044B\u0441.<br>\u043B\u0438\u0442\u0440\u043E\u0432)<br>'
});
Ext.create({
  xtype: 'column',
  dataIndex: 'inn',
  text: '\u0426\u0435\u043D\u0430(\u0442\u044B\u0441. <br>\u0440\u0443\u0431. \u0437\u0430 \u043E\u0434\u0438\u043D <br>\u043B\u0438\u0442\u0440'
});
Ext.create({
  xtype: 'column',
  dataIndex: 'inn',
  text: '\u0410\u043B\u044C\u0431\u0443\u043C\u0438\u043D 10-\u043F\u0440\u043E\u0446\u0435\u043D\u0442\u043D\u044B\u0439'
});
Ext.create({
  xtype: 'column',
  dataIndex: 'inn',
  text: '\u041C\u0430\u043A\u0441.<br>\u043E\u0431.<br>(\u0442\u044B\u0441.<br>\u043B\u0438\u0442\u0440\u043E\u0432)<br>'
});
Ext.create({
  xtype: 'column',
  dataIndex: 'inn',
  text: '\u0426\u0435\u043D\u0430(\u0442\u044B\u0441. <br>\u0440\u0443\u0431. \u0437\u0430 \u043E\u0434\u0438\u043D <br>\u043B\u0438\u0442\u0440'
});
Ext.create({"xtype":"column"});
Ext.create({"xtype":"panel"});
Ext.create({"xtype":"container"});
Ext.create({"xtype":"grid"});
Ext.create({"xtype":"searchfield"});
Ext.create({"xtype":"toolbar"});
Ext.create({"xtype":"datepickerfield"});
Ext.create({"xtype":"renderercell"});
Ext.create({"xtype":"button"});
Ext.require(['Ext.grid.plugin.Editable', 'Ext.grid.plugin.CellEditing', 'Ext.data.validator.Presence', 'Ext.data.validator.Number', 'Ext.data.validator.Date', 'Ext.Toast', 'Ext.grid.plugin.Clipboard']);
Ext.create('Ext.data.Store', {
  modelR1022: modelR1022,
  autoLoad: true,
  rootVisible: false,
  proxy: {
    type: 'ajax',
    url: 'http://94.73.212.60:3000/r1022/list.json',
    reader: {
      type: 'json',
      rootProperty: 'data'
    }
  }
});
Ext.create('Ext.data.Store', {
  modelMpe1gem: modelMpe1gem,
  rootVisible: false,
  paramsAsJson: true,
  proxy: {
    type: 'ajax',
    url: 'http://94.73.212.60:3000/list',
    reader: {
      type: 'json',
      rootProperty: 'data'
    },
    actionMethods: {
      create: 'POST',
      read: 'POST',
      update: 'POST',
      destroy: 'POST'
    }
  }
});
Ext.create({
  xtype: 'container',
  title: '\u041F\u043B\u0430\u043D\u0438\u0440\u043E\u0432\u0430\u043D\u0438\u0435 \u043F\u043E\u0441\u0442\u0430\u0432\u043E\u043A',
  shadow: true,
  layout: 'hbox',
  padding: '30'
});
Ext.create({
  xtype: 'grid',
  store: this.store_R1022,
  plugins: {
    selectionreplicator: true,
    clipboard: true
  },
  shadow: true,
  width: 280,
  dataIndex: 'grid',
  onSelectionChange: this.onSelectionChange,
  selectable: _extends({}, selectable),
  platformConfig: {
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
  }
});
Ext.create({
  xtype: 'column',
  text: '\u0420\u0435\u0433\u0438\u043E\u043D\u044B',
  dataIndex: 'p02',
  flex: 3,
  resizable: true,
  editable: true,
  responsiveConfig: (_ref = {}, _defineProperty(_ref, small, {
    hidden: true
  }), _defineProperty(_ref, medium, {
    hidden: false
  }), _ref)
});
Ext.create({
  xtype: 'container',
  shadow: true,
  layout: 'vbox',
  defaults: {
    margin: 10
  }
});
Ext.create({
  xtype: 'panel',
  shadow: true,
  layout: 'hbox',
  width: 800,
  height: 100,
  split: true
});
Ext.create({
  xtype: 'panel',
  shadow: true,
  layout: 'hbox',
  width: 800,
  height: 300,
  split: true
});
Ext.create({
  xtype: 'grid',
  store: this.store_Mpe1gem,
  dataIndex: 'grid2'
});
Ext.create({
  xtype: 'column',
  resizable: true,
  text: '\u041E\u0440\u0433\u0430\u043D\u0438\u0437\u0430\u0446\u0438\u044F \u0438\u0441\u043F\u043E\u043B\u043D\u0438\u0442\u0435\u043B\u044C'
});
Ext.create({
  xtype: 'column',
  dataIndex: 'naim_org',
  text: '<br>\u041D\u0430\u0438\u043C\u0435\u043D\u043E<br>\u0432\u0430\u043D\u0438\u0435<br><br>'
});
Ext.create({
  xtype: 'column',
  dataIndex: 'adr_fact',
  text: '\u041C\u0435\u0441\u0442\u043E<br>\u043D\u0430\u0445\u043E\u0436\u0434\u0435\u043D\u0438\u0435'
});
Ext.create({
  xtype: 'column',
  dataIndex: 'inn',
  text: '\u0418\u041D\u041D'
});
Ext.create({
  xtype: 'column',
  text: '\u041F\u043B\u0430\u0437\u043C\u0430 \u0441\u0432\u0435\u0436\u0435\u0437\u0430\u043C\u043E\u0440.',
  resizable: true
});
Ext.create({
  xtype: 'column',
  dataIndex: 'plazma_max',
  text: '\u041C\u0430\u043A\u0441.<br>\u043E\u0431.<br>(\u0442\u044B\u0441.<br>\u043B\u0438\u0442\u0440\u043E\u0432)<br>'
});
Ext.create({
  xtype: 'column',
  dataIndex: 'plazma_cena',
  text: '\u0426\u0435\u043D\u0430(\u0442\u044B\u0441. <br>\u0440\u0443\u0431. \u0437\u0430 \u043E\u0434\u0438\u043D <br>\u043B\u0438\u0442\u0440'
});
Ext.create({
  xtype: 'column',
  text: '\u042D\u0440\u0438\u0442\u0440\u043E\u0446\u0438\u0442\u0430\u0440\u043D\u0430\u044F \u043C\u0430\u0441\u0441\u0430'
});
Ext.create({
  xtype: 'column',
  dataIndex: 'erm_max',
  text: '\u041C\u0430\u043A\u0441.<br>\u043E\u0431.<br>(\u0442\u044B\u0441.<br>\u043B\u0438\u0442\u0440\u043E\u0432)<br>'
});
Ext.create({
  xtype: 'column',
  dataIndex: 'erm_cena',
  text: '\u0426\u0435\u043D\u0430(\u0442\u044B\u0441. <br>\u0440\u0443\u0431. \u0437\u0430 \u043E\u0434\u0438\u043D <br>\u043B\u0438\u0442\u0440'
});
Ext.create({
  xtype: 'column',
  dataIndex: 'inn',
  text: '\u0418\u043C\u043C\u0443\u043D\u043E\u0433\u043B\u043E\u0431\u0443\u043B\u0438\u043D \u0447\u0435\u043B\u043E\u0432\u0435\u043A\u0430'
});
Ext.create({
  xtype: 'column',
  dataIndex: 'inn',
  text: '\u041C\u0430\u043A\u0441.<br>\u043E\u0431.<br>(\u0442\u044B\u0441.<br>\u043B\u0438\u0442\u0440\u043E\u0432)<br>'
});
Ext.create({
  xtype: 'column',
  dataIndex: 'inn',
  text: '\u0426\u0435\u043D\u0430(\u0442\u044B\u0441. <br>\u0440\u0443\u0431. \u0437\u0430 \u043E\u0434\u0438\u043D <br>\u043B\u0438\u0442\u0440'
});
Ext.create({
  xtype: 'column',
  dataIndex: 'inn',
  text: '\u0410\u043B\u044C\u0431\u0443\u043C\u0438\u043D 10-\u043F\u0440\u043E\u0446\u0435\u043D\u0442\u043D\u044B\u0439'
});
Ext.create({
  xtype: 'column',
  dataIndex: 'inn',
  text: '\u041C\u0430\u043A\u0441.<br>\u043E\u0431.<br>(\u0442\u044B\u0441.<br>\u043B\u0438\u0442\u0440\u043E\u0432)<br>'
});
Ext.create({
  xtype: 'column',
  dataIndex: 'inn',
  text: '\u0426\u0435\u043D\u0430(\u0442\u044B\u0441. <br>\u0440\u0443\u0431. \u0437\u0430 \u043E\u0434\u0438\u043D <br>\u043B\u0438\u0442\u0440'
});
Ext.create({"xtype":"column"});
Ext.create({"xtype":"panel"});
Ext.create({"xtype":"container"});
Ext.create({"xtype":"grid"});
Ext.create({"xtype":"searchfield"});
Ext.create({"xtype":"toolbar"});
Ext.create({"xtype":"datepickerfield"});
Ext.create({"xtype":"renderercell"});
Ext.create({"xtype":"button"});
Ext.require(['Ext.grid.plugin.Editable', 'Ext.grid.plugin.CellEditing', 'Ext.data.validator.Presence', 'Ext.data.validator.Number', 'Ext.data.validator.Date', 'Ext.Toast', 'Ext.grid.plugin.Clipboard']);
Ext.create('Ext.data.Store', {
  modelR1022: modelR1022,
  autoLoad: true,
  rootVisible: false,
  proxy: {
    type: 'ajax',
    url: 'http://94.73.212.60:3000/r1022/list.json',
    reader: {
      type: 'json',
      rootProperty: 'data'
    }
  }
});
Ext.create('Ext.data.Store', {
  modelMpe1gem: modelMpe1gem,
  rootVisible: false,
  paramsAsJson: true,
  proxy: {
    type: 'ajax',
    url: 'http://94.73.212.60:3000/list',
    reader: {
      type: 'json',
      rootProperty: 'data'
    },
    actionMethods: {
      create: 'POST',
      read: 'POST',
      update: 'POST',
      destroy: 'POST'
    }
  }
});
Ext.create({
  xtype: 'container',
  title: '\u041F\u043B\u0430\u043D\u0438\u0440\u043E\u0432\u0430\u043D\u0438\u0435 \u043F\u043E\u0441\u0442\u0430\u0432\u043E\u043A',
  shadow: true,
  layout: 'hbox',
  padding: '30'
});
Ext.create({
  xtype: 'grid',
  store: this.store_R1022,
  plugins: {
    selectionreplicator: true,
    clipboard: true
  },
  shadow: true,
  width: 280,
  dataIndex: 'grid',
  onSelectionChange: this.onSelectionChange,
  selectable: _extends({}, selectable),
  platformConfig: {
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
  }
});
Ext.create({
  xtype: 'column',
  text: '\u0420\u0435\u0433\u0438\u043E\u043D\u044B',
  dataIndex: 'p02',
  flex: 3,
  resizable: true,
  editable: true,
  responsiveConfig: (_ref = {}, _defineProperty(_ref, small, {
    hidden: true
  }), _defineProperty(_ref, medium, {
    hidden: false
  }), _ref)
});
Ext.create({
  xtype: 'container',
  shadow: true,
  layout: 'vbox',
  defaults: {
    margin: 10
  }
});
Ext.create({
  xtype: 'panel',
  shadow: true,
  layout: 'hbox',
  width: 800,
  height: 100,
  split: true
});
Ext.create({
  xtype: 'panel',
  shadow: true,
  layout: 'hbox',
  width: 800,
  height: 300,
  split: true
});
Ext.create({
  xtype: 'grid',
  store: this.store_Mpe1gem,
  dataIndex: 'grid2'
});
Ext.create({
  xtype: 'column',
  resizable: true,
  text: '\u041E\u0440\u0433\u0430\u043D\u0438\u0437\u0430\u0446\u0438\u044F \u0438\u0441\u043F\u043E\u043B\u043D\u0438\u0442\u0435\u043B\u044C'
});
Ext.create({
  xtype: 'column',
  dataIndex: 'naim_org',
  text: '<br>\u041D\u0430\u0438\u043C\u0435\u043D\u043E<br>\u0432\u0430\u043D\u0438\u0435<br><br>'
});
Ext.create({
  xtype: 'column',
  dataIndex: 'adr_fact',
  text: '\u041C\u0435\u0441\u0442\u043E<br>\u043D\u0430\u0445\u043E\u0436\u0434\u0435\u043D\u0438\u0435'
});
Ext.create({
  xtype: 'column',
  dataIndex: 'inn',
  text: '\u0418\u041D\u041D'
});
Ext.create({
  xtype: 'column',
  text: '\u041F\u043B\u0430\u0437\u043C\u0430 \u0441\u0432\u0435\u0436\u0435\u0437\u0430\u043C\u043E\u0440.',
  resizable: true
});
Ext.create({
  xtype: 'column',
  dataIndex: 'plazma_max',
  text: '\u041C\u0430\u043A\u0441.<br>\u043E\u0431.<br>(\u0442\u044B\u0441.<br>\u043B\u0438\u0442\u0440\u043E\u0432)<br>'
});
Ext.create({
  xtype: 'column',
  dataIndex: 'plazma_cena',
  text: '\u0426\u0435\u043D\u0430(\u0442\u044B\u0441. <br>\u0440\u0443\u0431. \u0437\u0430 \u043E\u0434\u0438\u043D <br>\u043B\u0438\u0442\u0440'
});
Ext.create({
  xtype: 'column',
  text: '\u042D\u0440\u0438\u0442\u0440\u043E\u0446\u0438\u0442\u0430\u0440\u043D\u0430\u044F \u043C\u0430\u0441\u0441\u0430'
});
Ext.create({
  xtype: 'column',
  dataIndex: 'erm_max',
  text: '\u041C\u0430\u043A\u0441.<br>\u043E\u0431.<br>(\u0442\u044B\u0441.<br>\u043B\u0438\u0442\u0440\u043E\u0432)<br>'
});
Ext.create({
  xtype: 'column',
  dataIndex: 'erm_cena',
  text: '\u0426\u0435\u043D\u0430(\u0442\u044B\u0441. <br>\u0440\u0443\u0431. \u0437\u0430 \u043E\u0434\u0438\u043D <br>\u043B\u0438\u0442\u0440'
});
Ext.create({
  xtype: 'column',
  dataIndex: 'immg_max',
  text: '\u0418\u043C\u043C\u0443\u043D\u043E\u0433\u043B\u043E\u0431\u0443\u043B\u0438\u043D \u0447\u0435\u043B\u043E\u0432\u0435\u043A\u0430'
});
Ext.create({
  xtype: 'column',
  dataIndex: 'inn',
  text: '\u041C\u0430\u043A\u0441.<br>\u043E\u0431.<br>(\u0442\u044B\u0441.<br>\u043B\u0438\u0442\u0440\u043E\u0432)<br>'
});
Ext.create({
  xtype: 'column',
  dataIndex: 'inn',
  text: '\u0426\u0435\u043D\u0430(\u0442\u044B\u0441. <br>\u0440\u0443\u0431. \u0437\u0430 \u043E\u0434\u0438\u043D <br>\u043B\u0438\u0442\u0440'
});
Ext.create({
  xtype: 'column',
  dataIndex: 'inn',
  text: '\u0410\u043B\u044C\u0431\u0443\u043C\u0438\u043D 10-\u043F\u0440\u043E\u0446\u0435\u043D\u0442\u043D\u044B\u0439'
});
Ext.create({
  xtype: 'column',
  dataIndex: 'inn',
  text: '\u041C\u0430\u043A\u0441.<br>\u043E\u0431.<br>(\u0442\u044B\u0441.<br>\u043B\u0438\u0442\u0440\u043E\u0432)<br>'
});
Ext.create({
  xtype: 'column',
  dataIndex: 'inn',
  text: '\u0426\u0435\u043D\u0430(\u0442\u044B\u0441. <br>\u0440\u0443\u0431. \u0437\u0430 \u043E\u0434\u0438\u043D <br>\u043B\u0438\u0442\u0440'
});
Ext.create({"xtype":"column"});
Ext.create({"xtype":"panel"});
Ext.create({"xtype":"container"});
Ext.create({"xtype":"grid"});
Ext.create({"xtype":"searchfield"});
Ext.create({"xtype":"toolbar"});
Ext.create({"xtype":"datepickerfield"});
Ext.create({"xtype":"renderercell"});
Ext.create({"xtype":"button"});
Ext.require(['Ext.grid.plugin.Editable', 'Ext.grid.plugin.CellEditing', 'Ext.data.validator.Presence', 'Ext.data.validator.Number', 'Ext.data.validator.Date', 'Ext.Toast', 'Ext.grid.plugin.Clipboard']);
Ext.create('Ext.data.Store', {
  modelR1022: modelR1022,
  autoLoad: true,
  rootVisible: false,
  proxy: {
    type: 'ajax',
    url: 'http://94.73.212.60:3000/r1022/list.json',
    reader: {
      type: 'json',
      rootProperty: 'data'
    }
  }
});
Ext.create('Ext.data.Store', {
  modelMpe1gem: modelMpe1gem,
  rootVisible: false,
  paramsAsJson: true,
  proxy: {
    type: 'ajax',
    url: 'http://94.73.212.60:3000/list',
    reader: {
      type: 'json',
      rootProperty: 'data'
    },
    actionMethods: {
      create: 'POST',
      read: 'POST',
      update: 'POST',
      destroy: 'POST'
    }
  }
});
Ext.create({
  xtype: 'container',
  title: '\u041F\u043B\u0430\u043D\u0438\u0440\u043E\u0432\u0430\u043D\u0438\u0435 \u043F\u043E\u0441\u0442\u0430\u0432\u043E\u043A',
  shadow: true,
  layout: 'hbox',
  padding: '30'
});
Ext.create({
  xtype: 'grid',
  store: this.store_R1022,
  plugins: {
    selectionreplicator: true,
    clipboard: true
  },
  shadow: true,
  width: 280,
  dataIndex: 'grid',
  onSelectionChange: this.onSelectionChange,
  selectable: _extends({}, selectable),
  platformConfig: {
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
  }
});
Ext.create({
  xtype: 'column',
  text: '\u0420\u0435\u0433\u0438\u043E\u043D\u044B',
  dataIndex: 'p02',
  flex: 3,
  resizable: true,
  editable: true,
  responsiveConfig: (_ref = {}, _defineProperty(_ref, small, {
    hidden: true
  }), _defineProperty(_ref, medium, {
    hidden: false
  }), _ref)
});
Ext.create({
  xtype: 'container',
  shadow: true,
  layout: 'vbox',
  defaults: {
    margin: 10
  }
});
Ext.create({
  xtype: 'panel',
  shadow: true,
  layout: 'hbox',
  width: 800,
  height: 100,
  split: true
});
Ext.create({
  xtype: 'panel',
  shadow: true,
  layout: 'hbox',
  width: 800,
  height: 300,
  split: true
});
Ext.create({
  xtype: 'grid',
  store: this.store_Mpe1gem,
  dataIndex: 'grid2'
});
Ext.create({
  xtype: 'column',
  resizable: true,
  text: '\u041E\u0440\u0433\u0430\u043D\u0438\u0437\u0430\u0446\u0438\u044F \u0438\u0441\u043F\u043E\u043B\u043D\u0438\u0442\u0435\u043B\u044C'
});
Ext.create({
  xtype: 'column',
  dataIndex: 'naim_org',
  text: '<br>\u041D\u0430\u0438\u043C\u0435\u043D\u043E<br>\u0432\u0430\u043D\u0438\u0435<br><br>'
});
Ext.create({
  xtype: 'column',
  dataIndex: 'adr_fact',
  text: '\u041C\u0435\u0441\u0442\u043E<br>\u043D\u0430\u0445\u043E\u0436\u0434\u0435\u043D\u0438\u0435'
});
Ext.create({
  xtype: 'column',
  dataIndex: 'inn',
  text: '\u0418\u041D\u041D'
});
Ext.create({
  xtype: 'column',
  text: '\u041F\u043B\u0430\u0437\u043C\u0430 \u0441\u0432\u0435\u0436\u0435\u0437\u0430\u043C\u043E\u0440.',
  resizable: true
});
Ext.create({
  xtype: 'column',
  dataIndex: 'plazma_max',
  text: '\u041C\u0430\u043A\u0441.<br>\u043E\u0431.<br>(\u0442\u044B\u0441.<br>\u043B\u0438\u0442\u0440\u043E\u0432)<br>'
});
Ext.create({
  xtype: 'column',
  dataIndex: 'plazma_cena',
  text: '\u0426\u0435\u043D\u0430(\u0442\u044B\u0441. <br>\u0440\u0443\u0431. \u0437\u0430 \u043E\u0434\u0438\u043D <br>\u043B\u0438\u0442\u0440'
});
Ext.create({
  xtype: 'column',
  text: '\u042D\u0440\u0438\u0442\u0440\u043E\u0446\u0438\u0442\u0430\u0440\u043D\u0430\u044F \u043C\u0430\u0441\u0441\u0430'
});
Ext.create({
  xtype: 'column',
  dataIndex: 'erm_max',
  text: '\u041C\u0430\u043A\u0441.<br>\u043E\u0431.<br>(\u0442\u044B\u0441.<br>\u043B\u0438\u0442\u0440\u043E\u0432)<br>'
});
Ext.create({
  xtype: 'column',
  dataIndex: 'erm_cena',
  text: '\u0426\u0435\u043D\u0430(\u0442\u044B\u0441. <br>\u0440\u0443\u0431. \u0437\u0430 \u043E\u0434\u0438\u043D <br>\u043B\u0438\u0442\u0440'
});
Ext.create({
  xtype: 'column',
  text: '\u0418\u043C\u043C\u0443\u043D\u043E\u0433\u043B\u043E\u0431\u0443\u043B\u0438\u043D \u0447\u0435\u043B\u043E\u0432\u0435\u043A\u0430'
});
Ext.create({
  xtype: 'column',
  dataIndex: 'immg_max',
  text: '\u041C\u0430\u043A\u0441.<br>\u043E\u0431.<br>(\u0442\u044B\u0441.<br>\u043B\u0438\u0442\u0440\u043E\u0432)<br>'
});
Ext.create({
  xtype: 'column',
  dataIndex: 'immg_cena',
  text: '\u0426\u0435\u043D\u0430(\u0442\u044B\u0441. <br>\u0440\u0443\u0431. \u0437\u0430 \u043E\u0434\u0438\u043D <br>\u043B\u0438\u0442\u0440'
});
Ext.create({
  xtype: 'column',
  dataIndex: 'inn',
  text: '\u0410\u043B\u044C\u0431\u0443\u043C\u0438\u043D 10-\u043F\u0440\u043E\u0446\u0435\u043D\u0442\u043D\u044B\u0439'
});
Ext.create({
  xtype: 'column',
  dataIndex: 'inn',
  text: '\u041C\u0430\u043A\u0441.<br>\u043E\u0431.<br>(\u0442\u044B\u0441.<br>\u043B\u0438\u0442\u0440\u043E\u0432)<br>'
});
Ext.create({
  xtype: 'column',
  dataIndex: 'inn',
  text: '\u0426\u0435\u043D\u0430(\u0442\u044B\u0441. <br>\u0440\u0443\u0431. \u0437\u0430 \u043E\u0434\u0438\u043D <br>\u043B\u0438\u0442\u0440'
});
Ext.create({"xtype":"column"});
Ext.create({"xtype":"panel"});
Ext.create({"xtype":"container"});
Ext.create({"xtype":"grid"});
Ext.create({"xtype":"searchfield"});
Ext.create({"xtype":"toolbar"});
Ext.create({"xtype":"datepickerfield"});
Ext.create({"xtype":"renderercell"});
Ext.create({"xtype":"button"});
Ext.require(['Ext.grid.plugin.Editable', 'Ext.grid.plugin.CellEditing', 'Ext.data.validator.Presence', 'Ext.data.validator.Number', 'Ext.data.validator.Date', 'Ext.Toast', 'Ext.grid.plugin.Clipboard']);
Ext.create('Ext.data.Store', {
  modelR1022: modelR1022,
  autoLoad: true,
  rootVisible: false,
  proxy: {
    type: 'ajax',
    url: 'http://94.73.212.60:3000/r1022/list.json',
    reader: {
      type: 'json',
      rootProperty: 'data'
    }
  }
});
Ext.create('Ext.data.Store', {
  modelMpe1gem: modelMpe1gem,
  rootVisible: false,
  paramsAsJson: true,
  proxy: {
    type: 'ajax',
    url: 'http://94.73.212.60:3000/list',
    reader: {
      type: 'json',
      rootProperty: 'data'
    },
    actionMethods: {
      create: 'POST',
      read: 'POST',
      update: 'POST',
      destroy: 'POST'
    }
  }
});
Ext.create({
  xtype: 'container',
  title: '\u041F\u043B\u0430\u043D\u0438\u0440\u043E\u0432\u0430\u043D\u0438\u0435 \u043F\u043E\u0441\u0442\u0430\u0432\u043E\u043A',
  shadow: true,
  layout: 'hbox',
  padding: '30'
});
Ext.create({
  xtype: 'grid',
  store: this.store_R1022,
  plugins: {
    selectionreplicator: true,
    clipboard: true
  },
  shadow: true,
  width: 280,
  dataIndex: 'grid',
  onSelectionChange: this.onSelectionChange,
  selectable: _extends({}, selectable),
  platformConfig: {
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
  }
});
Ext.create({
  xtype: 'column',
  text: '\u0420\u0435\u0433\u0438\u043E\u043D\u044B',
  dataIndex: 'p02',
  flex: 3,
  resizable: true,
  editable: true,
  responsiveConfig: (_ref = {}, _defineProperty(_ref, small, {
    hidden: true
  }), _defineProperty(_ref, medium, {
    hidden: false
  }), _ref)
});
Ext.create({
  xtype: 'container',
  shadow: true,
  layout: 'vbox',
  defaults: {
    margin: 10
  }
});
Ext.create({
  xtype: 'panel',
  shadow: true,
  layout: 'hbox',
  width: 800,
  height: 100,
  split: true
});
Ext.create({
  xtype: 'panel',
  shadow: true,
  layout: 'hbox',
  width: 800,
  height: 300,
  split: true
});
Ext.create({
  xtype: 'grid',
  store: this.store_Mpe1gem,
  dataIndex: 'grid2'
});
Ext.create({
  xtype: 'column',
  resizable: true,
  text: '\u041E\u0440\u0433\u0430\u043D\u0438\u0437\u0430\u0446\u0438\u044F \u0438\u0441\u043F\u043E\u043B\u043D\u0438\u0442\u0435\u043B\u044C'
});
Ext.create({
  xtype: 'column',
  dataIndex: 'naim_org',
  text: '<br>\u041D\u0430\u0438\u043C\u0435\u043D\u043E<br>\u0432\u0430\u043D\u0438\u0435<br><br>'
});
Ext.create({
  xtype: 'column',
  dataIndex: 'adr_fact',
  text: '\u041C\u0435\u0441\u0442\u043E<br>\u043D\u0430\u0445\u043E\u0436\u0434\u0435\u043D\u0438\u0435'
});
Ext.create({
  xtype: 'column',
  dataIndex: 'inn',
  text: '\u0418\u041D\u041D'
});
Ext.create({
  xtype: 'column',
  text: '\u041F\u043B\u0430\u0437\u043C\u0430 \u0441\u0432\u0435\u0436\u0435\u0437\u0430\u043C\u043E\u0440.',
  resizable: true
});
Ext.create({
  xtype: 'column',
  dataIndex: 'plazma_max',
  text: '\u041C\u0430\u043A\u0441.<br>\u043E\u0431.<br>(\u0442\u044B\u0441.<br>\u043B\u0438\u0442\u0440\u043E\u0432)<br>'
});
Ext.create({
  xtype: 'column',
  dataIndex: 'plazma_cena',
  text: '\u0426\u0435\u043D\u0430(\u0442\u044B\u0441. <br>\u0440\u0443\u0431. \u0437\u0430 \u043E\u0434\u0438\u043D <br>\u043B\u0438\u0442\u0440'
});
Ext.create({
  xtype: 'column',
  text: '\u042D\u0440\u0438\u0442\u0440\u043E\u0446\u0438\u0442\u0430\u0440\u043D\u0430\u044F \u043C\u0430\u0441\u0441\u0430'
});
Ext.create({
  xtype: 'column',
  dataIndex: 'erm_max',
  text: '\u041C\u0430\u043A\u0441.<br>\u043E\u0431.<br>(\u0442\u044B\u0441.<br>\u043B\u0438\u0442\u0440\u043E\u0432)<br>'
});
Ext.create({
  xtype: 'column',
  dataIndex: 'erm_cena',
  text: '\u0426\u0435\u043D\u0430(\u0442\u044B\u0441. <br>\u0440\u0443\u0431. \u0437\u0430 \u043E\u0434\u0438\u043D <br>\u043B\u0438\u0442\u0440'
});
Ext.create({
  xtype: 'column',
  text: '\u0418\u043C\u043C\u0443\u043D\u043E\u0433\u043B\u043E\u0431\u0443\u043B\u0438\u043D \u0447\u0435\u043B\u043E\u0432\u0435\u043A\u0430'
});
Ext.create({
  xtype: 'column',
  dataIndex: 'immg_max',
  text: '\u041C\u0430\u043A\u0441.<br>\u043E\u0431.<br>(\u0442\u044B\u0441.<br>\u043B\u0438\u0442\u0440\u043E\u0432)<br>'
});
Ext.create({
  xtype: 'column',
  dataIndex: 'immg_cena',
  text: '\u0426\u0435\u043D\u0430(\u0442\u044B\u0441. <br>\u0440\u0443\u0431. \u0437\u0430 \u043E\u0434\u0438\u043D <br>\u043B\u0438\u0442\u0440'
});
Ext.create({
  xtype: 'column',
  text: '\u0410\u043B\u044C\u0431\u0443\u043C\u0438\u043D 10-\u043F\u0440\u043E\u0446\u0435\u043D\u0442\u043D\u044B\u0439'
});
Ext.create({
  xtype: 'column',
  dataIndex: 'immg_max',
  text: '\u041C\u0430\u043A\u0441.<br>\u043E\u0431.<br>(\u0442\u044B\u0441.<br>\u043B\u0438\u0442\u0440\u043E\u0432)<br>'
});
Ext.create({
  xtype: 'column',
  dataIndex: 'inn',
  text: '\u0426\u0435\u043D\u0430(\u0442\u044B\u0441. <br>\u0440\u0443\u0431. \u0437\u0430 \u043E\u0434\u0438\u043D <br>\u043B\u0438\u0442\u0440'
});
Ext.create({"xtype":"column"});
Ext.create({"xtype":"panel"});
Ext.create({"xtype":"container"});
Ext.create({"xtype":"grid"});
Ext.create({"xtype":"searchfield"});
Ext.create({"xtype":"toolbar"});
Ext.create({"xtype":"datepickerfield"});
Ext.create({"xtype":"renderercell"});
Ext.create({"xtype":"button"});
Ext.require(['Ext.grid.plugin.Editable', 'Ext.grid.plugin.CellEditing', 'Ext.data.validator.Presence', 'Ext.data.validator.Number', 'Ext.data.validator.Date', 'Ext.Toast', 'Ext.grid.plugin.Clipboard']);
Ext.create('Ext.data.Store', {
  modelR1022: modelR1022,
  autoLoad: true,
  rootVisible: false,
  proxy: {
    type: 'ajax',
    url: 'http://94.73.212.60:3000/r1022/list.json',
    reader: {
      type: 'json',
      rootProperty: 'data'
    }
  }
});
Ext.create('Ext.data.Store', {
  modelMpe1gem: modelMpe1gem,
  rootVisible: false,
  paramsAsJson: true,
  proxy: {
    type: 'ajax',
    url: 'http://94.73.212.60:3000/list',
    reader: {
      type: 'json',
      rootProperty: 'data'
    },
    actionMethods: {
      create: 'POST',
      read: 'POST',
      update: 'POST',
      destroy: 'POST'
    }
  }
});
Ext.create({
  xtype: 'container',
  title: '\u041F\u043B\u0430\u043D\u0438\u0440\u043E\u0432\u0430\u043D\u0438\u0435 \u043F\u043E\u0441\u0442\u0430\u0432\u043E\u043A',
  shadow: true,
  layout: 'hbox',
  padding: '30'
});
Ext.create({
  xtype: 'grid',
  store: this.store_R1022,
  plugins: {
    selectionreplicator: true,
    clipboard: true
  },
  shadow: true,
  width: 280,
  dataIndex: 'grid',
  onSelectionChange: this.onSelectionChange,
  selectable: _extends({}, selectable),
  platformConfig: {
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
  }
});
Ext.create({
  xtype: 'column',
  text: '\u0420\u0435\u0433\u0438\u043E\u043D\u044B',
  dataIndex: 'p02',
  flex: 3,
  resizable: true,
  editable: true,
  responsiveConfig: (_ref = {}, _defineProperty(_ref, small, {
    hidden: true
  }), _defineProperty(_ref, medium, {
    hidden: false
  }), _ref)
});
Ext.create({
  xtype: 'container',
  shadow: true,
  layout: 'vbox',
  defaults: {
    margin: 10
  }
});
Ext.create({
  xtype: 'panel',
  shadow: true,
  layout: 'hbox',
  width: 800,
  height: 100,
  split: true
});
Ext.create({
  xtype: 'panel',
  shadow: true,
  layout: 'hbox',
  width: 800,
  height: 300,
  split: true
});
Ext.create({
  xtype: 'grid',
  store: this.store_Mpe1gem,
  dataIndex: 'grid2'
});
Ext.create({
  xtype: 'column',
  resizable: true,
  text: '\u041E\u0440\u0433\u0430\u043D\u0438\u0437\u0430\u0446\u0438\u044F \u0438\u0441\u043F\u043E\u043B\u043D\u0438\u0442\u0435\u043B\u044C'
});
Ext.create({
  xtype: 'column',
  dataIndex: 'naim_org',
  text: '<br>\u041D\u0430\u0438\u043C\u0435\u043D\u043E<br>\u0432\u0430\u043D\u0438\u0435<br><br>'
});
Ext.create({
  xtype: 'column',
  dataIndex: 'adr_fact',
  text: '\u041C\u0435\u0441\u0442\u043E<br>\u043D\u0430\u0445\u043E\u0436\u0434\u0435\u043D\u0438\u0435'
});
Ext.create({
  xtype: 'column',
  dataIndex: 'inn',
  text: '\u0418\u041D\u041D'
});
Ext.create({
  xtype: 'column',
  text: '\u041F\u043B\u0430\u0437\u043C\u0430 \u0441\u0432\u0435\u0436\u0435\u0437\u0430\u043C\u043E\u0440.',
  resizable: true
});
Ext.create({
  xtype: 'column',
  dataIndex: 'plazma_max',
  text: '\u041C\u0430\u043A\u0441.<br>\u043E\u0431.<br>(\u0442\u044B\u0441.<br>\u043B\u0438\u0442\u0440\u043E\u0432)<br>'
});
Ext.create({
  xtype: 'column',
  dataIndex: 'plazma_cena',
  text: '\u0426\u0435\u043D\u0430(\u0442\u044B\u0441. <br>\u0440\u0443\u0431. \u0437\u0430 \u043E\u0434\u0438\u043D <br>\u043B\u0438\u0442\u0440'
});
Ext.create({
  xtype: 'column',
  text: '\u042D\u0440\u0438\u0442\u0440\u043E\u0446\u0438\u0442\u0430\u0440\u043D\u0430\u044F \u043C\u0430\u0441\u0441\u0430'
});
Ext.create({
  xtype: 'column',
  dataIndex: 'erm_max',
  text: '\u041C\u0430\u043A\u0441.<br>\u043E\u0431.<br>(\u0442\u044B\u0441.<br>\u043B\u0438\u0442\u0440\u043E\u0432)<br>'
});
Ext.create({
  xtype: 'column',
  dataIndex: 'erm_cena',
  text: '\u0426\u0435\u043D\u0430(\u0442\u044B\u0441. <br>\u0440\u0443\u0431. \u0437\u0430 \u043E\u0434\u0438\u043D <br>\u043B\u0438\u0442\u0440'
});
Ext.create({
  xtype: 'column',
  text: '\u0418\u043C\u043C\u0443\u043D\u043E\u0433\u043B\u043E\u0431\u0443\u043B\u0438\u043D \u0447\u0435\u043B\u043E\u0432\u0435\u043A\u0430'
});
Ext.create({
  xtype: 'column',
  dataIndex: 'immg_max',
  text: '\u041C\u0430\u043A\u0441.<br>\u043E\u0431.<br>(\u0442\u044B\u0441.<br>\u043B\u0438\u0442\u0440\u043E\u0432)<br>'
});
Ext.create({
  xtype: 'column',
  dataIndex: 'immg_cena',
  text: '\u0426\u0435\u043D\u0430(\u0442\u044B\u0441. <br>\u0440\u0443\u0431. \u0437\u0430 \u043E\u0434\u0438\u043D <br>\u043B\u0438\u0442\u0440'
});
Ext.create({
  xtype: 'column',
  text: '\u0410\u043B\u044C\u0431\u0443\u043C\u0438\u043D 10-\u043F\u0440\u043E\u0446\u0435\u043D\u0442\u043D\u044B\u0439'
});
Ext.create({
  xtype: 'column',
  dataIndex: 'immg_max',
  text: '\u041C\u0430\u043A\u0441.<br>\u043E\u0431.<br>(\u0442\u044B\u0441.<br>\u043B\u0438\u0442\u0440\u043E\u0432)<br>'
});
Ext.create({
  xtype: 'column',
  dataIndex: 'immg_cena',
  text: '\u0426\u0435\u043D\u0430(\u0442\u044B\u0441. <br>\u0440\u0443\u0431. \u0437\u0430 \u043E\u0434\u0438\u043D <br>\u043B\u0438\u0442\u0440'
});
Ext.create({"xtype":"column"});
Ext.create({"xtype":"panel"});
Ext.create({"xtype":"container"});
Ext.create({"xtype":"grid"});
Ext.create({"xtype":"searchfield"});
Ext.create({"xtype":"toolbar"});
Ext.create({"xtype":"datepickerfield"});
Ext.create({"xtype":"renderercell"});
Ext.create({"xtype":"button"});
Ext.require(['Ext.grid.plugin.Editable', 'Ext.grid.plugin.CellEditing', 'Ext.data.validator.Presence', 'Ext.data.validator.Number', 'Ext.data.validator.Date', 'Ext.Toast', 'Ext.grid.plugin.Clipboard']);
Ext.create('Ext.data.Store', {
  modelR1022: modelR1022,
  autoLoad: true,
  rootVisible: false,
  proxy: {
    type: 'ajax',
    url: 'http://94.73.212.60:3000/r1022/list.json',
    reader: {
      type: 'json',
      rootProperty: 'data'
    }
  }
});
Ext.create('Ext.data.Store', {
  modelMpe1gem: modelMpe1gem,
  rootVisible: false,
  paramsAsJson: true,
  proxy: {
    type: 'ajax',
    url: 'http://94.73.212.60:3000/list',
    reader: {
      type: 'json',
      rootProperty: 'data'
    },
    actionMethods: {
      create: 'POST',
      read: 'POST',
      update: 'POST',
      destroy: 'POST'
    }
  }
});
Ext.create({
  xtype: 'container',
  title: '\u041F\u043B\u0430\u043D\u0438\u0440\u043E\u0432\u0430\u043D\u0438\u0435 \u043F\u043E\u0441\u0442\u0430\u0432\u043E\u043A',
  shadow: true,
  layout: 'hbox',
  padding: '30'
});
Ext.create({
  xtype: 'grid',
  store: this.store_R1022,
  plugins: {
    selectionreplicator: true,
    clipboard: true
  },
  shadow: true,
  width: 280,
  dataIndex: 'grid',
  onSelectionChange: this.onSelectionChange,
  selectable: _extends({}, selectable),
  platformConfig: {
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
  }
});
Ext.create({
  xtype: 'column',
  text: '\u0420\u0435\u0433\u0438\u043E\u043D\u044B',
  dataIndex: 'p02',
  flex: 3,
  resizable: true,
  editable: true,
  responsiveConfig: (_ref = {}, _defineProperty(_ref, small, {
    hidden: true
  }), _defineProperty(_ref, medium, {
    hidden: false
  }), _ref)
});
Ext.create({
  xtype: 'container',
  shadow: true,
  layout: 'vbox',
  defaults: {
    margin: 10
  }
});
Ext.create({
  xtype: 'panel',
  shadow: true,
  layout: 'hbox',
  width: 800,
  height: 100,
  split: true
});
Ext.create({
  xtype: 'panel',
  shadow: true,
  layout: 'hbox',
  width: 800,
  height: 300,
  split: true
});
Ext.create({
  xtype: 'grid',
  store: this.store_Mpe1gem,
  dataIndex: 'grid2'
});
Ext.create({
  xtype: 'column',
  resizable: true,
  text: '\u041E\u0440\u0433\u0430\u043D\u0438\u0437\u0430\u0446\u0438\u044F \u0438\u0441\u043F\u043E\u043B\u043D\u0438\u0442\u0435\u043B\u044C'
});
Ext.create({
  xtype: 'column',
  dataIndex: 'naim_org',
  text: '<br>\u041D\u0430\u0438\u043C\u0435\u043D\u043E<br>\u0432\u0430\u043D\u0438\u0435<br><br>'
});
Ext.create({
  xtype: 'column',
  dataIndex: 'adr_fact',
  text: '\u041C\u0435\u0441\u0442\u043E<br>\u043D\u0430\u0445\u043E\u0436\u0434\u0435\u043D\u0438\u0435'
});
Ext.create({
  xtype: 'column',
  dataIndex: 'inn',
  text: '\u0418\u041D\u041D'
});
Ext.create({
  xtype: 'column',
  text: '\u041F\u043B\u0430\u0437\u043C\u0430 \u0441\u0432\u0435\u0436\u0435\u0437\u0430\u043C\u043E\u0440.',
  resizable: true
});
Ext.create({
  xtype: 'column',
  dataIndex: 'plazma_max',
  text: '\u041C\u0430\u043A\u0441.<br>\u043E\u0431.<br>(\u0442\u044B\u0441.<br>\u043B\u0438\u0442\u0440\u043E\u0432)<br>'
});
Ext.create({
  xtype: 'column',
  dataIndex: 'plazma_cena',
  text: '\u0426\u0435\u043D\u0430(\u0442\u044B\u0441. <br>\u0440\u0443\u0431. \u0437\u0430 \u043E\u0434\u0438\u043D <br>\u043B\u0438\u0442\u0440'
});
Ext.create({
  xtype: 'column',
  text: '\u042D\u0440\u0438\u0442\u0440\u043E\u0446\u0438\u0442\u0430\u0440\u043D\u0430\u044F \u043C\u0430\u0441\u0441\u0430'
});
Ext.create({
  xtype: 'column',
  dataIndex: 'erm_max',
  text: '\u041C\u0430\u043A\u0441.<br>\u043E\u0431.<br>(\u0442\u044B\u0441.<br>\u043B\u0438\u0442\u0440\u043E\u0432)<br>'
});
Ext.create({
  xtype: 'column',
  dataIndex: 'erm_cena',
  text: '\u0426\u0435\u043D\u0430(\u0442\u044B\u0441. <br>\u0440\u0443\u0431. \u0437\u0430 \u043E\u0434\u0438\u043D <br>\u043B\u0438\u0442\u0440'
});
Ext.create({
  xtype: 'column',
  text: '\u0418\u043C\u043C\u0443\u043D\u043E\u0433\u043B\u043E\u0431\u0443\u043B\u0438\u043D \u0447\u0435\u043B\u043E\u0432\u0435\u043A\u0430'
});
Ext.create({
  xtype: 'column',
  dataIndex: 'immg_max',
  text: '\u041C\u0430\u043A\u0441.<br>\u043E\u0431.<br>(\u0442\u044B\u0441.<br>\u043B\u0438\u0442\u0440\u043E\u0432)<br>'
});
Ext.create({
  xtype: 'column',
  dataIndex: 'immg_cena',
  text: '\u0426\u0435\u043D\u0430(\u0442\u044B\u0441. <br>\u0440\u0443\u0431. \u0437\u0430 \u043E\u0434\u0438\u043D <br>\u043B\u0438\u0442\u0440'
});
Ext.create({
  xtype: 'column',
  text: '\u0410\u043B\u044C\u0431\u0443\u043C\u0438\u043D 10-\u043F\u0440\u043E\u0446\u0435\u043D\u0442\u043D\u044B\u0439'
});
Ext.create({
  xtype: 'column',
  dataIndex: 'alb_max',
  text: '\u041C\u0430\u043A\u0441.<br>\u043E\u0431.<br>(\u0442\u044B\u0441.<br>\u043B\u0438\u0442\u0440\u043E\u0432)<br>'
});
Ext.create({
  xtype: 'column',
  dataIndex: 'immg_cena',
  text: '\u0426\u0435\u043D\u0430(\u0442\u044B\u0441. <br>\u0440\u0443\u0431. \u0437\u0430 \u043E\u0434\u0438\u043D <br>\u043B\u0438\u0442\u0440'
});
Ext.create({"xtype":"column"});
Ext.create({"xtype":"panel"});
Ext.create({"xtype":"container"});
Ext.create({"xtype":"grid"});
Ext.create({"xtype":"searchfield"});
Ext.create({"xtype":"toolbar"});
Ext.create({"xtype":"datepickerfield"});
Ext.create({"xtype":"renderercell"});
Ext.create({"xtype":"button"});
Ext.require(['Ext.grid.plugin.Editable', 'Ext.grid.plugin.CellEditing', 'Ext.data.validator.Presence', 'Ext.data.validator.Number', 'Ext.data.validator.Date', 'Ext.Toast', 'Ext.grid.plugin.Clipboard']);
Ext.create('Ext.data.Store', {
  modelR1022: modelR1022,
  autoLoad: true,
  rootVisible: false,
  proxy: {
    type: 'ajax',
    url: 'http://94.73.212.60:3000/r1022/list.json',
    reader: {
      type: 'json',
      rootProperty: 'data'
    }
  }
});
Ext.create('Ext.data.Store', {
  modelMpe1gem: modelMpe1gem,
  rootVisible: false,
  paramsAsJson: true,
  proxy: {
    type: 'ajax',
    url: 'http://94.73.212.60:3000/list',
    reader: {
      type: 'json',
      rootProperty: 'data'
    },
    actionMethods: {
      create: 'POST',
      read: 'POST',
      update: 'POST',
      destroy: 'POST'
    }
  }
});
Ext.create({
  xtype: 'container',
  title: '\u041F\u043B\u0430\u043D\u0438\u0440\u043E\u0432\u0430\u043D\u0438\u0435 \u043F\u043E\u0441\u0442\u0430\u0432\u043E\u043A',
  shadow: true,
  layout: 'hbox',
  padding: '30'
});
Ext.create({
  xtype: 'grid',
  store: this.store_R1022,
  plugins: {
    selectionreplicator: true,
    clipboard: true
  },
  shadow: true,
  width: 280,
  dataIndex: 'grid',
  onSelectionChange: this.onSelectionChange,
  selectable: _extends({}, selectable),
  platformConfig: {
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
  }
});
Ext.create({
  xtype: 'column',
  text: '\u0420\u0435\u0433\u0438\u043E\u043D\u044B',
  dataIndex: 'p02',
  flex: 3,
  resizable: true,
  editable: true,
  responsiveConfig: (_ref = {}, _defineProperty(_ref, small, {
    hidden: true
  }), _defineProperty(_ref, medium, {
    hidden: false
  }), _ref)
});
Ext.create({
  xtype: 'container',
  shadow: true,
  layout: 'vbox',
  defaults: {
    margin: 10
  }
});
Ext.create({
  xtype: 'panel',
  shadow: true,
  layout: 'hbox',
  width: 800,
  height: 100,
  split: true
});
Ext.create({
  xtype: 'panel',
  shadow: true,
  layout: 'hbox',
  width: 800,
  height: 300,
  split: true
});
Ext.create({
  xtype: 'grid',
  store: this.store_Mpe1gem,
  dataIndex: 'grid2'
});
Ext.create({
  xtype: 'column',
  resizable: true,
  text: '\u041E\u0440\u0433\u0430\u043D\u0438\u0437\u0430\u0446\u0438\u044F \u0438\u0441\u043F\u043E\u043B\u043D\u0438\u0442\u0435\u043B\u044C'
});
Ext.create({
  xtype: 'column',
  dataIndex: 'naim_org',
  text: '<br>\u041D\u0430\u0438\u043C\u0435\u043D\u043E<br>\u0432\u0430\u043D\u0438\u0435<br><br>'
});
Ext.create({
  xtype: 'column',
  dataIndex: 'adr_fact',
  text: '\u041C\u0435\u0441\u0442\u043E<br>\u043D\u0430\u0445\u043E\u0436\u0434\u0435\u043D\u0438\u0435'
});
Ext.create({
  xtype: 'column',
  dataIndex: 'inn',
  text: '\u0418\u041D\u041D'
});
Ext.create({
  xtype: 'column',
  text: '\u041F\u043B\u0430\u0437\u043C\u0430 \u0441\u0432\u0435\u0436\u0435\u0437\u0430\u043C\u043E\u0440.',
  resizable: true
});
Ext.create({
  xtype: 'column',
  dataIndex: 'plazma_max',
  text: '\u041C\u0430\u043A\u0441.<br>\u043E\u0431.<br>(\u0442\u044B\u0441.<br>\u043B\u0438\u0442\u0440\u043E\u0432)<br>'
});
Ext.create({
  xtype: 'column',
  dataIndex: 'plazma_cena',
  text: '\u0426\u0435\u043D\u0430(\u0442\u044B\u0441. <br>\u0440\u0443\u0431. \u0437\u0430 \u043E\u0434\u0438\u043D <br>\u043B\u0438\u0442\u0440'
});
Ext.create({
  xtype: 'column',
  text: '\u042D\u0440\u0438\u0442\u0440\u043E\u0446\u0438\u0442\u0430\u0440\u043D\u0430\u044F \u043C\u0430\u0441\u0441\u0430'
});
Ext.create({
  xtype: 'column',
  dataIndex: 'erm_max',
  text: '\u041C\u0430\u043A\u0441.<br>\u043E\u0431.<br>(\u0442\u044B\u0441.<br>\u043B\u0438\u0442\u0440\u043E\u0432)<br>'
});
Ext.create({
  xtype: 'column',
  dataIndex: 'erm_cena',
  text: '\u0426\u0435\u043D\u0430(\u0442\u044B\u0441. <br>\u0440\u0443\u0431. \u0437\u0430 \u043E\u0434\u0438\u043D <br>\u043B\u0438\u0442\u0440'
});
Ext.create({
  xtype: 'column',
  text: '\u0418\u043C\u043C\u0443\u043D\u043E\u0433\u043B\u043E\u0431\u0443\u043B\u0438\u043D \u0447\u0435\u043B\u043E\u0432\u0435\u043A\u0430'
});
Ext.create({
  xtype: 'column',
  dataIndex: 'immg_max',
  text: '\u041C\u0430\u043A\u0441.<br>\u043E\u0431.<br>(\u0442\u044B\u0441.<br>\u043B\u0438\u0442\u0440\u043E\u0432)<br>'
});
Ext.create({
  xtype: 'column',
  dataIndex: 'immg_cena',
  text: '\u0426\u0435\u043D\u0430(\u0442\u044B\u0441. <br>\u0440\u0443\u0431. \u0437\u0430 \u043E\u0434\u0438\u043D <br>\u043B\u0438\u0442\u0440'
});
Ext.create({
  xtype: 'column',
  text: '\u0410\u043B\u044C\u0431\u0443\u043C\u0438\u043D 10-\u043F\u0440\u043E\u0446\u0435\u043D\u0442\u043D\u044B\u0439'
});
Ext.create({
  xtype: 'column',
  dataIndex: 'alb_max',
  text: '\u041C\u0430\u043A\u0441.<br>\u043E\u0431.<br>(\u0442\u044B\u0441.<br>\u043B\u0438\u0442\u0440\u043E\u0432)<br>'
});
Ext.create({
  xtype: 'column',
  dataIndex: 'alb_cena',
  text: '\u0426\u0435\u043D\u0430(\u0442\u044B\u0441. <br>\u0440\u0443\u0431. \u0437\u0430 \u043E\u0434\u0438\u043D <br>\u043B\u0438\u0442\u0440'
});
Ext.create({"xtype":"column"});
Ext.create({"xtype":"panel"});
Ext.create({"xtype":"container"});
Ext.create({"xtype":"grid"});
Ext.create({"xtype":"searchfield"});
Ext.create({"xtype":"toolbar"});
Ext.create({"xtype":"datepickerfield"});
Ext.create({"xtype":"renderercell"});
Ext.create({"xtype":"button"});
Ext.require(['Ext.grid.plugin.Editable', 'Ext.grid.plugin.CellEditing', 'Ext.data.validator.Presence', 'Ext.data.validator.Number', 'Ext.data.validator.Date', 'Ext.Toast', 'Ext.grid.plugin.Clipboard']);
Ext.create('Ext.data.Store', {
  modelR1022: modelR1022,
  autoLoad: true,
  rootVisible: false,
  proxy: {
    type: 'ajax',
    url: 'http://94.73.212.60:3000/r1022/list.json',
    reader: {
      type: 'json',
      rootProperty: 'data'
    }
  }
});
Ext.create('Ext.data.Store', {
  modelMpe1gem: modelMpe1gem,
  rootVisible: false,
  paramsAsJson: true,
  proxy: {
    type: 'ajax',
    url: 'http://94.73.212.60:3000/list',
    reader: {
      type: 'json',
      rootProperty: 'data'
    },
    actionMethods: {
      create: 'POST',
      read: 'POST',
      update: 'POST',
      destroy: 'POST'
    }
  }
});
Ext.create({
  xtype: 'container',
  title: '\u041F\u043B\u0430\u043D\u0438\u0440\u043E\u0432\u0430\u043D\u0438\u0435 \u043F\u043E\u0441\u0442\u0430\u0432\u043E\u043A',
  shadow: true,
  layout: 'hbox',
  padding: '30'
});
Ext.create({
  xtype: 'grid',
  store: this.store_R1022,
  plugins: {
    selectionreplicator: true,
    clipboard: true
  },
  shadow: true,
  width: 280,
  dataIndex: 'grid',
  onSelectionChange: this.onSelectionChange,
  selectable: _extends({}, selectable),
  platformConfig: {
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
  }
});
Ext.create({
  xtype: 'column',
  text: '\u0420\u0435\u0433\u0438\u043E\u043D\u044B',
  dataIndex: 'p02',
  flex: 3,
  resizable: true,
  editable: true,
  responsiveConfig: (_ref = {}, _defineProperty(_ref, small, {
    hidden: true
  }), _defineProperty(_ref, medium, {
    hidden: false
  }), _ref)
});
Ext.create({
  xtype: 'container',
  shadow: true,
  layout: 'vbox',
  defaults: {
    margin: 10
  }
});
Ext.create({
  xtype: 'panel',
  shadow: true,
  layout: 'hbox',
  width: 900,
  height: 100,
  split: true
});
Ext.create({
  xtype: 'panel',
  shadow: true,
  layout: 'hbox',
  width: 800,
  height: 300,
  split: true
});
Ext.create({
  xtype: 'grid',
  store: this.store_Mpe1gem,
  dataIndex: 'grid2'
});
Ext.create({
  xtype: 'column',
  resizable: true,
  text: '\u041E\u0440\u0433\u0430\u043D\u0438\u0437\u0430\u0446\u0438\u044F \u0438\u0441\u043F\u043E\u043B\u043D\u0438\u0442\u0435\u043B\u044C'
});
Ext.create({
  xtype: 'column',
  dataIndex: 'naim_org',
  text: '<br>\u041D\u0430\u0438\u043C\u0435\u043D\u043E<br>\u0432\u0430\u043D\u0438\u0435<br><br>'
});
Ext.create({
  xtype: 'column',
  dataIndex: 'adr_fact',
  text: '\u041C\u0435\u0441\u0442\u043E<br>\u043D\u0430\u0445\u043E\u0436\u0434\u0435\u043D\u0438\u0435'
});
Ext.create({
  xtype: 'column',
  dataIndex: 'inn',
  text: '\u0418\u041D\u041D'
});
Ext.create({
  xtype: 'column',
  text: '\u041F\u043B\u0430\u0437\u043C\u0430 \u0441\u0432\u0435\u0436\u0435\u0437\u0430\u043C\u043E\u0440.',
  resizable: true
});
Ext.create({
  xtype: 'column',
  dataIndex: 'plazma_max',
  text: '\u041C\u0430\u043A\u0441.<br>\u043E\u0431.<br>(\u0442\u044B\u0441.<br>\u043B\u0438\u0442\u0440\u043E\u0432)<br>'
});
Ext.create({
  xtype: 'column',
  dataIndex: 'plazma_cena',
  text: '\u0426\u0435\u043D\u0430(\u0442\u044B\u0441. <br>\u0440\u0443\u0431. \u0437\u0430 \u043E\u0434\u0438\u043D <br>\u043B\u0438\u0442\u0440'
});
Ext.create({
  xtype: 'column',
  text: '\u042D\u0440\u0438\u0442\u0440\u043E\u0446\u0438\u0442\u0430\u0440\u043D\u0430\u044F \u043C\u0430\u0441\u0441\u0430'
});
Ext.create({
  xtype: 'column',
  dataIndex: 'erm_max',
  text: '\u041C\u0430\u043A\u0441.<br>\u043E\u0431.<br>(\u0442\u044B\u0441.<br>\u043B\u0438\u0442\u0440\u043E\u0432)<br>'
});
Ext.create({
  xtype: 'column',
  dataIndex: 'erm_cena',
  text: '\u0426\u0435\u043D\u0430(\u0442\u044B\u0441. <br>\u0440\u0443\u0431. \u0437\u0430 \u043E\u0434\u0438\u043D <br>\u043B\u0438\u0442\u0440'
});
Ext.create({
  xtype: 'column',
  text: '\u0418\u043C\u043C\u0443\u043D\u043E\u0433\u043B\u043E\u0431\u0443\u043B\u0438\u043D \u0447\u0435\u043B\u043E\u0432\u0435\u043A\u0430'
});
Ext.create({
  xtype: 'column',
  dataIndex: 'immg_max',
  text: '\u041C\u0430\u043A\u0441.<br>\u043E\u0431.<br>(\u0442\u044B\u0441.<br>\u043B\u0438\u0442\u0440\u043E\u0432)<br>'
});
Ext.create({
  xtype: 'column',
  dataIndex: 'immg_cena',
  text: '\u0426\u0435\u043D\u0430(\u0442\u044B\u0441. <br>\u0440\u0443\u0431. \u0437\u0430 \u043E\u0434\u0438\u043D <br>\u043B\u0438\u0442\u0440'
});
Ext.create({
  xtype: 'column',
  text: '\u0410\u043B\u044C\u0431\u0443\u043C\u0438\u043D 10-\u043F\u0440\u043E\u0446\u0435\u043D\u0442\u043D\u044B\u0439'
});
Ext.create({
  xtype: 'column',
  dataIndex: 'alb_max',
  text: '\u041C\u0430\u043A\u0441.<br>\u043E\u0431.<br>(\u0442\u044B\u0441.<br>\u043B\u0438\u0442\u0440\u043E\u0432)<br>'
});
Ext.create({
  xtype: 'column',
  dataIndex: 'alb_cena',
  text: '\u0426\u0435\u043D\u0430(\u0442\u044B\u0441. <br>\u0440\u0443\u0431. \u0437\u0430 \u043E\u0434\u0438\u043D <br>\u043B\u0438\u0442\u0440'
});
Ext.create({"xtype":"column"});
Ext.create({"xtype":"panel"});
Ext.create({"xtype":"container"});
Ext.create({"xtype":"grid"});
Ext.create({"xtype":"searchfield"});
Ext.create({"xtype":"toolbar"});
Ext.create({"xtype":"datepickerfield"});
Ext.create({"xtype":"renderercell"});
Ext.create({"xtype":"button"});
Ext.require(['Ext.grid.plugin.Editable', 'Ext.grid.plugin.CellEditing', 'Ext.data.validator.Presence', 'Ext.data.validator.Number', 'Ext.data.validator.Date', 'Ext.Toast', 'Ext.grid.plugin.Clipboard']);
Ext.create('Ext.data.Store', {
  modelR1022: modelR1022,
  autoLoad: true,
  rootVisible: false,
  proxy: {
    type: 'ajax',
    url: 'http://94.73.212.60:3000/r1022/list.json',
    reader: {
      type: 'json',
      rootProperty: 'data'
    }
  }
});
Ext.create('Ext.data.Store', {
  modelMpe1gem: modelMpe1gem,
  rootVisible: false,
  paramsAsJson: true,
  proxy: {
    type: 'ajax',
    url: 'http://94.73.212.60:3000/list',
    reader: {
      type: 'json',
      rootProperty: 'data'
    },
    actionMethods: {
      create: 'POST',
      read: 'POST',
      update: 'POST',
      destroy: 'POST'
    }
  }
});
Ext.create({
  xtype: 'container',
  title: '\u041F\u043B\u0430\u043D\u0438\u0440\u043E\u0432\u0430\u043D\u0438\u0435 \u043F\u043E\u0441\u0442\u0430\u0432\u043E\u043A',
  shadow: true,
  layout: 'hbox',
  padding: '30'
});
Ext.create({
  xtype: 'grid',
  store: this.store_R1022,
  plugins: {
    selectionreplicator: true,
    clipboard: true
  },
  shadow: true,
  width: 280,
  dataIndex: 'grid',
  onSelectionChange: this.onSelectionChange,
  selectable: _extends({}, selectable),
  platformConfig: {
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
  }
});
Ext.create({
  xtype: 'column',
  text: '\u0420\u0435\u0433\u0438\u043E\u043D\u044B',
  dataIndex: 'p02',
  flex: 3,
  resizable: true,
  editable: true,
  responsiveConfig: (_ref = {}, _defineProperty(_ref, small, {
    hidden: true
  }), _defineProperty(_ref, medium, {
    hidden: false
  }), _ref)
});
Ext.create({
  xtype: 'container',
  shadow: true,
  layout: 'vbox',
  defaults: {
    margin: 10
  }
});
Ext.create({
  xtype: 'panel',
  shadow: true,
  layout: 'hbox',
  width: 900,
  height: 100,
  split: true
});
Ext.create({
  xtype: 'panel',
  shadow: true,
  layout: 'hbox',
  width: 900,
  height: 300,
  split: true
});
Ext.create({
  xtype: 'grid',
  store: this.store_Mpe1gem,
  dataIndex: 'grid2'
});
Ext.create({
  xtype: 'column',
  resizable: true,
  text: '\u041E\u0440\u0433\u0430\u043D\u0438\u0437\u0430\u0446\u0438\u044F \u0438\u0441\u043F\u043E\u043B\u043D\u0438\u0442\u0435\u043B\u044C'
});
Ext.create({
  xtype: 'column',
  dataIndex: 'naim_org',
  text: '<br>\u041D\u0430\u0438\u043C\u0435\u043D\u043E<br>\u0432\u0430\u043D\u0438\u0435<br><br>'
});
Ext.create({
  xtype: 'column',
  dataIndex: 'adr_fact',
  text: '\u041C\u0435\u0441\u0442\u043E<br>\u043D\u0430\u0445\u043E\u0436\u0434\u0435\u043D\u0438\u0435'
});
Ext.create({
  xtype: 'column',
  dataIndex: 'inn',
  text: '\u0418\u041D\u041D'
});
Ext.create({
  xtype: 'column',
  text: '\u041F\u043B\u0430\u0437\u043C\u0430 \u0441\u0432\u0435\u0436\u0435\u0437\u0430\u043C\u043E\u0440.',
  resizable: true
});
Ext.create({
  xtype: 'column',
  dataIndex: 'plazma_max',
  text: '\u041C\u0430\u043A\u0441.<br>\u043E\u0431.<br>(\u0442\u044B\u0441.<br>\u043B\u0438\u0442\u0440\u043E\u0432)<br>'
});
Ext.create({
  xtype: 'column',
  dataIndex: 'plazma_cena',
  text: '\u0426\u0435\u043D\u0430(\u0442\u044B\u0441. <br>\u0440\u0443\u0431. \u0437\u0430 \u043E\u0434\u0438\u043D <br>\u043B\u0438\u0442\u0440'
});
Ext.create({
  xtype: 'column',
  text: '\u042D\u0440\u0438\u0442\u0440\u043E\u0446\u0438\u0442\u0430\u0440\u043D\u0430\u044F \u043C\u0430\u0441\u0441\u0430'
});
Ext.create({
  xtype: 'column',
  dataIndex: 'erm_max',
  text: '\u041C\u0430\u043A\u0441.<br>\u043E\u0431.<br>(\u0442\u044B\u0441.<br>\u043B\u0438\u0442\u0440\u043E\u0432)<br>'
});
Ext.create({
  xtype: 'column',
  dataIndex: 'erm_cena',
  text: '\u0426\u0435\u043D\u0430(\u0442\u044B\u0441. <br>\u0440\u0443\u0431. \u0437\u0430 \u043E\u0434\u0438\u043D <br>\u043B\u0438\u0442\u0440'
});
Ext.create({
  xtype: 'column',
  text: '\u0418\u043C\u043C\u0443\u043D\u043E\u0433\u043B\u043E\u0431\u0443\u043B\u0438\u043D \u0447\u0435\u043B\u043E\u0432\u0435\u043A\u0430'
});
Ext.create({
  xtype: 'column',
  dataIndex: 'immg_max',
  text: '\u041C\u0430\u043A\u0441.<br>\u043E\u0431.<br>(\u0442\u044B\u0441.<br>\u043B\u0438\u0442\u0440\u043E\u0432)<br>'
});
Ext.create({
  xtype: 'column',
  dataIndex: 'immg_cena',
  text: '\u0426\u0435\u043D\u0430(\u0442\u044B\u0441. <br>\u0440\u0443\u0431. \u0437\u0430 \u043E\u0434\u0438\u043D <br>\u043B\u0438\u0442\u0440'
});
Ext.create({
  xtype: 'column',
  text: '\u0410\u043B\u044C\u0431\u0443\u043C\u0438\u043D 10-\u043F\u0440\u043E\u0446\u0435\u043D\u0442\u043D\u044B\u0439'
});
Ext.create({
  xtype: 'column',
  dataIndex: 'alb_max',
  text: '\u041C\u0430\u043A\u0441.<br>\u043E\u0431.<br>(\u0442\u044B\u0441.<br>\u043B\u0438\u0442\u0440\u043E\u0432)<br>'
});
Ext.create({
  xtype: 'column',
  dataIndex: 'alb_cena',
  text: '\u0426\u0435\u043D\u0430(\u0442\u044B\u0441. <br>\u0440\u0443\u0431. \u0437\u0430 \u043E\u0434\u0438\u043D <br>\u043B\u0438\u0442\u0440'
});
Ext.create({"xtype":"column"});
Ext.create({"xtype":"panel"});
Ext.create({"xtype":"container"});
Ext.create({"xtype":"grid"});
Ext.create({"xtype":"searchfield"});
Ext.create({"xtype":"toolbar"});
Ext.create({"xtype":"datepickerfield"});
Ext.create({"xtype":"renderercell"});
Ext.create({"xtype":"button"})