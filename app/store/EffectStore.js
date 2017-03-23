Ext.define('MyUniApp.store.EffectStore', {
    extend: 'Ext.data.Store',
    autoLoad: true,
    alias: 'store.effects',
    model: 'Effect',
    proxy: {
        type: 'ajax',
        reader: {
            type: 'csv'
        },
        url: 'resources/effects.csv'
    }
});