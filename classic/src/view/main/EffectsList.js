/**
 * This view is an example list of people.
 */
Ext.define('MyUniApp.view.main.EffectsList', {
    extend: 'Ext.grid.Panel',
    xtype: 'effectslist',
    autoScroll: true,
    requires: [
        'MyUniApp.view.main.EffectsViewModel',
        'MyUniApp.view.main.EffectsViewController'
    ],

    title: 'Personnel',

    listeners: {
        select: 'onItemSelected',
        afterrender: 'populateData'
    },

    controller: 'effectsview',
    viewModel: 'effectsviewmodel',
    
    bind: {
        columns: '{newColumns}',
        store: "{newRecords}"
    }
});