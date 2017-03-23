Ext.define('CsvReader', {
    extend: 'Ext.data.reader.Json',
    alias: 'reader.csv',

    /*constructore: function(config){
        config = config || {}
        this.callParent([config]);
    },
    */
    // converts csv into json
    csvToJson: function (csvData) {
        try {
            var delimiter = this.metaData && this.metaData.delimiter || ";";
            var lines = csvData.split(/\r?\n/g);
            var colNames = lines[0].split(delimiter);
            var records = [];
            for (var i = 1; i < lines.length; i++) {
                if (lines[i] == "") continue;
                var record = {};
                var bits = lines[i].split(delimiter);
                for (var j = 0; j < bits.length; j++) {
                    record[colNames[j]] = bits[j];
                }
                records.push(record);

            }
        } catch(e){
            console.log("Ignore error but continue");
        } finally{
            return records;
        }
    },

    // override
    getResponseData: function (response) {
         try {
             var respText = JSON.stringify(this.csvToJson(response.responseText));
             response.responseText = respText;
             return this.callParent([response]);
         } catch (ex) {
             error = new Ext.data.ResultSet({
                 total: 0,
                 count: 0,
                 records: [],
                 success: false,
                 message: ex.message
             });
             this.fireEvent('exception', this, response, error);
             return error;
         }
     }
});