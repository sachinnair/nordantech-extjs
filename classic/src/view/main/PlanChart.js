Ext.define('MyUniApp.view.main.PlanChart', {
    xtype: 'planchart',
    extend: 'Ext.chart.CartesianChart',
    requires: ['MyUniApp.store.EffectStore', 'Ext.chart.*'],
    width: 1500,
    height: 800,
    store: Ext.create('MyUniApp.store.EffectStore'),
    /*flipXY: true,*/
    axes: [{
        type: 'numeric',
        position: 'left',
        title: {
            text: 'Plan',
            fontSize: 15
        },
        fields: ['Plan', 'Actual']
    }, {
        type: 'category',
        position: 'bottom',
        title: {
            text: 'Time',
            fontSize: 15
        },
        renderer: function (label, layoutContext, lastLabel) {
            
            return Ext.Date.format(layoutContext, 'M\'Y');
        },
        fields: 'Time'
    }],
    series: [{
        type: 'bar',
        /* subStyle: {
             fill: ['#388FAD'],
             stroke: '#1F6D91'
         },*/
        stacked: false,
        xField: 'Time',
        yField: ['Plan', 'Actual']
    }]
});

// http://examples.sencha.com/extjs/6.0.2/examples/kitchensink/?charts=true#column-renderer