/**
 * This view is an example list of people.
 */
Ext.define('MyUniApp.view.main.BookList', {
    extend: 'Ext.grid.Panel',
    xtype: 'somelist',

    requires: [
        'MyUniApp.store.BookStore'
    ],

    title: 'Personnel',

    store: {
        type: 'bookstore'
    },

    columns: [
        { text: 'Activity', dataIndex: 'Activity', flex: 1 },
        { text: 'Planned Start', dataIndex: 'Planned Start', xtype: 'datecolumn', format: 'd/m/Y', flex: 1},
        { text: 'Actual Start', dataIndex: 'Actual Start', xtype: 'datecolumn', format: 'Y-m-d', flex: 1, renderer: 'renderStart' },
        { text: 'Planned End', dataIndex: 'Planned End', xtype: 'datecolumn', format: 'Y-m-d', flex: 1 },
        { text: 'Actual End', dataIndex: 'Actual End', xtype: 'datecolumn', format: 'Y-m-d', flex: 1, renderer: 'renderEnd' }
    ],

    listeners: {
        select: 'onItemSelected'
    }
});
