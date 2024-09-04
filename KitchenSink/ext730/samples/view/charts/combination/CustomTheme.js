/**
 * This example demonstrates how easy it is to change the colors of a chart's series
 * using a custom theme.
 */
Ext.define('KitchenSink.view.charts.combination.CustomTheme', {
    extend: 'Ext.Panel',
    xtype: 'combination-theme',
    controller: 'combination-theme',

    requires: [
        'KitchenSink.view.charts.combination.theme.CustomTheme'
    ],

    //<example>
    // Content between example tags is omitted from code preview.
    bodyStyle: 'background: transparent !important',
    layout: {
        type: 'vbox',
        pack: 'center'
    },
    otherContent: [{
        type: 'Controller',
        path: 'samples//view/charts/combination/CustomThemeController.js'
    }, {
        type: 'Store',
        path: 'app/store/Browsers.js'
    }, {
        type: 'Theme',
        path: 'samples//view/charts/combination/theme/CustomTheme.js'
    }],
    //</example>
    width: 650,

    tbar: [
        '->',
        {
            text: 'Preview',
            handler: 'onPreview'
        }
    ],

    items: [{
        xtype: 'cartesian',
        reference: 'chart',
        width: '100%',
        height: 500,
        theme: 'custom-theme',
        store: {
            type: 'browsers'
        },
        legend: {
            docked: 'bottom'
        },
        captions: {
            title: 'Column Charts - 100% Stacked Columns',
            credits: {
                text: 'Data: Browser Stats 2012\n' +
                    'Source: http://www.w3schools.com/',
                align: 'left'
            }
        },
        axes: [{
            type: 'numeric',
            position: 'left',
            grid: true,
            fields: ['data1', 'data2', 'data3', 'data4', 'other' ],
            label: {
                renderer: 'onAxisLabelRender'
            },
            minimum: 0,
            maximum: 100
        }, {
            type: 'category',
            position: 'bottom',
            grid: true,
            fields: ['month'],
            label: {
                rotate: {
                    degrees: -45
                }
            }
        }],
        series: [{
            type: 'bar',
            fullStack: true,
            title: [ 'IE', 'Firefox', 'Chrome', 'Safari', 'Others' ],
            xField: 'month',
            yField: [ 'data1', 'data2', 'data3', 'data4', 'other' ],
            stacked: true,
            style: {
                opacity: 0.80
            },
            highlightCfg: {
                opacity: 1,
                strokeStyle: 'black'
            },
            tooltip: {
                trackMouse: true,
                renderer: 'onSeriesTooltipRender'
            }
        }]
        //<example>
    }, {
        xtype: 'gridpanel',
        width: '100%',
        style: 'margin-top: 10px;',
        store: {
            type: 'browsers'
        },
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
                { text: 'Safari', dataIndex: 'data4' },
                { text: 'Other', dataIndex: 'other' }
            ]
        }
        //</example>
    }]

});
