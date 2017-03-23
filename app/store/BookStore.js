Ext.define('MyUniApp.store.BookStore', {
    extend: 'Ext.data.Store',
    autoLoad: true,
    alias: 'store.bookstore',
    model: 'Book',
    proxy: {
        type: 'ajax',
        reader: {
            type: 'csv',
            metaData: {
                delimiter: ';'
            }    
        },
        url: 'resources/activities1.csv',
        headers: {'Content-Type': "text/plain;charset=utf-8" }
    }
});