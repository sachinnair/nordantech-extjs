function modifyDate(value, record) {
    var st = value;
    var pattern = /(\d{2})\.(\d{2})\.(\d{4})/;
    var dt = new Date(st.replace(pattern, '$3-$2-$1'));
    return dt;
}

Ext.define('Book', {
    extend: 'Ext.data.Model',
    fields: ['Activity',
        { name: 'Planned Start', type: 'date', convert: modifyDate },
        { name: 'Actual Start', type: 'date', convert: modifyDate },
        { name: 'Planned End', type: 'date', convert: modifyDate },
        { name: 'Actual End', type: 'date', convert: modifyDate }, 'Responsible user']
});
