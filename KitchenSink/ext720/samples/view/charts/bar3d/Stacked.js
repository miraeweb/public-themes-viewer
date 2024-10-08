/**
 * Stacked 3D bars are 3D bar charts where categories are stacked next to each
 * other. This is typically done to visually represent the total of all categories for a
 * given period or value.
 */
Ext.define('KitchenSink.view.charts.bar3d.Stacked', {
    extend: 'Ext.Panel',
    xtype: 'bar-stacked-3d',
    controller: 'bar-stacked-3d',

    //<example>
    // Content between example tags is omitted from code preview.
    otherContent: [{
        type: 'Controller',
        path: 'samples//view/charts/bar3d/StackedController.js'
    }, {
        type: 'Store',
        path: 'app/store/Browsers.js'
    }],
    //</example>

    width: 650,
    bodyStyle: 'background: transparent;',

    tbar: ['->', {
        text: 'Preview',
        handler: 'onPreview'
    }],

    items: [{
        xtype: 'cartesian',
        reference: 'chart',
        theme: 'muted',
        height: 500,
        legend: {
            docked: 'right'
        },
        store: { type: 'browsers' },
        flipXY: true,
        animation: Ext.isIE8
            ? false
            : {
                easing: 'backOut',
                duration: 500
            },
        captions: {
            title: 'Bar Charts - Stacked Bars',
            credits: {
                text: 'Data: Browser Stats 2012\nSource: http://www.w3schools.com/',
                align: 'left'
            }
        },
        axes: [{
            type: 'numeric3d',
            position: 'bottom',
            adjustByMajorUnit: true,
            grid: true,
            renderer: 'onAxisLabelRender',
            minimum: 0
        }, {
            type: 'category3d',
            position: 'left',
            grid: true
        }],
        series: [{
            type: 'bar3d',
            title: [ 'IE', 'Firefox', 'Chrome', 'Safari' ],
            xField: 'month',
            yField: [ 'data1', 'data2', 'data3', 'data4' ],
            stacked: true,
            highlight: true,
            tooltip: {
                trackMouse: true,
                renderer: 'onSeriesTooltipRender'
            }
        }]
    }, {
        xtype: 'gridpanel',
        style: 'margin-top: 10px;',
        height: 150,
        columns: {
            defaults: {
                sortable: false,
                menuDisabled: true,
                renderer: 'onColumnRender'
            },
            items: [
                { text: 'Month', dataIndex: 'month', renderer: Ext.identityFn },
                { text: 'IE', dataIndex: 'data1' },
                { text: 'Firefox', dataIndex: 'data2' },
                { text: 'Chrome', dataIndex: 'data3' },
                { text: 'Safari', dataIndex: 'data4' }
            ]
        },
        store: { type: 'browsers' }
    }]
});
