/**
 * This class is the controller for the main view for the application. It is specified as
 * the "controller" of the Main view class.
 *
 * TODO - Replace this content of this view to suite the needs of your application.
 */


function modifyRecords(arrayModels) {
    var someArray = arrayModels.map(function (x) { return x.data });
    var timeArray = someArray.map(function (x) {

        var m = new Date(x["Time"]);
        var dateString =
            m.getUTCFullYear() + "/" +
            ("0" + (m.getUTCMonth() + 1)).slice(-2) + "/" +
            ("0" + m.getUTCDate()).slice(-2) + " " +
            ("0" + m.getUTCHours()).slice(-2) + ":" +
            ("0" + m.getUTCMinutes()).slice(-2) + ":" +
            ("0" + m.getUTCSeconds()).slice(-2);

        return dateString;
    });

    var newColumns = ['Performance'].concat(timeArray);

    var plannedValues = someArray.map(function (x) {
        return x["Plan"];
    });

    var actualValues = someArray.map(function (x) {
        return x["Actual"];
    });

    newRecords = [{ "Performance": "Plan" }, { "Performance": "Actual" }];

    for (i in timeArray) {
        newRecords[0][timeArray[i]] = plannedValues[i];
        newRecords[1][timeArray[i]] = actualValues[i];
    }

    return [newColumns, newRecords];
}


Ext.define('MyUniApp.view.main.EffectsViewController', {
    extend: 'Ext.app.ViewController',

    requires: [
        'MyUniApp.store.EffectStore'
    ],

    alias: 'controller.effectsview',

    onItemSelected: function (sender, record) {
        Ext.Msg.confirm('Confirm', 'Are you sure?', 'onConfirm', this);
    },

    populateData: function () {

        var newStoreElems;
        var self = this.getViewModel();

        var newStore = Ext.create('MyUniApp.store.EffectStore', {
            listeners: {
                load: function (x, y, z, a, b, c) {

                    var dynamicStore = Ext.getStore('Id_dynamicStore');
                    var newStoreElems = modifyRecords(y);

                    var newColumns = [];
                    for (i in newStoreElems[0]) {
                        var newColumn = {
                            text: newStoreElems[0][i],
                            dataIndex: newStoreElems[0][i]
                        }
                        newColumns.push(newColumn);
                    }

                    dynamicStore.setFields(newStoreElems[0]);
                    dynamicStore.setData(newStoreElems[1]);
                    self.set({ newColumns: newColumns });
                }
            }
        })
    },

    onConfirm: function (choice) {
        if (choice === 'yes') {
            //
        }
    }
});
