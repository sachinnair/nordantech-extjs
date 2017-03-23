/**
 * This class is the controller for the main view for the application. It is specified as
 * the "controller" of the Main view class.
 *
 * TODO - Replace this content of this view to suite the needs of your application.
 */
Ext.define('MyUniApp.view.main.MainController', {
    extend: 'Ext.app.ViewController',

    alias: 'controller.main',

    onItemSelected: function (sender, record) {
        Ext.Msg.confirm('Confirm', 'Are you sure?', 'onConfirm', this);
    },

    renderStart: function(value, meta, record){
        meta.style = (record.get('Planned Start') - value >= 0) ? "color:green;" : "color:red;";
        return Ext.Date.format(value, 'd.M.Y');
    },

    renderEnd: function(value, meta, record){
        meta.style = (record.get('Planned End') - value >= 0) ? "color:green;" : "color:red;";
        return Ext.Date.format(value, 'Y-M-d') + ' delayed by ('+ Math.ceil(Math.abs(record.get('Planned End') - value) / (1000 * 3600 * 24) ) +') days';
    },

    onConfirm: function (choice) {
        if (choice === 'yes') {
            //
        }
    }
});
