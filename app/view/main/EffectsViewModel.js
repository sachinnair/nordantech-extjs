/**
 * This class is the view model for the Main view of the application.
 */


Ext.define('MyUniApp.view.main.EffectsViewModel', {
    extend: 'Ext.app.ViewModel',

    stores: {
        newRecords: Ext.create('Ext.data.Store', {
            storeId: 'Id_dynamicStore'
        })
    },

    alias: 'viewmodel.effectsviewmodel',

    data: {
        newColumns: []
    }
});
