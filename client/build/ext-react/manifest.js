Ext.require(["Ext.app.Application", "Ext.Component", "Ext.Widget"]);
Ext.require("Ext.reactor.RendererCell");
Ext.create({
  xtype: 'container',
  padding: '20'
});
Ext.create({"xtype":"container"});
Ext.require('Ext.plugin.Responsive');
Ext.create('Ext.data.Store', {
  fields: ['p00', 'p01'],
  data: data
});
Ext.create({
  xtype: 'container',
  title: '\u041F\u043B\u0430\u043D\u0438\u0440\u043E\u0432\u0430\u043D\u0438\u0435 \u043F\u043E\u0441\u0442\u0430\u0432\u043E\u043A',
  layout: 'hbox',
  padding: '50'
});
Ext.create({
  xtype: 'panel',
  title: 'Centr',
  flex: 2,
  fullsreen: true,
  collapsible: true
});
Ext.create({
  xtype: 'datefield',
  width: 300,
  fieldLabel: 'Start date'
});
Ext.create({
  xtype: 'panel',
  title: 'Left',
  width: 300,
  height: 200
});
Ext.create({
  xtype: 'grid',
  store: this.stort
});
Ext.create({
  xtype: 'column',
  text: 'Email',
  dataIndex: 'p01',
  flex: 3,
  resizable: true,
  responsiveConfig: (_ref = {}, _defineProperty(_ref, small, {
    hidden: true
  }), _defineProperty(_ref, medium, {
    hidden: false
  }), _ref)
});
Ext.create({
  xtype: 'panel',
  title: 'Right',
  width: 300,
  height: 200
});
Ext.create({
  xtype: 'grid',
  store: this.stort
});
Ext.create({
  xtype: 'column',
  text: 'Email',
  dataIndex: 'p01',
  flex: 3,
  resizable: true,
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
Ext.create({"xtype":"button"});
Ext.create({"xtype":"datefield"});
Ext.create('Ext.data.Store', {
  fields: ['p00', 'p01'],
  data: data
});
Ext.create({
  xtype: 'container',
  title: '\u041F\u043B\u0430\u043D\u0438\u0440\u043E\u0432\u0430\u043D\u0438\u0435 \u043F\u043E\u0441\u0442\u0430\u0432\u043E\u043A',
  layout: 'hbox',
  padding: '50'
});
Ext.create({
  xtype: 'panel',
  title: 'Centr',
  flex: 2,
  fullsreen: true,
  collapsible: true
});
Ext.create({
  xtype: 'datefield',
  width: 300,
  fieldLabel: 'Start date'
});
Ext.create({
  xtype: 'button',
  text: 'Click me'
});
Ext.create({
  xtype: 'panel',
  title: 'Left',
  width: 300,
  height: 200
});
Ext.create({
  xtype: 'grid',
  store: this.stort
});
Ext.create({
  xtype: 'column',
  text: 'Email',
  dataIndex: 'p01',
  flex: 3,
  resizable: true,
  responsiveConfig: (_ref = {}, _defineProperty(_ref, small, {
    hidden: true
  }), _defineProperty(_ref, medium, {
    hidden: false
  }), _ref)
});
Ext.create({
  xtype: 'panel',
  title: 'Right',
  width: 300,
  height: 200
});
Ext.create({
  xtype: 'grid',
  store: this.stort
});
Ext.create({
  xtype: 'column',
  text: 'Email',
  dataIndex: 'p01',
  flex: 3,
  resizable: true,
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
Ext.create({"xtype":"button"});
Ext.create({"xtype":"datefield"});
Ext.create('Ext.data.Store', {
  fields: ['p00', 'p01'],
  data: data
});
Ext.create({
  xtype: 'container',
  title: '\u041F\u043B\u0430\u043D\u0438\u0440\u043E\u0432\u0430\u043D\u0438\u0435 \u043F\u043E\u0441\u0442\u0430\u0432\u043E\u043A',
  layout: 'hbox',
  padding: '50'
});
Ext.create({
  xtype: 'panel',
  title: 'Centr',
  flex: 2,
  fullsreen: true,
  collapsible: true
});
Ext.create({
  xtype: 'datefield',
  width: 300,
  fieldLabel: 'Start date'
});
Ext.create({
  xtype: 'button',
  text: 'Click me'
});
Ext.create({
  xtype: 'panel',
  title: 'Left',
  width: 300,
  height: 200
});
Ext.create({
  xtype: 'grid',
  store: this.stort
});
Ext.create({
  xtype: 'column',
  text: 'Email',
  dataIndex: 'p01',
  flex: 3,
  resizable: true,
  responsiveConfig: (_ref = {}, _defineProperty(_ref, small, {
    hidden: true
  }), _defineProperty(_ref, medium, {
    hidden: false
  }), _ref)
});
Ext.create({
  xtype: 'panel',
  title: 'Right',
  width: 300,
  height: 200
});
Ext.create({
  xtype: 'grid',
  store: this.stort
});
Ext.create({
  xtype: 'column',
  text: 'Email',
  dataIndex: 'p01',
  flex: 3,
  resizable: true,
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
Ext.create({"xtype":"button"});
Ext.create({"xtype":"datefield"});
Ext.create('Ext.data.Store', {
  fields: ['p00', 'p01'],
  data: data
});
Ext.create({
  xtype: 'container',
  title: '\u041F\u043B\u0430\u043D\u0438\u0440\u043E\u0432\u0430\u043D\u0438\u0435 \u043F\u043E\u0441\u0442\u0430\u0432\u043E\u043A',
  layout: 'hbox',
  padding: '50'
});
Ext.create({
  xtype: 'panel',
  title: 'Centr',
  flex: 2,
  fullsreen: true,
  collapsible: true
});
Ext.create({
  xtype: 'datefield',
  width: 300,
  fieldLabel: 'Start date'
});
Ext.create({
  xtype: 'button',
  text: 'Click me'
});
Ext.create({
  xtype: 'panel',
  title: 'Left',
  width: 300,
  height: 200
});
Ext.create({
  xtype: 'grid',
  store: this.stort
});
Ext.create({
  xtype: 'column',
  text: 'Email',
  dataIndex: 'p01',
  flex: 3,
  resizable: true,
  responsiveConfig: (_ref = {}, _defineProperty(_ref, small, {
    hidden: true
  }), _defineProperty(_ref, medium, {
    hidden: false
  }), _ref)
});
Ext.create({
  xtype: 'panel',
  title: 'Right',
  width: 300,
  height: 200
});
Ext.create({
  xtype: 'grid',
  store: this.stort
});
Ext.create({
  xtype: 'column',
  text: 'Email',
  dataIndex: 'p01',
  flex: 3,
  resizable: true,
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
Ext.create({"xtype":"button"});
Ext.create({"xtype":"datefield"});
Ext.create('Ext.data.Store', {
  fields: ['p00', 'p01'],
  data: data
});
Ext.create({
  xtype: 'container',
  title: '\u041F\u043B\u0430\u043D\u0438\u0440\u043E\u0432\u0430\u043D\u0438\u0435 \u043F\u043E\u0441\u0442\u0430\u0432\u043E\u043A',
  layout: 'hbox',
  padding: '50'
});
Ext.create({
  xtype: 'panel',
  title: 'Centr',
  flex: 2,
  fullsreen: true,
  collapsible: true
});
Ext.create({
  xtype: 'datefield',
  width: 300,
  fieldLabel: 'Start date'
});
Ext.create({
  xtype: 'button',
  text: 'Click me',
  hnadel: this.onButtonTap.bind(this)
});
Ext.create({
  xtype: 'panel',
  title: 'Left',
  width: 300,
  height: 200
});
Ext.create({
  xtype: 'grid',
  store: this.stort
});
Ext.create({
  xtype: 'column',
  text: 'Email',
  dataIndex: 'p01',
  flex: 3,
  resizable: true,
  responsiveConfig: (_ref = {}, _defineProperty(_ref, small, {
    hidden: true
  }), _defineProperty(_ref, medium, {
    hidden: false
  }), _ref)
});
Ext.create({
  xtype: 'panel',
  title: 'Right',
  width: 300,
  height: 200
});
Ext.create({
  xtype: 'grid',
  store: this.stort
});
Ext.create({
  xtype: 'column',
  text: 'Email',
  dataIndex: 'p01',
  flex: 3,
  resizable: true,
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
Ext.create({"xtype":"button"});
Ext.create({"xtype":"datefield"});
Ext.create('Ext.data.Store', {
  fields: ['p00', 'p01'],
  data: data
});
Ext.create({
  xtype: 'container',
  title: '\u041F\u043B\u0430\u043D\u0438\u0440\u043E\u0432\u0430\u043D\u0438\u0435 \u043F\u043E\u0441\u0442\u0430\u0432\u043E\u043A',
  layout: 'hbox',
  padding: '50'
});
Ext.create({
  xtype: 'panel',
  title: 'Centr',
  flex: 2,
  fullsreen: true,
  collapsible: true
});
Ext.create({
  xtype: 'datefield',
  width: 300,
  fieldLabel: 'Start date'
});
Ext.create({
  xtype: 'button',
  text: 'Click me',
  handel: this.onButtonTap.bind(this)
});
Ext.create({
  xtype: 'panel',
  title: 'Left',
  width: 300,
  height: 200
});
Ext.create({
  xtype: 'grid',
  store: this.stort
});
Ext.create({
  xtype: 'column',
  text: 'Email',
  dataIndex: 'p01',
  flex: 3,
  resizable: true,
  responsiveConfig: (_ref = {}, _defineProperty(_ref, small, {
    hidden: true
  }), _defineProperty(_ref, medium, {
    hidden: false
  }), _ref)
});
Ext.create({
  xtype: 'panel',
  title: 'Right',
  width: 300,
  height: 200
});
Ext.create({
  xtype: 'grid',
  store: this.stort
});
Ext.create({
  xtype: 'column',
  text: 'Email',
  dataIndex: 'p01',
  flex: 3,
  resizable: true,
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
Ext.create({"xtype":"button"});
Ext.create({"xtype":"datefield"});
Ext.create('Ext.data.Store', {
  fields: ['p00', 'p01'],
  data: data
});
Ext.create({
  xtype: 'container',
  title: '\u041F\u043B\u0430\u043D\u0438\u0440\u043E\u0432\u0430\u043D\u0438\u0435 \u043F\u043E\u0441\u0442\u0430\u0432\u043E\u043A',
  layout: 'hbox',
  padding: '50'
});
Ext.create({
  xtype: 'panel',
  title: 'Centr',
  flex: 2,
  fullsreen: true,
  collapsible: true
});
Ext.create({
  xtype: 'datefield',
  width: 300,
  fieldLabel: 'Start date'
});
Ext.create({
  xtype: 'button',
  text: 'Click me',
  handler: this.onButtonTap.bind(this)
});
Ext.create({
  xtype: 'panel',
  title: 'Left',
  width: 300,
  height: 200
});
Ext.create({
  xtype: 'grid',
  store: this.stort
});
Ext.create({
  xtype: 'column',
  text: 'Email',
  dataIndex: 'p01',
  flex: 3,
  resizable: true,
  responsiveConfig: (_ref = {}, _defineProperty(_ref, small, {
    hidden: true
  }), _defineProperty(_ref, medium, {
    hidden: false
  }), _ref)
});
Ext.create({
  xtype: 'panel',
  title: 'Right',
  width: 300,
  height: 200
});
Ext.create({
  xtype: 'grid',
  store: this.stort
});
Ext.create({
  xtype: 'column',
  text: 'Email',
  dataIndex: 'p01',
  flex: 3,
  resizable: true,
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
Ext.create({"xtype":"button"});
Ext.create({"xtype":"datefield"});
Ext.create('Ext.data.Store', {
  fields: ['p00', 'p01'],
  data: data
});
Ext.create({
  xtype: 'container',
  title: '\u041F\u043B\u0430\u043D\u0438\u0440\u043E\u0432\u0430\u043D\u0438\u0435 \u043F\u043E\u0441\u0442\u0430\u0432\u043E\u043A',
  layout: 'hbox',
  padding: '50'
});
Ext.create({
  xtype: 'panel',
  title: 'Centr',
  flex: 2,
  fullsreen: true,
  collapsible: true
});
Ext.create({
  xtype: 'datefield',
  width: 300,
  fieldLabel: 'Start date'
});
Ext.create({
  xtype: 'button',
  text: 'Click me',
  handler: this.onButtonTap.bind(this),
  ui: 'action raised'
});
Ext.create({
  xtype: 'panel',
  title: 'Left',
  width: 300,
  height: 200
});
Ext.create({
  xtype: 'grid',
  store: this.stort
});
Ext.create({
  xtype: 'column',
  text: 'Email',
  dataIndex: 'p01',
  flex: 3,
  resizable: true,
  responsiveConfig: (_ref = {}, _defineProperty(_ref, small, {
    hidden: true
  }), _defineProperty(_ref, medium, {
    hidden: false
  }), _ref)
});
Ext.create({
  xtype: 'panel',
  title: 'Right',
  width: 300,
  height: 200
});
Ext.create({
  xtype: 'grid',
  store: this.stort
});
Ext.create({
  xtype: 'column',
  text: 'Email',
  dataIndex: 'p01',
  flex: 3,
  resizable: true,
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
Ext.create({"xtype":"button"});
Ext.create({"xtype":"datefield"});
Ext.create('Ext.data.Store', {
  fields: ['p00', 'p01'],
  data: data
});
Ext.create({
  xtype: 'container',
  title: '\u041F\u043B\u0430\u043D\u0438\u0440\u043E\u0432\u0430\u043D\u0438\u0435 \u043F\u043E\u0441\u0442\u0430\u0432\u043E\u043A',
  layout: 'hbox',
  padding: '50'
});
Ext.create({
  xtype: 'panel',
  title: 'Centr',
  flex: 2,
  fullsreen: true,
  collapsible: true
});
Ext.create({
  xtype: 'datefield',
  width: 300,
  fieldLabel: 'Start date'
});
Ext.create({
  xtype: 'button',
  text: 'Click me',
  handler: this.onButtonTap.bind(this),
  ui: 'action raised'
});
Ext.create({
  xtype: 'panel',
  title: 'Left',
  width: 300,
  height: 200
});
Ext.create({
  xtype: 'grid',
  store: this.stort
});
Ext.create({
  xtype: 'column',
  text: 'Email',
  dataIndex: 'p01',
  flex: 3,
  resizable: true,
  responsiveConfig: (_ref = {}, _defineProperty(_ref, small, {
    hidden: true
  }), _defineProperty(_ref, medium, {
    hidden: false
  }), _ref)
});
Ext.create({
  xtype: 'panel',
  title: 'Right',
  width: 300,
  height: 200
});
Ext.create({
  xtype: 'grid',
  store: this.stort
});
Ext.create({
  xtype: 'column',
  text: 'Email',
  dataIndex: 'p01',
  flex: 3,
  resizable: true,
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
Ext.create({"xtype":"button"});
Ext.create({"xtype":"datefield"});
Ext.create('Ext.data.Store', {
  fields: ['p00', 'p01'],
  data: data
});
Ext.create({
  xtype: 'container',
  title: '\u041F\u043B\u0430\u043D\u0438\u0440\u043E\u0432\u0430\u043D\u0438\u0435 \u043F\u043E\u0441\u0442\u0430\u0432\u043E\u043A',
  layout: 'hbox',
  padding: '50'
});
Ext.create({
  xtype: 'panel',
  title: 'Centr',
  flex: 2,
  fullsreen: true,
  collapsible: true
});
Ext.create({
  xtype: 'datefield',
  width: 300,
  fieldLabel: 'Start date'
});
Ext.create({
  xtype: 'button',
  text: 'Click me',
  handler: this.onButtonTap.bind(this),
  ui: 'action raised'
});
Ext.create({
  xtype: 'panel',
  title: 'Left',
  width: 300,
  height: 200
});
Ext.create({
  xtype: 'grid',
  store: this.stort
});
Ext.create({
  xtype: 'column',
  text: 'Email',
  dataIndex: 'p01',
  flex: 3,
  resizable: true,
  responsiveConfig: (_ref = {}, _defineProperty(_ref, small, {
    hidden: true
  }), _defineProperty(_ref, medium, {
    hidden: false
  }), _ref)
});
Ext.create({
  xtype: 'panel',
  title: 'Right',
  width: 300,
  height: 200
});
Ext.create({
  xtype: 'grid',
  store: this.stort
});
Ext.create({
  xtype: 'column',
  text: 'Email',
  dataIndex: 'p01',
  flex: 3,
  resizable: true,
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
Ext.create({"xtype":"button"});
Ext.create({"xtype":"datefield"});
Ext.create('Ext.data.Store', {
  fields: ['p00', 'p01'],
  data: data
});
Ext.create({
  xtype: 'container',
  title: '\u041F\u043B\u0430\u043D\u0438\u0440\u043E\u0432\u0430\u043D\u0438\u0435 \u043F\u043E\u0441\u0442\u0430\u0432\u043E\u043A',
  layout: 'hbox',
  padding: '50'
});
Ext.create({
  xtype: 'panel',
  title: 'Centr',
  flex: 2,
  fullsreen: true,
  collapsible: true
});
Ext.create({
  xtype: 'datefield',
  width: 300,
  text: 'Start date'
});
Ext.create({
  xtype: 'button',
  text: 'Click me',
  handler: this.onButtonTap.bind(this),
  ui: 'action raised'
});
Ext.create({
  xtype: 'panel',
  title: 'Left',
  width: 300,
  height: 200
});
Ext.create({
  xtype: 'grid',
  store: this.stort
});
Ext.create({
  xtype: 'column',
  text: 'Email',
  dataIndex: 'p01',
  flex: 3,
  resizable: true,
  responsiveConfig: (_ref = {}, _defineProperty(_ref, small, {
    hidden: true
  }), _defineProperty(_ref, medium, {
    hidden: false
  }), _ref)
});
Ext.create({
  xtype: 'panel',
  title: 'Right',
  width: 300,
  height: 200
});
Ext.create({
  xtype: 'grid',
  store: this.stort
});
Ext.create({
  xtype: 'column',
  text: 'Email',
  dataIndex: 'p01',
  flex: 3,
  resizable: true,
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
Ext.create({"xtype":"button"});
Ext.create({"xtype":"datefield"});
Ext.create('Ext.data.Store', {
  fields: ['p00', 'p01'],
  data: data
});
Ext.create({
  xtype: 'container',
  title: '\u041F\u043B\u0430\u043D\u0438\u0440\u043E\u0432\u0430\u043D\u0438\u0435 \u043F\u043E\u0441\u0442\u0430\u0432\u043E\u043A',
  layout: 'hbox',
  padding: '50'
});
Ext.create({
  xtype: 'panel',
  title: 'Centr',
  flex: 2,
  fullsreen: true,
  collapsible: true
});
Ext.create({
  xtype: 'datefield',
  width: 300,
  text: 'Start date'
});
Ext.create({
  xtype: 'button',
  text: 'Click me',
  handler: this.onButtonTap.bind(this),
  ui: 'action raised'
});
Ext.create({
  xtype: 'panel',
  title: 'Left',
  width: 300,
  height: 200
});
Ext.create({
  xtype: 'grid',
  store: this.stort
});
Ext.create({
  xtype: 'column',
  text: 'Email',
  dataIndex: 'p01',
  flex: 3,
  resizable: true,
  responsiveConfig: (_ref = {}, _defineProperty(_ref, small, {
    hidden: true
  }), _defineProperty(_ref, medium, {
    hidden: false
  }), _ref)
});
Ext.create({
  xtype: 'panel',
  title: 'Right',
  width: 300,
  height: 200
});
Ext.create({"xtype":"column"});
Ext.create({"xtype":"panel"});
Ext.create({"xtype":"container"});
Ext.create({"xtype":"grid"});
Ext.create({"xtype":"searchfield"});
Ext.create({"xtype":"toolbar"});
Ext.create({"xtype":"datepickerfield"});
Ext.create({"xtype":"button"});
Ext.create({"xtype":"datefield"});
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
  xtype: 'panel',
  title: 'Centr',
  flex: 2,
  fullsreen: true,
  collapsible: true
});
Ext.create({
  xtype: 'datefield',
  width: 300,
  text: 'Start date'
});
Ext.create({
  xtype: 'button',
  text: 'Click me',
  handler: this.onButtonTap.bind(this),
  ui: 'action raised'
});
Ext.create({
  xtype: 'panel',
  title: 'Left',
  width: 300,
  height: 200
});
Ext.create({
  xtype: 'grid',
  store: this.stort
});
Ext.create({
  xtype: 'column',
  text: 'Email',
  dataIndex: 'p01',
  flex: 3,
  resizable: true,
  responsiveConfig: (_ref = {}, _defineProperty(_ref, small, {
    hidden: true
  }), _defineProperty(_ref, medium, {
    hidden: false
  }), _ref)
});
Ext.create({
  xtype: 'panel',
  title: 'Right',
  width: 300,
  height: 200
});
Ext.create({"xtype":"column"});
Ext.create({"xtype":"panel"});
Ext.create({"xtype":"container"});
Ext.create({"xtype":"grid"});
Ext.create({"xtype":"searchfield"});
Ext.create({"xtype":"toolbar"});
Ext.create({"xtype":"datepickerfield"});
Ext.create({"xtype":"button"});
Ext.create({"xtype":"datefield"});
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
  xtype: 'panel',
  title: 'Centr',
  flex: 2,
  fullsreen: true,
  collapsible: true
});
Ext.create({
  xtype: 'datefield',
  width: 300,
  text: 'Start date'
});
Ext.create({
  xtype: 'button',
  text: 'Click me',
  handler: this.onButtonTap.bind(this),
  ui: 'action raised'
});
Ext.create({
  xtype: 'panel',
  title: 'Left',
  width: 300,
  height: 200
});
Ext.create({
  xtype: 'grid',
  store: this.stort
});
Ext.create({
  xtype: 'column',
  text: 'Email',
  dataIndex: 'p01',
  flex: 3,
  resizable: true,
  responsiveConfig: (_ref = {}, _defineProperty(_ref, small, {
    hidden: true
  }), _defineProperty(_ref, medium, {
    hidden: false
  }), _ref)
});
Ext.create({
  xtype: 'panel',
  title: 'Right',
  width: 300,
  height: 200
});
Ext.create({"xtype":"column"});
Ext.create({"xtype":"panel"});
Ext.create({"xtype":"container"});
Ext.create({"xtype":"grid"});
Ext.create({"xtype":"searchfield"});
Ext.create({"xtype":"toolbar"});
Ext.create({"xtype":"datepickerfield"});
Ext.create({"xtype":"button"});
Ext.create({"xtype":"datefield"});
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
  xtype: 'panel',
  title: 'Centr',
  flex: 2,
  fullsreen: true,
  collapsible: true
});
Ext.create({
  xtype: 'datefield',
  width: 300,
  text: 'Start date'
});
Ext.create({
  xtype: 'button',
  text: 'Click me',
  handler: this.onButtonTap.bind(this),
  ui: 'action raised'
});
Ext.create({
  xtype: 'panel',
  title: 'Left',
  width: 300,
  height: 200
});
Ext.create({
  xtype: 'grid',
  store: this.stort
});
Ext.create({
  xtype: 'column',
  text: 'Email',
  dataIndex: 'p01',
  flex: 3,
  resizable: true,
  responsiveConfig: (_ref = {}, _defineProperty(_ref, small, {
    hidden: true
  }), _defineProperty(_ref, medium, {
    hidden: false
  }), _ref)
});
Ext.create({
  xtype: 'panel',
  title: 'Right',
  width: 300,
  height: 200
});
Ext.create({"xtype":"column"});
Ext.create({"xtype":"panel"});
Ext.create({"xtype":"container"});
Ext.create({"xtype":"grid"});
Ext.create({"xtype":"searchfield"});
Ext.create({"xtype":"toolbar"});
Ext.create({"xtype":"datepickerfield"});
Ext.create({"xtype":"button"});
Ext.create({"xtype":"datefield"});
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
  xtype: 'panel',
  title: 'Centr',
  flex: 2,
  fullsreen: true,
  collapsible: true
});
Ext.create({
  xtype: 'datefield',
  width: 300,
  text: 'Start date'
});
Ext.create({
  xtype: 'button',
  text: 'Click me',
  handler: this.onButtonTap.bind(this),
  ui: 'action raised'
});
Ext.create({
  xtype: 'panel',
  title: 'Left',
  width: 300,
  height: 400
});
Ext.create({
  xtype: 'grid',
  store: this.stort
});
Ext.create({
  xtype: 'column',
  text: 'Email',
  dataIndex: 'p01',
  flex: 3,
  resizable: true,
  responsiveConfig: (_ref = {}, _defineProperty(_ref, small, {
    hidden: true
  }), _defineProperty(_ref, medium, {
    hidden: false
  }), _ref)
});
Ext.create({
  xtype: 'panel',
  title: 'Right',
  width: 300,
  height: 200
});
Ext.create({"xtype":"column"});
Ext.create({"xtype":"panel"});
Ext.create({"xtype":"container"});
Ext.create({"xtype":"grid"});
Ext.create({"xtype":"searchfield"});
Ext.create({"xtype":"toolbar"});
Ext.create({"xtype":"datepickerfield"});
Ext.create({"xtype":"button"});
Ext.create({"xtype":"datefield"});
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
  store: this.stort
});
Ext.create({
  xtype: 'column',
  text: 'Email',
  dataIndex: 'p01',
  flex: 3,
  resizable: true,
  responsiveConfig: (_ref = {}, _defineProperty(_ref, small, {
    hidden: true
  }), _defineProperty(_ref, medium, {
    hidden: false
  }), _ref)
});
Ext.create({
  xtype: 'panel',
  title: 'Centr',
  flex: 2,
  fullsreen: true,
  collapsible: true
});
Ext.create({
  xtype: 'datefield',
  width: 300,
  text: 'Start date'
});
Ext.create({
  xtype: 'button',
  text: 'Click me',
  handler: this.onButtonTap.bind(this),
  ui: 'action raised'
});
Ext.create({
  xtype: 'panel',
  title: 'Left',
  width: 300,
  height: 400
});
Ext.create({
  xtype: 'grid',
  store: this.stort
});
Ext.create({
  xtype: 'column',
  text: 'Email',
  dataIndex: 'p01',
  flex: 3,
  resizable: true,
  responsiveConfig: (_ref2 = {}, _defineProperty(_ref2, small, {
    hidden: true
  }), _defineProperty(_ref2, medium, {
    hidden: false
  }), _ref2)
});
Ext.create({
  xtype: 'panel',
  title: 'Right',
  width: 300,
  height: 200
});
Ext.create({"xtype":"column"});
Ext.create({"xtype":"panel"});
Ext.create({"xtype":"container"});
Ext.create({"xtype":"grid"});
Ext.create({"xtype":"searchfield"});
Ext.create({"xtype":"toolbar"});
Ext.create({"xtype":"datepickerfield"});
Ext.create({"xtype":"button"});
Ext.create({"xtype":"datefield"});
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
  store: this.stort
});
Ext.create({
  xtype: 'column',
  text: 'Email',
  dataIndex: 'p01',
  flex: 3,
  resizable: true,
  responsiveConfig: (_ref = {}, _defineProperty(_ref, small, {
    hidden: true
  }), _defineProperty(_ref, medium, {
    hidden: false
  }), _ref)
});
Ext.create({
  xtype: 'grid',
  store: this.stort
});
Ext.create({
  xtype: 'column',
  text: 'Email',
  dataIndex: 'p01',
  flex: 3,
  resizable: true,
  responsiveConfig: (_ref2 = {}, _defineProperty(_ref2, small, {
    hidden: true
  }), _defineProperty(_ref2, medium, {
    hidden: false
  }), _ref2)
});
Ext.create({
  xtype: 'panel',
  title: 'Centr',
  flex: 2,
  fullsreen: true,
  collapsible: true
});
Ext.create({
  xtype: 'datefield',
  width: 300,
  text: 'Start date'
});
Ext.create({
  xtype: 'button',
  text: 'Click me',
  handler: this.onButtonTap.bind(this),
  ui: 'action raised'
});
Ext.create({
  xtype: 'panel',
  title: 'Left',
  width: 300,
  height: 400
});
Ext.create({
  xtype: 'grid',
  store: this.stort
});
Ext.create({
  xtype: 'column',
  text: 'Email',
  dataIndex: 'p01',
  flex: 3,
  resizable: true,
  responsiveConfig: (_ref3 = {}, _defineProperty(_ref3, small, {
    hidden: true
  }), _defineProperty(_ref3, medium, {
    hidden: false
  }), _ref3)
});
Ext.create({
  xtype: 'panel',
  title: 'Right',
  width: 300,
  height: 200
});
Ext.create({"xtype":"column"});
Ext.create({"xtype":"panel"});
Ext.create({"xtype":"container"});
Ext.create({"xtype":"grid"});
Ext.create({"xtype":"searchfield"});
Ext.create({"xtype":"toolbar"});
Ext.create({"xtype":"datepickerfield"});
Ext.create({"xtype":"button"});
Ext.create({"xtype":"datefield"});
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
  store: this.stort
});
Ext.create({
  xtype: 'column',
  text: 'Email',
  dataIndex: 'p01',
  flex: 3,
  resizable: true,
  responsiveConfig: (_ref = {}, _defineProperty(_ref, small, {
    hidden: true
  }), _defineProperty(_ref, medium, {
    hidden: false
  }), _ref)
});
Ext.create({
  xtype: 'panel',
  title: 'Centr',
  flex: 2,
  fullsreen: true,
  collapsible: true
});
Ext.create({
  xtype: 'datefield',
  width: 300,
  text: 'Start date'
});
Ext.create({
  xtype: 'button',
  text: 'Click me',
  handler: this.onButtonTap.bind(this),
  ui: 'action raised'
});
Ext.create({
  xtype: 'panel',
  title: 'Left',
  width: 300,
  height: 400
});
Ext.create({
  xtype: 'grid',
  store: this.stort
});
Ext.create({
  xtype: 'column',
  text: 'Email',
  dataIndex: 'p01',
  flex: 3,
  resizable: true,
  responsiveConfig: (_ref2 = {}, _defineProperty(_ref2, small, {
    hidden: true
  }), _defineProperty(_ref2, medium, {
    hidden: false
  }), _ref2)
});
Ext.create({
  xtype: 'panel',
  title: 'Right',
  width: 300,
  height: 200
});
Ext.create({"xtype":"column"});
Ext.create({"xtype":"panel"});
Ext.create({"xtype":"container"});
Ext.create({"xtype":"grid"});
Ext.create({"xtype":"searchfield"});
Ext.create({"xtype":"toolbar"});
Ext.create({"xtype":"datepickerfield"});
Ext.create({"xtype":"button"});
Ext.create({"xtype":"datefield"});
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
  store: this.stort
});
Ext.create({
  xtype: 'column',
  text: 'Email',
  dataIndex: 'p01',
  flex: 3,
  resizable: true,
  responsiveConfig: (_ref = {}, _defineProperty(_ref, small, {
    hidden: true
  }), _defineProperty(_ref, medium, {
    hidden: false
  }), _ref)
});
Ext.create({
  xtype: 'panel',
  title: 'Centr',
  flex: 2,
  fullsreen: true,
  collapsible: true
});
Ext.create({
  xtype: 'datefield',
  width: 300,
  text: 'Start date'
});
Ext.create({
  xtype: 'button',
  text: 'Click me',
  handler: this.onButtonTap.bind(this),
  ui: 'action raised'
});
Ext.create({
  xtype: 'panel',
  title: 'Left',
  width: 300,
  height: 400
});
Ext.create({
  xtype: 'grid',
  store: this.stort
});
Ext.create({
  xtype: 'column',
  text: 'Email',
  dataIndex: 'p01',
  flex: 3,
  resizable: true,
  responsiveConfig: (_ref2 = {}, _defineProperty(_ref2, small, {
    hidden: true
  }), _defineProperty(_ref2, medium, {
    hidden: false
  }), _ref2)
});
Ext.create({
  xtype: 'panel',
  title: 'Right',
  width: 300,
  height: 200
});
Ext.create({"xtype":"column"});
Ext.create({"xtype":"panel"});
Ext.create({"xtype":"container"});
Ext.create({"xtype":"grid"});
Ext.create({"xtype":"searchfield"});
Ext.create({"xtype":"toolbar"});
Ext.create({"xtype":"datepickerfield"});
Ext.create({"xtype":"button"});
Ext.create({"xtype":"datefield"});
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
  store: this.stort
});
Ext.create({
  xtype: 'column',
  text: 'Email',
  dataIndex: 'p01',
  flex: 3,
  resizable: true,
  responsiveConfig: (_ref = {}, _defineProperty(_ref, small, {
    hidden: true
  }), _defineProperty(_ref, medium, {
    hidden: false
  }), _ref)
});
Ext.create({
  xtype: 'panel',
  title: 'Centr',
  flex: 2,
  fullsreen: true,
  collapsible: true
});
Ext.create({
  xtype: 'datefield',
  width: 300,
  text: 'Start date'
});
Ext.create({
  xtype: 'button',
  text: 'Click me',
  handler: this.onButtonTap.bind(this),
  ui: 'action raised'
});
Ext.create({
  xtype: 'panel',
  title: 'Left',
  width: 300,
  height: 400
});
Ext.create({
  xtype: 'grid',
  store: this.stort
});
Ext.create({
  xtype: 'column',
  text: 'Email',
  dataIndex: 'p01',
  flex: 3,
  resizable: true,
  responsiveConfig: (_ref2 = {}, _defineProperty(_ref2, small, {
    hidden: true
  }), _defineProperty(_ref2, medium, {
    hidden: false
  }), _ref2)
});
Ext.create({
  xtype: 'panel',
  title: 'Right',
  width: 300,
  height: 200
});
Ext.create({"xtype":"column"});
Ext.create({"xtype":"panel"});
Ext.create({"xtype":"container"});
Ext.create({"xtype":"grid"});
Ext.create({"xtype":"searchfield"});
Ext.create({"xtype":"toolbar"});
Ext.create({"xtype":"datepickerfield"});
Ext.create({"xtype":"button"});
Ext.create({"xtype":"datefield"});
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
  store: this.stort
});
Ext.create({
  xtype: 'column',
  text: 'Email',
  dataIndex: 'p01',
  flex: 3,
  resizable: true,
  responsiveConfig: (_ref = {}, _defineProperty(_ref, small, {
    hidden: true
  }), _defineProperty(_ref, medium, {
    hidden: false
  }), _ref)
});
Ext.create({
  xtype: 'panel',
  title: 'Centr',
  flex: 2,
  fullsreen: true,
  collapsible: true
});
Ext.create({
  xtype: 'datefield',
  width: 300,
  text: 'Start date'
});
Ext.create({
  xtype: 'button',
  text: 'Click me',
  handler: this.onButtonTap.bind(this),
  ui: 'action raised'
});
Ext.create({
  xtype: 'panel',
  title: 'Left',
  width: 300,
  height: 400,
  region: north
});
Ext.create({
  xtype: 'grid',
  store: this.stort
});
Ext.create({
  xtype: 'column',
  text: 'Email',
  dataIndex: 'p01',
  flex: 3,
  resizable: true,
  responsiveConfig: (_ref2 = {}, _defineProperty(_ref2, small, {
    hidden: true
  }), _defineProperty(_ref2, medium, {
    hidden: false
  }), _ref2)
});
Ext.create({
  xtype: 'panel',
  title: 'Right',
  width: 300,
  height: 200
});
Ext.create({"xtype":"column"});
Ext.create({"xtype":"panel"});
Ext.create({"xtype":"container"});
Ext.create({"xtype":"grid"});
Ext.create({"xtype":"searchfield"});
Ext.create({"xtype":"toolbar"});
Ext.create({"xtype":"datepickerfield"});
Ext.create({"xtype":"button"});
Ext.create({"xtype":"datefield"});
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
  store: this.stort
});
Ext.create({
  xtype: 'column',
  text: 'Email',
  dataIndex: 'p01',
  flex: 3,
  resizable: true,
  responsiveConfig: (_ref = {}, _defineProperty(_ref, small, {
    hidden: true
  }), _defineProperty(_ref, medium, {
    hidden: false
  }), _ref)
});
Ext.create({
  xtype: 'panel',
  title: 'Centr',
  flex: 2,
  fullsreen: true,
  collapsible: true
});
Ext.create({
  xtype: 'datefield',
  width: 300,
  text: 'Start date'
});
Ext.create({
  xtype: 'button',
  text: 'Click me',
  handler: this.onButtonTap.bind(this),
  ui: 'action raised'
});
Ext.create({
  xtype: 'panel',
  title: 'Left',
  width: 300,
  height: 400,
  region: 'north',
  split: true
});
Ext.create({
  xtype: 'grid',
  store: this.stort
});
Ext.create({
  xtype: 'column',
  text: 'Email',
  dataIndex: 'p01',
  flex: 3,
  resizable: true,
  responsiveConfig: (_ref2 = {}, _defineProperty(_ref2, small, {
    hidden: true
  }), _defineProperty(_ref2, medium, {
    hidden: false
  }), _ref2)
});
Ext.create({
  xtype: 'panel',
  title: 'Right',
  width: 300,
  height: 200
});
Ext.create({"xtype":"column"});
Ext.create({"xtype":"panel"});
Ext.create({"xtype":"container"});
Ext.create({"xtype":"grid"});
Ext.create({"xtype":"searchfield"});
Ext.create({"xtype":"toolbar"});
Ext.create({"xtype":"datepickerfield"});
Ext.create({"xtype":"button"});
Ext.create({"xtype":"datefield"});
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
  store: this.stort
});
Ext.create({
  xtype: 'column',
  text: 'Email',
  dataIndex: 'p01',
  flex: 3,
  resizable: true,
  responsiveConfig: (_ref = {}, _defineProperty(_ref, small, {
    hidden: true
  }), _defineProperty(_ref, medium, {
    hidden: false
  }), _ref)
});
Ext.create({
  xtype: 'panel',
  title: 'Centr',
  flex: 2,
  fullsreen: true,
  collapsible: true
});
Ext.create({
  xtype: 'datefield',
  width: 300,
  text: 'Start date'
});
Ext.create({
  xtype: 'button',
  text: 'Click me',
  handler: this.onButtonTap.bind(this),
  ui: 'action raised'
});
Ext.create({
  xtype: 'panel',
  title: 'Left',
  width: 300,
  height: 400
});
Ext.create({
  xtype: 'grid',
  store: this.stort
});
Ext.create({
  xtype: 'column',
  text: 'Email',
  dataIndex: 'p01',
  flex: 3,
  resizable: true,
  responsiveConfig: (_ref2 = {}, _defineProperty(_ref2, small, {
    hidden: true
  }), _defineProperty(_ref2, medium, {
    hidden: false
  }), _ref2)
});
Ext.create({
  xtype: 'panel',
  title: 'Right',
  width: 300,
  height: 200,
  split: true
});
Ext.create({"xtype":"column"});
Ext.create({"xtype":"panel"});
Ext.create({"xtype":"container"});
Ext.create({"xtype":"grid"});
Ext.create({"xtype":"searchfield"});
Ext.create({"xtype":"toolbar"});
Ext.create({"xtype":"datepickerfield"});
Ext.create({"xtype":"button"});
Ext.create({"xtype":"datefield"});
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
  store: this.stort
});
Ext.create({
  xtype: 'column',
  text: 'Email',
  dataIndex: 'p01',
  flex: 3,
  resizable: true,
  responsiveConfig: (_ref = {}, _defineProperty(_ref, small, {
    hidden: true
  }), _defineProperty(_ref, medium, {
    hidden: false
  }), _ref)
});
Ext.create({
  xtype: 'panel',
  title: 'Centr',
  flex: 2,
  fullsreen: true,
  collapsible: true
});
Ext.create({
  xtype: 'datefield',
  width: 300,
  text: 'Start date'
});
Ext.create({
  xtype: 'button',
  text: 'Click me',
  handler: this.onButtonTap.bind(this),
  ui: 'action raised'
});
Ext.create({
  xtype: 'panel',
  title: 'Left',
  width: 300,
  height: 400,
  html: 'somecontent'
});
Ext.create({
  xtype: 'grid',
  store: this.stort
});
Ext.create({
  xtype: 'column',
  text: 'Email',
  dataIndex: 'p01',
  flex: 3,
  resizable: true,
  responsiveConfig: (_ref2 = {}, _defineProperty(_ref2, small, {
    hidden: true
  }), _defineProperty(_ref2, medium, {
    hidden: false
  }), _ref2)
});
Ext.create({
  xtype: 'panel',
  title: 'Right',
  width: 300,
  height: 200,
  split: true
});
Ext.create({"xtype":"column"});
Ext.create({"xtype":"panel"});
Ext.create({"xtype":"container"});
Ext.create({"xtype":"grid"});
Ext.create({"xtype":"searchfield"});
Ext.create({"xtype":"toolbar"});
Ext.create({"xtype":"datepickerfield"});
Ext.create({"xtype":"button"});
Ext.create({"xtype":"datefield"});
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
  store: this.stort
});
Ext.create({
  xtype: 'column',
  text: 'Email',
  dataIndex: 'p01',
  flex: 3,
  resizable: true,
  responsiveConfig: (_ref = {}, _defineProperty(_ref, small, {
    hidden: true
  }), _defineProperty(_ref, medium, {
    hidden: false
  }), _ref)
});
Ext.create({
  xtype: 'panel',
  title: 'Centr',
  flex: 2,
  fullsreen: true,
  collapsible: true
});
Ext.create({
  xtype: 'datefield',
  width: 300,
  text: 'Start date'
});
Ext.create({
  xtype: 'button',
  text: 'Click me',
  handler: this.onButtonTap.bind(this),
  ui: 'action raised'
});
Ext.create({
  xtype: 'panel',
  title: 'Left',
  width: 300,
  height: 400,
  html: 'somecontent',
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
  text: 'Email',
  dataIndex: 'p01',
  flex: 3,
  resizable: true,
  responsiveConfig: (_ref2 = {}, _defineProperty(_ref2, small, {
    hidden: true
  }), _defineProperty(_ref2, medium, {
    hidden: false
  }), _ref2)
});
Ext.create({
  xtype: 'panel',
  title: 'Right',
  width: 300,
  height: 200,
  split: true
});
Ext.create({"xtype":"column"});
Ext.create({"xtype":"panel"});
Ext.create({"xtype":"container"});
Ext.create({"xtype":"grid"});
Ext.create({"xtype":"searchfield"});
Ext.create({"xtype":"toolbar"});
Ext.create({"xtype":"datepickerfield"});
Ext.create({"xtype":"button"});
Ext.create({"xtype":"datefield"});
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
  store: this.stort
});
Ext.create({
  xtype: 'column',
  text: 'Email',
  dataIndex: 'p01',
  flex: 3,
  resizable: true,
  responsiveConfig: (_ref = {}, _defineProperty(_ref, small, {
    hidden: true
  }), _defineProperty(_ref, medium, {
    hidden: false
  }), _ref)
});
Ext.create({
  xtype: 'panel',
  title: 'Centr',
  flex: 2,
  fullsreen: true,
  collapsible: true
});
Ext.create({
  xtype: 'datefield',
  width: 300,
  text: 'Start date'
});
Ext.create({
  xtype: 'button',
  text: 'Click me',
  handler: this.onButtonTap.bind(this),
  ui: 'action raised'
});
Ext.create({
  xtype: 'panel',
  title: 'Left',
  width: 300,
  height: 400,
  html: 'somecontent',
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
  text: 'Email',
  dataIndex: 'p01',
  flex: 3,
  resizable: true,
  responsiveConfig: (_ref2 = {}, _defineProperty(_ref2, small, {
    hidden: true
  }), _defineProperty(_ref2, medium, {
    hidden: false
  }), _ref2)
});
Ext.create({
  xtype: 'panel',
  title: 'Right',
  width: 300,
  height: 200,
  split: true
});
Ext.create({"xtype":"column"});
Ext.create({"xtype":"panel"});
Ext.create({"xtype":"container"});
Ext.create({"xtype":"grid"});
Ext.create({"xtype":"searchfield"});
Ext.create({"xtype":"toolbar"});
Ext.create({"xtype":"datepickerfield"});
Ext.create({"xtype":"button"});
Ext.create({"xtype":"datefield"});
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
  store: this.stort
});
Ext.create({
  xtype: 'column',
  text: 'Email',
  dataIndex: 'p01',
  flex: 3,
  resizable: true,
  responsiveConfig: (_ref = {}, _defineProperty(_ref, small, {
    hidden: true
  }), _defineProperty(_ref, medium, {
    hidden: false
  }), _ref)
});
Ext.create({
  xtype: 'datefield',
  width: 300,
  text: 'Start date'
});
Ext.create({
  xtype: 'button',
  text: 'Click me',
  handler: this.onButtonTap.bind(this),
  ui: 'action raised'
});
Ext.create({
  xtype: 'panel',
  title: 'Left',
  width: 300,
  height: 400,
  html: 'somecontent',
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
  text: 'Email',
  dataIndex: 'p01',
  flex: 3,
  resizable: true,
  responsiveConfig: (_ref2 = {}, _defineProperty(_ref2, small, {
    hidden: true
  }), _defineProperty(_ref2, medium, {
    hidden: false
  }), _ref2)
});
Ext.create({
  xtype: 'panel',
  title: 'Right',
  width: 300,
  height: 200,
  split: true
});
Ext.create({"xtype":"column"});
Ext.create({"xtype":"panel"});
Ext.create({"xtype":"container"});
Ext.create({"xtype":"grid"});
Ext.create({"xtype":"searchfield"});
Ext.create({"xtype":"toolbar"});
Ext.create({"xtype":"datepickerfield"});
Ext.create({"xtype":"button"});
Ext.create({"xtype":"datefield"});
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
  title: '\u041F\u043B\u0430\u043D\u0438\u0440\u043E\u0432\u0430\u043D\u0438\u0435 \u043F\u043E\u0441\u0442\u0430\u0432\u043E\u043A'
});
Ext.create({
  xtype: 'column',
  text: 'Email',
  dataIndex: 'p01',
  flex: 3,
  resizable: true,
  responsiveConfig: (_ref = {}, _defineProperty(_ref, small, {
    hidden: true
  }), _defineProperty(_ref, medium, {
    hidden: false
  }), _ref)
});
Ext.create({
  xtype: 'datefield',
  width: 300,
  text: 'Start date'
});
Ext.create({
  xtype: 'button',
  text: 'Click me',
  handler: this.onButtonTap.bind(this),
  ui: 'action raised'
});
Ext.create({
  xtype: 'panel',
  title: 'Left',
  width: 300,
  height: 400,
  html: 'somecontent',
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
  text: 'Email',
  dataIndex: 'p01',
  flex: 3,
  resizable: true,
  responsiveConfig: (_ref2 = {}, _defineProperty(_ref2, small, {
    hidden: true
  }), _defineProperty(_ref2, medium, {
    hidden: false
  }), _ref2)
});
Ext.create({
  xtype: 'panel',
  title: 'Right',
  width: 300,
  height: 200,
  split: true
});
Ext.create({"xtype":"column"});
Ext.create({"xtype":"panel"});
Ext.create({"xtype":"container"});
Ext.create({"xtype":"grid"});
Ext.create({"xtype":"searchfield"});
Ext.create({"xtype":"toolbar"});
Ext.create({"xtype":"datepickerfield"});
Ext.create({"xtype":"button"});
Ext.create({"xtype":"datefield"});
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
  title: '\u0420\u0435\u0433\u0438\u043E\u043D\u044B'
});
Ext.create({
  xtype: 'column',
  text: 'Email',
  dataIndex: 'p01',
  flex: 3,
  resizable: true,
  responsiveConfig: (_ref = {}, _defineProperty(_ref, small, {
    hidden: true
  }), _defineProperty(_ref, medium, {
    hidden: false
  }), _ref)
});
Ext.create({
  xtype: 'datefield',
  width: 300,
  text: 'Start date'
});
Ext.create({
  xtype: 'button',
  text: 'Click me',
  handler: this.onButtonTap.bind(this),
  ui: 'action raised'
});
Ext.create({
  xtype: 'panel',
  title: 'Left',
  width: 300,
  height: 400,
  html: 'somecontent',
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
  text: 'Email',
  dataIndex: 'p01',
  flex: 3,
  resizable: true,
  responsiveConfig: (_ref2 = {}, _defineProperty(_ref2, small, {
    hidden: true
  }), _defineProperty(_ref2, medium, {
    hidden: false
  }), _ref2)
});
Ext.create({
  xtype: 'panel',
  title: 'Right',
  width: 300,
  height: 200,
  split: true
});
Ext.create({"xtype":"column"});
Ext.create({"xtype":"panel"});
Ext.create({"xtype":"container"});
Ext.create({"xtype":"grid"});
Ext.create({"xtype":"searchfield"});
Ext.create({"xtype":"toolbar"});
Ext.create({"xtype":"datepickerfield"});
Ext.create({"xtype":"button"});
Ext.create({"xtype":"datefield"});
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
  title: '\u0420\u0435\u0433\u0438\u043E\u043D\u044B',
  shadow: true
});
Ext.create({
  xtype: 'column',
  text: 'Email',
  dataIndex: 'p01',
  flex: 3,
  resizable: true,
  responsiveConfig: (_ref = {}, _defineProperty(_ref, small, {
    hidden: true
  }), _defineProperty(_ref, medium, {
    hidden: false
  }), _ref)
});
Ext.create({
  xtype: 'datefield',
  width: 300,
  text: 'Start date'
});
Ext.create({
  xtype: 'button',
  text: 'Click me',
  handler: this.onButtonTap.bind(this),
  ui: 'action raised'
});
Ext.create({
  xtype: 'panel',
  title: 'Left',
  width: 300,
  height: 400,
  html: 'somecontent',
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
  text: 'Email',
  dataIndex: 'p01',
  flex: 3,
  resizable: true,
  responsiveConfig: (_ref2 = {}, _defineProperty(_ref2, small, {
    hidden: true
  }), _defineProperty(_ref2, medium, {
    hidden: false
  }), _ref2)
});
Ext.create({
  xtype: 'panel',
  title: 'Right',
  width: 300,
  height: 200,
  split: true
});
Ext.create({"xtype":"column"});
Ext.create({"xtype":"panel"});
Ext.create({"xtype":"container"});
Ext.create({"xtype":"grid"});
Ext.create({"xtype":"searchfield"});
Ext.create({"xtype":"toolbar"});
Ext.create({"xtype":"datepickerfield"});
Ext.create({"xtype":"button"});
Ext.create({"xtype":"datefield"});
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
  title: '\u0420\u0435\u0433\u0438\u043E\u043D\u044B',
  shadow: true,
  platformConfig: {
    desktop: {
      plugins: {
        gridcellediting: true
      }
    }
  }
});
Ext.create({
  xtype: 'column',
  text: 'Email',
  dataIndex: 'p01',
  flex: 3,
  resizable: true,
  responsiveConfig: (_ref = {}, _defineProperty(_ref, small, {
    hidden: true
  }), _defineProperty(_ref, medium, {
    hidden: false
  }), _ref)
});
Ext.create({
  xtype: 'datefield',
  width: 300,
  text: 'Start date'
});
Ext.create({
  xtype: 'button',
  text: 'Click me',
  handler: this.onButtonTap.bind(this),
  ui: 'action raised'
});
Ext.create({
  xtype: 'panel',
  title: 'Left',
  width: 300,
  height: 400,
  html: 'somecontent',
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
  text: 'Email',
  dataIndex: 'p01',
  flex: 3,
  resizable: true,
  responsiveConfig: (_ref2 = {}, _defineProperty(_ref2, small, {
    hidden: true
  }), _defineProperty(_ref2, medium, {
    hidden: false
  }), _ref2)
});
Ext.create({
  xtype: 'panel',
  title: 'Right',
  width: 300,
  height: 200,
  split: true
});
Ext.create({"xtype":"column"});
Ext.create({"xtype":"panel"});
Ext.create({"xtype":"container"});
Ext.create({"xtype":"grid"});
Ext.create({"xtype":"searchfield"});
Ext.create({"xtype":"toolbar"});
Ext.create({"xtype":"datepickerfield"});
Ext.create({"xtype":"button"});
Ext.create({"xtype":"datefield"});
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
  title: '\u0420\u0435\u0433\u0438\u043E\u043D\u044B',
  shadow: true,
  platformConfig: {
    plugins: {
      gridcellediting: true
    }
  }
});
Ext.create({
  xtype: 'column',
  text: 'Email',
  dataIndex: 'p01',
  flex: 3,
  resizable: true,
  responsiveConfig: (_ref = {}, _defineProperty(_ref, small, {
    hidden: true
  }), _defineProperty(_ref, medium, {
    hidden: false
  }), _ref)
});
Ext.create({
  xtype: 'datefield',
  width: 300,
  text: 'Start date'
});
Ext.create({
  xtype: 'button',
  text: 'Click me',
  handler: this.onButtonTap.bind(this),
  ui: 'action raised'
});
Ext.create({
  xtype: 'panel',
  title: 'Left',
  width: 300,
  height: 400,
  html: 'somecontent',
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
  text: 'Email',
  dataIndex: 'p01',
  flex: 3,
  resizable: true,
  responsiveConfig: (_ref2 = {}, _defineProperty(_ref2, small, {
    hidden: true
  }), _defineProperty(_ref2, medium, {
    hidden: false
  }), _ref2)
});
Ext.create({
  xtype: 'panel',
  title: 'Right',
  width: 300,
  height: 200,
  split: true
});
Ext.create({"xtype":"column"});
Ext.create({"xtype":"panel"});
Ext.create({"xtype":"container"});
Ext.create({"xtype":"grid"});
Ext.create({"xtype":"searchfield"});
Ext.create({"xtype":"toolbar"});
Ext.create({"xtype":"datepickerfield"});
Ext.create({"xtype":"button"});
Ext.create({"xtype":"datefield"});
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
  title: '\u0420\u0435\u0433\u0438\u043E\u043D\u044B',
  shadow: true,
  width: 200,
  platformConfig: {
    plugins: {
      gridcellediting: true
    }
  }
});
Ext.create({
  xtype: 'column',
  text: 'Email',
  dataIndex: 'p01',
  flex: 3,
  resizable: true,
  responsiveConfig: (_ref = {}, _defineProperty(_ref, small, {
    hidden: true
  }), _defineProperty(_ref, medium, {
    hidden: false
  }), _ref)
});
Ext.create({
  xtype: 'datefield',
  width: 300,
  text: 'Start date'
});
Ext.create({
  xtype: 'button',
  text: 'Click me',
  handler: this.onButtonTap.bind(this),
  ui: 'action raised'
});
Ext.create({
  xtype: 'panel',
  title: 'Left',
  width: 300,
  height: 400,
  html: 'somecontent',
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
  text: 'Email',
  dataIndex: 'p01',
  flex: 3,
  resizable: true,
  responsiveConfig: (_ref2 = {}, _defineProperty(_ref2, small, {
    hidden: true
  }), _defineProperty(_ref2, medium, {
    hidden: false
  }), _ref2)
});
Ext.create({
  xtype: 'panel',
  title: 'Right',
  width: 300,
  height: 200,
  split: true
});
Ext.create({"xtype":"column"});
Ext.create({"xtype":"panel"});
Ext.create({"xtype":"container"});
Ext.create({"xtype":"grid"});
Ext.create({"xtype":"searchfield"});
Ext.create({"xtype":"toolbar"});
Ext.create({"xtype":"datepickerfield"});
Ext.create({"xtype":"button"});
Ext.create({"xtype":"datefield"});
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
  title: '\u0420\u0435\u0433\u0438\u043E\u043D\u044B',
  shadow: true,
  width: 200,
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
  text: 'Email',
  dataIndex: 'p01',
  flex: 3,
  resizable: true,
  responsiveConfig: (_ref = {}, _defineProperty(_ref, small, {
    hidden: true
  }), _defineProperty(_ref, medium, {
    hidden: false
  }), _ref)
});
Ext.create({
  xtype: 'datefield',
  width: 300,
  text: 'Start date'
});
Ext.create({
  xtype: 'button',
  text: 'Click me',
  handler: this.onButtonTap.bind(this),
  ui: 'action raised'
});
Ext.create({
  xtype: 'panel',
  title: 'Left',
  width: 300,
  height: 400,
  html: 'somecontent',
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
  text: 'Email',
  dataIndex: 'p01',
  flex: 3,
  resizable: true,
  responsiveConfig: (_ref2 = {}, _defineProperty(_ref2, small, {
    hidden: true
  }), _defineProperty(_ref2, medium, {
    hidden: false
  }), _ref2)
});
Ext.create({
  xtype: 'panel',
  title: 'Right',
  width: 300,
  height: 200,
  split: true
});
Ext.create({"xtype":"column"});
Ext.create({"xtype":"panel"});
Ext.create({"xtype":"container"});
Ext.create({"xtype":"grid"});
Ext.create({"xtype":"searchfield"});
Ext.create({"xtype":"toolbar"});
Ext.create({"xtype":"datepickerfield"});
Ext.create({"xtype":"button"});
Ext.create({"xtype":"datefield"});
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
  title: '\u0420\u0435\u0433\u0438\u043E\u043D\u044B',
  shadow: true,
  width: 200,
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
  text: 'Email',
  dataIndex: 'p01',
  flex: 3,
  resizable: true,
  responsiveConfig: (_ref = {}, _defineProperty(_ref, small, {
    hidden: true
  }), _defineProperty(_ref, medium, {
    hidden: false
  }), _ref)
});
Ext.create({
  xtype: 'datefield',
  width: 300,
  text: 'Start date'
});
Ext.create({
  xtype: 'button',
  text: 'Click me',
  handler: this.onButtonTap.bind(this),
  ui: 'action raised'
});
Ext.create({
  xtype: 'panel',
  title: 'Left',
  width: 300,
  height: 400,
  html: 'somecontent',
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
  text: 'Email',
  dataIndex: 'p01',
  flex: 3,
  resizable: true,
  responsiveConfig: (_ref2 = {}, _defineProperty(_ref2, small, {
    hidden: true
  }), _defineProperty(_ref2, medium, {
    hidden: false
  }), _ref2)
});
Ext.create({
  xtype: 'panel',
  title: 'Right',
  width: 300,
  height: 200,
  split: true
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
  title: '\u0420\u0435\u0433\u0438\u043E\u043D\u044B',
  shadow: true,
  width: 200,
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
  text: 'Email',
  dataIndex: 'p01',
  flex: 3,
  resizable: true,
  responsiveConfig: (_ref = {}, _defineProperty(_ref, small, {
    hidden: true
  }), _defineProperty(_ref, medium, {
    hidden: false
  }), _ref)
});
Ext.create({
  xtype: 'datefield',
  width: 300,
  text: 'Start date'
});
Ext.create({
  xtype: 'button',
  text: 'Click me',
  handler: this.onButtonTap.bind(this),
  ui: 'action raised'
});
Ext.create({
  xtype: 'panel',
  title: 'Left',
  width: 300,
  height: 400,
  html: 'somecontent',
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
  text: 'Email',
  dataIndex: 'p01',
  flex: 3,
  resizable: true,
  responsiveConfig: (_ref2 = {}, _defineProperty(_ref2, small, {
    hidden: true
  }), _defineProperty(_ref2, medium, {
    hidden: false
  }), _ref2)
});
Ext.create({
  xtype: 'panel',
  title: 'Right',
  width: 300,
  height: 200,
  split: true
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
  title: '\u0420\u0435\u0433\u0438\u043E\u043D\u044B',
  shadow: true,
  width: 200,
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
  text: 'Email',
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
  xtype: 'datefield',
  width: 300,
  text: 'Start date'
});
Ext.create({
  xtype: 'button',
  text: 'Click me',
  handler: this.onButtonTap.bind(this),
  ui: 'action raised'
});
Ext.create({
  xtype: 'panel',
  title: 'Left',
  width: 300,
  height: 400,
  html: 'somecontent',
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
  text: 'Email',
  dataIndex: 'p01',
  flex: 3,
  resizable: true,
  responsiveConfig: (_ref2 = {}, _defineProperty(_ref2, small, {
    hidden: true
  }), _defineProperty(_ref2, medium, {
    hidden: false
  }), _ref2)
});
Ext.create({
  xtype: 'panel',
  title: 'Right',
  width: 300,
  height: 200,
  split: true
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
  width: 200,
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
  text: 'Email',
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
  xtype: 'datefield',
  width: 300,
  text: 'Start date'
});
Ext.create({
  xtype: 'button',
  text: 'Click me',
  handler: this.onButtonTap.bind(this),
  ui: 'action raised'
});
Ext.create({
  xtype: 'panel',
  title: 'Left',
  width: 300,
  height: 400,
  html: 'somecontent',
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
  text: 'Email',
  dataIndex: 'p01',
  flex: 3,
  resizable: true,
  responsiveConfig: (_ref2 = {}, _defineProperty(_ref2, small, {
    hidden: true
  }), _defineProperty(_ref2, medium, {
    hidden: false
  }), _ref2)
});
Ext.create({
  xtype: 'panel',
  title: 'Right',
  width: 300,
  height: 200,
  split: true
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
  width: 200,
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
  xtype: 'datefield',
  width: 300,
  text: 'Start date'
});
Ext.create({
  xtype: 'button',
  text: 'Click me',
  handler: this.onButtonTap.bind(this),
  ui: 'action raised'
});
Ext.create({
  xtype: 'panel',
  title: 'Left',
  width: 300,
  height: 400,
  html: 'somecontent',
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
  text: 'Email',
  dataIndex: 'p01',
  flex: 3,
  resizable: true,
  responsiveConfig: (_ref2 = {}, _defineProperty(_ref2, small, {
    hidden: true
  }), _defineProperty(_ref2, medium, {
    hidden: false
  }), _ref2)
});
Ext.create({
  xtype: 'panel',
  title: 'Right',
  width: 300,
  height: 200,
  split: true
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
  xtype: 'panel',
  title: 'Built in Tools',
  tools: [{
    type: 'minimize',
    handler: toolHandler
  }, {
    type: 'refresh',
    handler: toolHandler
  }, {
    type: 'search',
    handler: toolHandler
  }, {
    type: 'save',
    handler: toolHandler
  }, {
    type: 'menu',
    handler: toolHandler
  }]
});
Ext.create({
  xtype: 'grid',
  store: this.stort,
  shadow: true,
  width: 200,
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
  xtype: 'datefield',
  width: 300,
  text: 'Start date'
});
Ext.create({
  xtype: 'button',
  text: 'Click me',
  handler: this.onButtonTap.bind(this),
  ui: 'action raised'
});
Ext.create({
  xtype: 'panel',
  title: 'Left',
  width: 300,
  height: 400,
  html: 'somecontent',
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
  text: 'Email',
  dataIndex: 'p01',
  flex: 3,
  resizable: true,
  responsiveConfig: (_ref2 = {}, _defineProperty(_ref2, small, {
    hidden: true
  }), _defineProperty(_ref2, medium, {
    hidden: false
  }), _ref2)
});
Ext.create({
  xtype: 'panel',
  title: 'Right',
  width: 300,
  height: 200,
  split: true
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
  xtype: 'panel',
  title: 'Built in Tools',
  tools: [{
    type: 'minimize',
    handler: toolHandler
  }, {
    type: 'refresh',
    handler: toolHandler
  }, {
    type: 'search',
    handler: toolHandler
  }, {
    type: 'save',
    handler: toolHandler
  }, {
    type: 'menu',
    handler: toolHandler
  }]
});
Ext.create({
  xtype: 'grid',
  store: this.stort,
  shadow: true,
  width: 200,
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
  xtype: 'datefield',
  width: 300,
  text: 'Start date'
});
Ext.create({
  xtype: 'button',
  text: 'Click me',
  handler: this.onButtonTap.bind(this),
  ui: 'action raised'
});
Ext.create({
  xtype: 'panel',
  title: 'Left',
  width: 300,
  height: 400,
  html: 'somecontent',
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
  text: 'Email',
  dataIndex: 'p01',
  flex: 3,
  resizable: true,
  responsiveConfig: (_ref2 = {}, _defineProperty(_ref2, small, {
    hidden: true
  }), _defineProperty(_ref2, medium, {
    hidden: false
  }), _ref2)
});
Ext.create({
  xtype: 'panel',
  title: 'Right',
  width: 300,
  height: 200,
  split: true
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
  xtype: 'panel',
  title: 'Built in Tools',
  tools: [{
    type: 'minimize',
    handler: toolHandler
  }, {
    type: 'refresh',
    handler: toolHandler
  }, {
    type: 'search',
    handler: toolHandler
  }, {
    type: 'save',
    handler: toolHandler
  }, {
    type: 'menu',
    handler: toolHandler
  }]
});
Ext.create({
  xtype: 'grid',
  store: this.stort,
  shadow: true,
  width: 200,
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
  xtype: 'datefield',
  width: 300,
  text: 'Start date'
});
Ext.create({
  xtype: 'button',
  text: 'Click me',
  handler: this.onButtonTap.bind(this),
  ui: 'action raised'
});
Ext.create({
  xtype: 'panel',
  title: 'Left',
  width: 300,
  height: 400,
  html: 'somecontent',
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
  text: 'Email',
  dataIndex: 'p01',
  flex: 3,
  resizable: true,
  responsiveConfig: (_ref2 = {}, _defineProperty(_ref2, small, {
    hidden: true
  }), _defineProperty(_ref2, medium, {
    hidden: false
  }), _ref2)
});
Ext.create({
  xtype: 'panel',
  title: 'Right',
  width: 300,
  height: 200,
  split: true
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
  xtype: 'panel',
  title: 'Built in Tools',
  height: 300,
  tools: [{
    type: 'minimize',
    handler: toolHandler
  }, {
    type: 'refresh',
    handler: toolHandler
  }, {
    type: 'search',
    handler: toolHandler
  }, {
    type: 'save',
    handler: toolHandler
  }, {
    type: 'menu',
    handler: toolHandler
  }]
});
Ext.create({
  xtype: 'grid',
  store: this.stort,
  shadow: true,
  width: 200,
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
  xtype: 'datefield',
  width: 300,
  text: 'Start date'
});
Ext.create({
  xtype: 'button',
  text: 'Click me',
  handler: this.onButtonTap.bind(this),
  ui: 'action raised'
});
Ext.create({
  xtype: 'panel',
  title: 'Left',
  width: 300,
  height: 400,
  html: 'somecontent',
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
  text: 'Email',
  dataIndex: 'p01',
  flex: 3,
  resizable: true,
  responsiveConfig: (_ref2 = {}, _defineProperty(_ref2, small, {
    hidden: true
  }), _defineProperty(_ref2, medium, {
    hidden: false
  }), _ref2)
});
Ext.create({
  xtype: 'panel',
  title: 'Right',
  width: 300,
  height: 200,
  split: true
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
  width: 200,
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
  xtype: 'datefield',
  width: 300,
  text: 'Start date'
});
Ext.create({
  xtype: 'button',
  text: 'Click me',
  handler: this.onButtonTap.bind(this),
  ui: 'action raised'
});
Ext.create({
  xtype: 'panel',
  title: 'Left',
  width: 300,
  height: 400,
  html: 'somecontent',
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
  text: 'Email',
  dataIndex: 'p01',
  flex: 3,
  resizable: true,
  responsiveConfig: (_ref2 = {}, _defineProperty(_ref2, small, {
    hidden: true
  }), _defineProperty(_ref2, medium, {
    hidden: false
  }), _ref2)
});
Ext.create({
  xtype: 'panel',
  title: 'Right',
  width: 300,
  height: 200,
  split: true
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
  width: 200,
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
  xtype: 'datefield',
  width: 300,
  text: 'Start date'
});
Ext.create({
  xtype: 'button',
  text: 'Click me',
  handler: this.onButtonTap.bind(this),
  ui: 'action raised'
});
Ext.create({
  xtype: 'panel',
  title: 'Left',
  width: 300,
  height: 400,
  html: 'somecontent',
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
  text: 'Email',
  dataIndex: 'p01',
  flex: 3,
  resizable: true,
  responsiveConfig: (_ref2 = {}, _defineProperty(_ref2, small, {
    hidden: true
  }), _defineProperty(_ref2, medium, {
    hidden: false
  }), _ref2)
});
Ext.create({
  xtype: 'panel',
  title: 'Right',
  width: 300,
  height: 200,
  split: true
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
  width: 200,
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
  xtype: 'datefield',
  width: 300,
  text: 'Start date'
});
Ext.create({
  xtype: 'button',
  text: 'Click me',
  handler: this.onButtonTap.bind(this),
  ui: 'action raised'
});
Ext.create({
  xtype: 'panel',
  title: 'Left',
  width: 300,
  height: 400,
  html: 'somecontent',
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
  text: 'Email',
  dataIndex: 'p01',
  flex: 3,
  resizable: true,
  responsiveConfig: (_ref2 = {}, _defineProperty(_ref2, small, {
    hidden: true
  }), _defineProperty(_ref2, medium, {
    hidden: false
  }), _ref2)
});
Ext.create({
  xtype: 'panel',
  title: 'Right',
  width: 300,
  height: 200,
  split: true
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
Ext.require(['Ext.grid.plugin.Editable', 'Ext.grid.plugin.CellEditing', 'Ext.data.validator.Presence', 'Ext.data.validator.Number', 'Ext.data.validator.Date']);
Ext.create('Ext.data.Store', {
  fields: ['p00', 'p01'],
  data: data
});
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
  width: 200,
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
  xtype: 'datefield',
  width: 300,
  text: 'Start date'
});
Ext.create({
  xtype: 'button',
  text: 'Click me',
  handler: this.onButtonTap.bind(this),
  ui: 'action raised'
});
Ext.create({
  xtype: 'panel',
  title: 'Left',
  width: 300,
  height: 400,
  html: 'somecontent',
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
  text: 'Email',
  dataIndex: 'p01',
  flex: 3,
  resizable: true,
  responsiveConfig: (_ref2 = {}, _defineProperty(_ref2, small, {
    hidden: true
  }), _defineProperty(_ref2, medium, {
    hidden: false
  }), _ref2)
});
Ext.create({
  xtype: 'panel',
  title: 'Right',
  width: 300,
  height: 200,
  split: true
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
Ext.require(['Ext.grid.plugin.Editable', 'Ext.grid.plugin.CellEditing', 'Ext.data.validator.Presence', 'Ext.data.validator.Number', 'Ext.data.validator.Date']);
Ext.create('Ext.data.Store', {
  fields: ['p00', 'p01'],
  data: data
});
Ext.create({
  xtype: 'container',
  padding: 10,
  width: 1000,
  layout: {
    type: 'vbox',
    pack: 'center',
    align: 'stretch'
  }
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
  width: 200,
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
  xtype: 'datefield',
  width: 300,
  text: 'Start date'
});
Ext.create({
  xtype: 'button',
  text: 'Click me',
  handler: this.onButtonTap.bind(this),
  ui: 'action raised'
});
Ext.create({
  xtype: 'panel',
  title: 'Left',
  width: 300,
  height: 400,
  html: 'somecontent',
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
  text: 'Email',
  dataIndex: 'p01',
  flex: 3,
  resizable: true,
  responsiveConfig: (_ref2 = {}, _defineProperty(_ref2, small, {
    hidden: true
  }), _defineProperty(_ref2, medium, {
    hidden: false
  }), _ref2)
});
Ext.create({
  xtype: 'panel',
  title: 'Right',
  width: 300,
  height: 200,
  split: true
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
Ext.require(['Ext.grid.plugin.Editable', 'Ext.grid.plugin.CellEditing', 'Ext.data.validator.Presence', 'Ext.data.validator.Number', 'Ext.data.validator.Date']);
Ext.create('Ext.data.Store', {
  fields: ['p00', 'p01'],
  data: data
});
Ext.create({
  xtype: 'container',
  padding: 10,
  width: 1000,
  layout: {
    type: 'vbox',
    pack: 'top',
    align: 'stretch'
  }
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
  width: 200,
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
  xtype: 'datefield',
  width: 300,
  text: 'Start date'
});
Ext.create({
  xtype: 'button',
  text: 'Click me',
  handler: this.onButtonTap.bind(this),
  ui: 'action raised'
});
Ext.create({
  xtype: 'panel',
  title: 'Left',
  width: 300,
  height: 400,
  html: 'somecontent',
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
  text: 'Email',
  dataIndex: 'p01',
  flex: 3,
  resizable: true,
  responsiveConfig: (_ref2 = {}, _defineProperty(_ref2, small, {
    hidden: true
  }), _defineProperty(_ref2, medium, {
    hidden: false
  }), _ref2)
});
Ext.create({
  xtype: 'panel',
  title: 'Right',
  width: 300,
  height: 200,
  split: true
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
Ext.require(['Ext.grid.plugin.Editable', 'Ext.grid.plugin.CellEditing', 'Ext.data.validator.Presence', 'Ext.data.validator.Number', 'Ext.data.validator.Date']);
Ext.create('Ext.data.Store', {
  fields: ['p00', 'p01'],
  data: data
});
Ext.create({
  xtype: 'container',
  padding: 10,
  width: 1000,
  layout: {
    type: 'vbox',
    pack: 'top',
    align: 'stretch'
  }
});
Ext.create({
  xtype: 'container',
  autoSize: true,
  title: '\u041F\u043B\u0430\u043D\u0438\u0440\u043E\u0432\u0430\u043D\u0438\u0435 \u043F\u043E\u0441\u0442\u0430\u0432\u043E\u043A',
  layout: 'hbox',
  padding: '30'
});
Ext.create({
  xtype: 'grid',
  store: this.stort,
  shadow: true,
  width: 200,
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
  xtype: 'datefield',
  width: 300,
  text: 'Start date'
});
Ext.create({
  xtype: 'button',
  text: 'Click me',
  handler: this.onButtonTap.bind(this),
  ui: 'action raised'
});
Ext.create({
  xtype: 'panel',
  title: 'Left',
  width: 300,
  height: 400,
  html: 'somecontent',
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
  text: 'Email',
  dataIndex: 'p01',
  flex: 3,
  resizable: true,
  responsiveConfig: (_ref2 = {}, _defineProperty(_ref2, small, {
    hidden: true
  }), _defineProperty(_ref2, medium, {
    hidden: false
  }), _ref2)
});
Ext.create({
  xtype: 'panel',
  title: 'Right',
  width: 300,
  height: 200,
  split: true
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
Ext.require(['Ext.grid.plugin.Editable', 'Ext.grid.plugin.CellEditing', 'Ext.data.validator.Presence', 'Ext.data.validator.Number', 'Ext.data.validator.Date']);
Ext.create('Ext.data.Store', {
  fields: ['p00', 'p01'],
  data: data
});
Ext.create({
  xtype: 'container',
  padding: 10,
  width: 1000,
  layout: {
    type: 'vbox',
    pack: 'top',
    align: 'stretch'
  }
});
Ext.create({
  xtype: 'grid',
  store: this.stort,
  shadow: true,
  width: 200,
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
  xtype: 'container',
  autoSize: true,
  title: '\u041F\u043B\u0430\u043D\u0438\u0440\u043E\u0432\u0430\u043D\u0438\u0435 \u043F\u043E\u0441\u0442\u0430\u0432\u043E\u043A',
  layout: 'hbox',
  padding: '30'
});
Ext.create({
  xtype: 'datefield',
  width: 300,
  text: 'Start date'
});
Ext.create({
  xtype: 'button',
  text: 'Click me',
  handler: this.onButtonTap.bind(this),
  ui: 'action raised'
});
Ext.create({
  xtype: 'panel',
  title: 'Left',
  width: 300,
  height: 400,
  html: 'somecontent',
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
  text: 'Email',
  dataIndex: 'p01',
  flex: 3,
  resizable: true,
  responsiveConfig: (_ref2 = {}, _defineProperty(_ref2, small, {
    hidden: true
  }), _defineProperty(_ref2, medium, {
    hidden: false
  }), _ref2)
});
Ext.create({
  xtype: 'panel',
  title: 'Right',
  width: 300,
  height: 200,
  split: true
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
Ext.require(['Ext.grid.plugin.Editable', 'Ext.grid.plugin.CellEditing', 'Ext.data.validator.Presence', 'Ext.data.validator.Number', 'Ext.data.validator.Date']);
Ext.create('Ext.data.Store', {
  fields: ['p00', 'p01'],
  data: data
});
Ext.create({
  xtype: 'container',
  padding: 10,
  width: 1000,
  layout: {
    type: 'vbox',
    pack: 'top',
    align: 'stretch'
  }
});
Ext.create({
  xtype: 'grid',
  store: this.stort,
  shadow: true,
  width: 200,
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
Ext.require(['Ext.grid.plugin.Editable', 'Ext.grid.plugin.CellEditing', 'Ext.data.validator.Presence', 'Ext.data.validator.Number', 'Ext.data.validator.Date']);
Ext.create('Ext.data.Store', {
  fields: ['p00', 'p01'],
  data: data
});
Ext.create({
  xtype: 'container',
  padding: 10,
  width: 1000,
  layout: {
    type: 'vbox',
    pack: 'top'
  }
});
Ext.create({
  xtype: 'grid',
  store: this.stort,
  shadow: true,
  width: 200,
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
Ext.require(['Ext.grid.plugin.Editable', 'Ext.grid.plugin.CellEditing', 'Ext.data.validator.Presence', 'Ext.data.validator.Number', 'Ext.data.validator.Date']);
Ext.create('Ext.data.Store', {
  fields: ['p00', 'p01'],
  data: data
});
Ext.create({
  xtype: 'container',
  padding: 10,
  width: 1000,
  Height: 1000,
  layout: {
    type: 'vbox',
    pack: 'top'
  }
});
Ext.create({
  xtype: 'grid',
  store: this.stort,
  shadow: true,
  width: 200,
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
Ext.require(['Ext.grid.plugin.Editable', 'Ext.grid.plugin.CellEditing', 'Ext.data.validator.Presence', 'Ext.data.validator.Number', 'Ext.data.validator.Date']);
Ext.create('Ext.data.Store', {
  fields: ['p00', 'p01'],
  data: data
});
Ext.create({
  xtype: 'container',
  padding: 10,
  width: 1000,
  height: 1000,
  layout: {
    type: 'vbox',
    pack: 'top'
  }
});
Ext.create({
  xtype: 'grid',
  store: this.stort,
  shadow: true,
  width: 200,
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
  width: 200,
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
  xtype: 'datefield',
  width: 300,
  text: 'Start date'
});
Ext.create({
  xtype: 'button',
  text: 'Click me',
  handler: this.onButtonTap.bind(this),
  ui: 'action raised'
});
Ext.create({
  xtype: 'panel',
  title: 'Left',
  width: 300,
  height: 400,
  html: 'somecontent',
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
  text: 'Email',
  dataIndex: 'p01',
  flex: 3,
  resizable: true,
  responsiveConfig: (_ref2 = {}, _defineProperty(_ref2, small, {
    hidden: true
  }), _defineProperty(_ref2, medium, {
    hidden: false
  }), _ref2)
});
Ext.create({
  xtype: 'panel',
  title: 'Right',
  width: 300,
  height: 200,
  split: true
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
  width: 200,
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
  xtype: 'panel',
  title: 'Left',
  width: 300,
  height: 400,
  html: 'somecontent',
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
  text: 'Email',
  dataIndex: 'p01',
  flex: 3,
  resizable: true,
  responsiveConfig: (_ref2 = {}, _defineProperty(_ref2, small, {
    hidden: true
  }), _defineProperty(_ref2, medium, {
    hidden: false
  }), _ref2)
});
Ext.create({
  xtype: 'panel',
  title: 'Right',
  width: 300,
  height: 200,
  split: true
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
  width: 200,
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
  xtype: 'datefield',
  width: 300,
  text: 'Start date'
});
Ext.create({
  xtype: 'button',
  text: 'Click me',
  handler: this.onButtonTap.bind(this),
  ui: 'action raised'
});
Ext.create({
  xtype: 'panel',
  title: 'Left',
  width: 300,
  height: 400,
  html: 'somecontent',
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
  text: 'Email',
  dataIndex: 'p01',
  flex: 3,
  resizable: true,
  responsiveConfig: (_ref2 = {}, _defineProperty(_ref2, small, {
    hidden: true
  }), _defineProperty(_ref2, medium, {
    hidden: false
  }), _ref2)
});
Ext.create({
  xtype: 'panel',
  title: 'Right',
  width: 300,
  height: 200,
  split: true
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
  width: 200,
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
  xtype: 'panel',
  title: 'Left',
  width: 300,
  height: 400,
  html: 'somecontent',
  padding: 30,
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
  text: 'Email',
  dataIndex: 'p01',
  flex: 3,
  resizable: true,
  responsiveConfig: (_ref2 = {}, _defineProperty(_ref2, small, {
    hidden: true
  }), _defineProperty(_ref2, medium, {
    hidden: false
  }), _ref2)
});
Ext.create({
  xtype: 'panel',
  title: 'Right',
  width: 300,
  height: 200,
  split: true
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
  width: 200,
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
  xtype: 'panel',
  title: 'Left',
  width: 300,
  height: 400,
  html: 'somecontent',
  padding: '30',
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
  text: 'Email',
  dataIndex: 'p01',
  flex: 3,
  resizable: true,
  responsiveConfig: (_ref2 = {}, _defineProperty(_ref2, small, {
    hidden: true
  }), _defineProperty(_ref2, medium, {
    hidden: false
  }), _ref2)
});
Ext.create({
  xtype: 'panel',
  title: 'Right',
  width: 300,
  height: 200,
  split: true
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
  width: 200,
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
Ext.create({"xtype":"container"});
Ext.create({
  xtype: 'panel',
  title: 'Left',
  width: 300,
  height: 400,
  html: 'somecontent',
  padding: '30',
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
  text: 'Email',
  dataIndex: 'p01',
  flex: 3,
  resizable: true,
  responsiveConfig: (_ref2 = {}, _defineProperty(_ref2, small, {
    hidden: true
  }), _defineProperty(_ref2, medium, {
    hidden: false
  }), _ref2)
});
Ext.create({
  xtype: 'panel',
  title: 'Right',
  width: 300,
  height: 200,
  split: true
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
  width: 200,
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
  xtype: 'container',
  defaults: {
    margin: 10
  }
});
Ext.create({
  xtype: 'panel',
  title: 'Left',
  width: 300,
  height: 400,
  html: 'somecontent',
  padding: '30',
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
  text: 'Email',
  dataIndex: 'p01',
  flex: 3,
  resizable: true,
  responsiveConfig: (_ref2 = {}, _defineProperty(_ref2, small, {
    hidden: true
  }), _defineProperty(_ref2, medium, {
    hidden: false
  }), _ref2)
});
Ext.create({
  xtype: 'panel',
  title: 'Right',
  width: 300,
  height: 200,
  split: true
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
  width: 200,
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
  xtype: 'container',
  defaults: {
    margin: 10
  }
});
Ext.create({
  xtype: 'panel',
  title: 'Left',
  width: 300,
  height: 400,
  html: 'somecontent',
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
  text: 'Email',
  dataIndex: 'p01',
  flex: 3,
  resizable: true,
  responsiveConfig: (_ref2 = {}, _defineProperty(_ref2, small, {
    hidden: true
  }), _defineProperty(_ref2, medium, {
    hidden: false
  }), _ref2)
});
Ext.create({
  xtype: 'panel',
  title: 'Right',
  width: 300,
  height: 200,
  split: true
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
  width: 200,
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
  xtype: 'container',
  defaults: {
    margin: 10
  }
});
Ext.create({
  xtype: 'panel',
  width: 300,
  height: 200,
  split: true
});
Ext.create({
  xtype: 'panel',
  title: 'Left',
  width: 500,
  height: 400,
  html: 'somecontent',
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
  text: 'Email',
  dataIndex: 'p01',
  flex: 3,
  resizable: true,
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
Ext.create({"xtype":"datefield"});
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
  width: 200,
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
  xtype: 'container',
  defaults: {
    margin: 10
  }
});
Ext.create({
  xtype: 'panel',
  width: 500,
  height: 200,
  split: true
});
Ext.create({
  xtype: 'panel',
  title: 'Left',
  width: 500,
  height: 400,
  html: 'somecontent',
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
  text: 'Email',
  dataIndex: 'p01',
  flex: 3,
  resizable: true,
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
Ext.create({"xtype":"datefield"});
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
  width: 200,
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
  xtype: 'container',
  defaults: {
    margin: 10
  }
});
Ext.create({
  xtype: 'panel',
  width: 800,
  height: 200,
  split: true
});
Ext.create({
  xtype: 'panel',
  title: 'Left',
  width: 500,
  height: 400,
  html: 'somecontent',
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
  text: 'Email',
  dataIndex: 'p01',
  flex: 3,
  resizable: true,
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
Ext.create({"xtype":"datefield"});
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
  width: 200,
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
  xtype: 'container',
  defaults: {
    margin: 10
  }
});
Ext.create({
  xtype: 'panel',
  width: 800,
  height: 200,
  split: true
});
Ext.create({
  xtype: 'panel',
  title: 'Left',
  width: 500,
  height: 400,
  html: 'somecontent',
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
  text: 'Email',
  dataIndex: 'p01',
  flex: 3,
  resizable: true,
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
Ext.create({"xtype":"datefield"});
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
  width: 200,
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
  xtype: 'container',
  defaults: {
    margin: 10
  }
});
Ext.create({
  xtype: 'panel',
  width: 800,
  height: 200,
  split: true
});
Ext.create({
  xtype: 'panel',
  title: 'Left',
  width: 500,
  height: 400,
  html: 'somecontent',
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
  text: 'Email',
  dataIndex: 'p01',
  flex: 3,
  resizable: true,
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
Ext.create({"xtype":"datefield"});
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
  width: 200,
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
  xtype: 'container',
  defaults: {
    margin: 10
  }
});
Ext.create({
  xtype: 'panel',
  width: 800,
  height: 200,
  split: true
});
Ext.create({
  xtype: 'panel',
  title: 'Left',
  width: 500,
  height: 400,
  html: 'somecontent',
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
  text: 'Email',
  dataIndex: 'p01',
  flex: 3,
  resizable: true,
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
Ext.create({"xtype":"datefield"});
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
  width: 200,
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
  xtype: 'container',
  defaults: {
    margin: 10
  }
});
Ext.create({
  xtype: 'panel',
  width: 800,
  height: 200,
  split: true
});
Ext.create({
  xtype: 'panel',
  title: 'Left',
  width: 500,
  height: 400,
  html: 'somecontent',
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
  text: 'Email',
  dataIndex: 'p01',
  flex: 3,
  resizable: true,
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
Ext.create({"xtype":"datefield"});
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
  width: 200,
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
  xtype: 'container',
  defaults: {
    margin: 10
  }
});
Ext.create({
  xtype: 'panel',
  width: 800,
  height: 200,
  split: true
});
Ext.create({
  xtype: 'panel',
  title: 'Left',
  width: 500,
  height: 400,
  html: 'somecontent',
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
  text: 'Email',
  dataIndex: 'p01',
  flex: 3,
  resizable: true,
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
Ext.create({"xtype":"datefield"});
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
  width: 200,
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
  xtype: 'container',
  defaults: {
    margin: 10
  }
});
Ext.create({
  xtype: 'panel',
  width: 800,
  height: 200,
  split: true
});
Ext.create({
  xtype: 'panel',
  title: 'Left',
  width: 500,
  height: 400,
  html: 'somecontent',
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
  width: 200,
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
  xtype: 'container',
  defaults: {
    margin: 10
  }
});
Ext.create({
  xtype: 'panel',
  width: 800,
  height: 200,
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
  width: 200,
  handler: this.onButtonTap.bind(this),
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
  xtype: 'container',
  defaults: {
    margin: 10
  }
});
Ext.create({
  xtype: 'panel',
  width: 800,
  height: 200,
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
  width: 200,
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
  handler: this.onButtonTap.bind(this),
  responsiveConfig: (_ref = {}, _defineProperty(_ref, small, {
    hidden: true
  }), _defineProperty(_ref, medium, {
    hidden: false
  }), _ref)
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
  height: 200,
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
  width: 200,
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
  handler: this.onButtonTap.bind(this),
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
  summaryRenderer: this.renderVerifyAll,
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
  height: 200,
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
  width: 200,
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
  handler: this.onButtonTap.bind(this),
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
  summaryRenderer: this.renderVerifyAll,
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
  height: 200,
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
  text: value ? 'Verified' : 'Verify',
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
  width: 200,
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
  handler: this.onButtonTap.bind(this),
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
  summaryRenderer: this.renderVerifyAll,
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
  height: 200,
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
  text: value ? 'Verified' : 'Verify',
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
  width: 200,
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
  handler: this.onButtonTap.bind(this),
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
Ext.create({"xtype":"container"});
Ext.create({
  xtype: 'button',
  text: 'Verify',
  ui: 'action',
  handler: this.onVerify.bind()
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
  height: 200,
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
  text: value ? 'Verified' : 'Verify',
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
  width: 200,
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
  handler: this.onButtonTap.bind(this),
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
Ext.create({"xtype":"container"});
Ext.create({
  xtype: 'button',
  text: 'Verify',
  ui: 'action',
  handler: this.onVerify.bind()
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
  height: 200,
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
  text: value ? 'Verified' : 'Verify',
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
  width: 200,
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
  handler: this.onButtonTap.bind(this),
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
  xtype: 'button',
  text: 'Verify',
  ui: 'action',
  handler: this.onVerify.bind()
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
  height: 200,
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
  text: value ? 'Verified' : 'Verify',
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
  width: 200,
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
  handler: this.onButtonTap.bind(this),
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
  summaryRenderer: this.renderVerifyAll,
  bodyStyle: {
    padding: 0
  }
});
Ext.create({"xtype":"container"});
Ext.create({
  xtype: 'button',
  text: value ? 'Verified' : 'Verify',
  ui: 'action',
  handler: this.onVerify.bind(this, record)
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
  height: 200,
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
  text: value ? 'Verified' : 'Verify',
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
  width: 200,
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
  handler: this.onButtonTap.bind(this),
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
Ext.create({"xtype":"container"});
Ext.create({
  xtype: 'button',
  text: value ? 'Verified' : 'Verify',
  ui: 'action',
  handler: this.onVerify.bind(this, record)
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
  height: 200,
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
  text: value ? 'Verified' : 'Verify',
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
  width: 200,
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
  handler: this.onButtonTap.bind(this),
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
Ext.create({"xtype":"container"});
Ext.create({
  xtype: 'button',
  text: 'Verify',
  ui: 'action',
  handler: this.onVerify.bind(this)
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
  height: 200,
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
  text: value ? 'Verified' : 'Verify',
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
  width: 200,
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
  xtype: 'renderercell',
  renderer: this.renderVerify,
  bodyStyle: {
    padding: 0
  }
});
Ext.create({"xtype":"container"});
Ext.create({
  xtype: 'button',
  text: 'Verify',
  ui: 'action',
  handler: this.onVerify.bind(this)
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
  height: 200,
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
  text: value ? 'Verified' : 'Verify',
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
  width: 200,
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
  xtype: 'renderercell',
  renderer: this.renderVerify,
  bodyStyle: {
    padding: 0
  }
});
Ext.create({"xtype":"container"});
Ext.create({
  xtype: 'button',
  ui: 'action',
  handler: this.onVerify.bind(this)
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
  height: 200,
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
  text: value ? 'Verified' : 'Verify',
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
  width: 200,
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
  xtype: 'renderercell',
  renderer: this.renderVerify,
  bodyStyle: {
    padding: 0
  }
});
Ext.create({"xtype":"container"});
Ext.create({
  xtype: 'button',
  text: this.p01,
  ui: 'action',
  handler: this.onVerify.bind(this)
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
  height: 200,
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
  text: value ? 'Verified' : 'Verify',
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
  width: 200,
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
  xtype: 'renderercell',
  renderer: this.renderVerify,
  bodyStyle: {
    padding: 0
  }
});
Ext.create({"xtype":"container"});
Ext.create({
  xtype: 'button',
  text: this.p01,
  ui: 'action' //handler={this.onVerify.bind(this)}

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
  height: 200,
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
  text: value ? 'Verified' : 'Verify',
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
  width: 200,
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
  xtype: 'renderercell',
  bodyStyle: {
    padding: 0
  }
});
Ext.create({"xtype":"container"});
Ext.create({
  xtype: 'button',
  text: this.p01,
  ui: 'action' //handler={this.onVerify.bind(this)}

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
  height: 200,
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
  text: value ? 'Verified' : 'Verify',
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
  width: 200,
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
  xtype: 'renderercell',
  bodyStyle: {
    padding: 0
  }
});
Ext.create({"xtype":"container"});
Ext.create({
  xtype: 'button',
  text: this.name,
  ui: 'action' //handler={this.onVerify.bind(this)}

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
  height: 200,
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
  text: value ? 'Verified' : 'Verify',
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
  width: 200,
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
  xtype: 'renderercell',
  bodyStyle: {
    padding: 0
  }
});
Ext.create({"xtype":"container"});
Ext.create({
  xtype: 'button',
  text: this.data.p01,
  ui: 'action' //handler={this.onVerify.bind(this)}

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
  height: 200,
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
  text: value ? 'Verified' : 'Verify',
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
  width: 200,
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
  xtype: 'renderercell',
  bodyStyle: {
    padding: 0
  }
});
Ext.create({"xtype":"container"});
Ext.create({
  xtype: 'button',
  text: data.p01,
  ui: 'action' //handler={this.onVerify.bind(this)}

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
  height: 200,
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
  text: value ? 'Verified' : 'Verify',
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
  width: 200,
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
  handler: this.onButtonTap.bind(this),
  responsiveConfig: (_ref = {}, _defineProperty(_ref, small, {
    hidden: true
  }), _defineProperty(_ref, medium, {
    hidden: false
  }), _ref)
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
  height: 200,
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
  text: value ? 'Verified' : 'Verify',
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
  width: 200,
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
  xtype: 'container',
  defaults: {
    margin: 10
  }
});
Ext.create({
  xtype: 'panel',
  width: 800,
  height: 200,
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
  text: value ? 'Verified' : 'Verify',
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
  width: 200,
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
  bodyStyle: {
    padding: 0
  }
});
Ext.create({"xtype":"container"});
Ext.create({
  xtype: 'button',
  text: value ? 'Verified' : 'Verify',
  ui: 'action',
  handler: this.onVerify.bind(this)
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
  height: 200,
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
  text: value ? 'Verified' : 'Verify',
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
  width: 200,
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
  bodyStyle: {
    padding: 0
  }
});
Ext.create({"xtype":"container"});
Ext.create({
  xtype: 'button',
  text: '\u0412\u044B\u0431\u0440\u0430\u0442\u044C',
  ui: 'action',
  handler: this.onVerify.bind(this)
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
  height: 200,
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
  text: value ? 'Verified' : 'Verify',
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
  width: 200,
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
  height: 200,
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
  text: value ? 'Verified' : 'Verify',
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
  width: 200,
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
  height: 200,
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
  width: 200,
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
  height: 200,
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
  width: 200,
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
  height: 200,
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
  width: 200,
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
  width: 400,
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
  width: 300,
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
  width: 250,
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
Ext.create('Ext.data.Store', {
  fields: ['name', 'email', 'phone', 'hoursTaken', 'hoursRemaining'],
  data: data
});
Ext.create({
  xtype: 'grid',
  store: this.store
});
Ext.create({
  xtype: 'toolbar',
  docked: 'top'
});
Ext.create({
  xtype: 'searchfield',
  ui: 'faded',
  ref: function ref(field) {
    return _this3.query = field;
  },
  placeholder: 'Search...',
  onChange: this.onSearch.bind(this),
  responsiveConfig: (_ref2 = {}, _defineProperty(_ref2, small, {
    flex: 1
  }), _defineProperty(_ref2, medium, {
    flex: undefined
  }), _ref2)
});
Ext.create({
  xtype: 'column',
  text: 'Name',
  dataIndex: 'name',
  flex: 2,
  resizable: true
});
Ext.create({
  xtype: 'column',
  text: 'Email',
  dataIndex: 'email',
  flex: 3,
  resizable: true,
  responsiveConfig: (_ref3 = {}, _defineProperty(_ref3, small, {
    hidden: true
  }), _defineProperty(_ref3, medium, {
    hidden: false
  }), _ref3)
});
Ext.create({
  xtype: 'column',
  text: 'Phone',
  dataIndex: 'phone',
  flex: 2,
  resizable: true
});
Ext.create({"xtype":"grid"});
Ext.create({"xtype":"toolbar"});
Ext.create({"xtype":"button"});
Ext.create({"xtype":"column"});
Ext.create({"xtype":"searchfield"});
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
Ext.require('Ext.data.TreeStore');
Ext.create({"xtype":"treelist"});
Ext.create({"xtype":"treelist"});
Ext.require('Ext.data.TreeStore');
Ext.create({"xtype":"treelist"});
Ext.create({"xtype":"treelist"});
Ext.require('Ext.data.TreeStore');
Ext.create({"xtype":"treelist"});
Ext.create({"xtype":"treelist"});
Ext.require('Ext.data.TreeStore');
Ext.create({"xtype":"treelist"});
Ext.create({"xtype":"treelist"});
Ext.require('Ext.data.TreeStore');
Ext.create({"xtype":"treelist"});
Ext.create({"xtype":"treelist"});
Ext.create({
  xtype: 'container',
  padding: '20'
});
Ext.create({"xtype":"container"});
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
Ext.create({
  xtype: 'container',
  autoSize: true,
  defaults: {
    flex: 1,
    bodyPadding: 10,
    shadow: true,
    margin: 10
  },
  layout: {
    type: Ext.os.is.Phone ? 'vbox' : 'hbox',
    pack: 'center',
    align: 'stretch'
  },
  flex: 1
});
Ext.create({"xtype":"panel"});
Ext.create({
  xtype: 'panel',
  title: 'Title'
});
Ext.create({
  xtype: 'container',
  autoSize: true,
  defaults: {
    flex: 1,
    bodyPadding: 10,
    shadow: true,
    margin: 10
  },
  layout: {
    type: Ext.os.is.Phone ? 'vbox' : 'hbox',
    pack: 'center',
    align: 'stretch'
  },
  flex: 1
});
Ext.create({
  xtype: 'panel',
  title: 'Built in Tools',
  tools: [{
    type: 'minimize',
    handler: toolHandler
  }, {
    type: 'refresh',
    handler: toolHandler
  }, {
    type: 'search',
    handler: toolHandler
  }, {
    type: 'save',
    handler: toolHandler
  }, {
    type: 'menu',
    handler: toolHandler
  }]
});
Ext.create({
  xtype: 'panel',
  title: 'Custom Tools w/ iconCls',
  tools: [{
    iconCls: 'x-fa fa-wrench',
    handler: toolHandler
  }, {
    iconCls: 'x-fa fa-reply',
    handler: toolHandler
  }, {
    iconCls: 'x-fa fa-reply-all',
    handler: toolHandler
  }]
});
Ext.create({"xtype":"container"});
Ext.create({"xtype":"panel"});
Ext.create({"xtype":"button"});
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
Ext.create({
  xtype: 'container',
  autoSize: true,
  defaults: {
    flex: 1,
    bodyPadding: 10,
    shadow: true,
    margin: 10
  },
  layout: {
    type: Ext.os.is.Phone ? 'vbox' : 'hbox',
    pack: 'center',
    align: 'stretch'
  },
  flex: 1
});
Ext.create({"xtype":"panel"});
Ext.create({
  xtype: 'panel',
  title: 'Title'
});
Ext.create({
  xtype: 'container',
  autoSize: true,
  defaults: {
    flex: 1,
    bodyPadding: 10,
    shadow: true,
    margin: 10
  },
  layout: {
    type: Ext.os.is.Phone ? 'vbox' : 'hbox',
    pack: 'center',
    align: 'stretch'
  },
  flex: 1
});
Ext.create({
  xtype: 'panel',
  title: 'Built in Tools',
  tools: [{
    type: 'minimize',
    handler: toolHandler
  }, {
    type: 'refresh',
    handler: toolHandler
  }, {
    type: 'search',
    handler: toolHandler
  }, {
    type: 'save',
    handler: toolHandler
  }, {
    type: 'menu',
    handler: toolHandler
  }]
});
Ext.create({
  xtype: 'panel',
  title: 'Custom Tools w/ iconCls',
  tools: [{
    iconCls: 'x-fa fa-wrench',
    handler: toolHandler
  }, {
    iconCls: 'x-fa fa-reply',
    handler: toolHandler
  }, {
    iconCls: 'x-fa fa-reply-all',
    handler: toolHandler
  }]
});
Ext.create({"xtype":"container"});
Ext.create({"xtype":"panel"});
Ext.create({"xtype":"button"})