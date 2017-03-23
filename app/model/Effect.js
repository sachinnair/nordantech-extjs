function modifyDate(value, record) {
    var st = value;
    var pattern = /(\d{2})\.(\d{2})\.(\d{4})/;
    var dt = new Date(st.replace(pattern, '$3-$2-$1'));
    return dt;
}

Ext.define('Effect', {
    extend: 'Ext.data.Model',
    fields: [
        { name: 'Time', type: 'date', convert: modifyDate },
        { name: 'Plan', type: 'string'},
        { name: 'Actual', type: 'string' }]
});
