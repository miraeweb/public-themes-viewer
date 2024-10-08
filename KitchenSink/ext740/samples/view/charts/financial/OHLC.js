/**
 * This example shows how to create an OHLC chart. OHLC charts are financial charts that
 * allow one to visualize the open/high/low/close values of a stock.
 *
 * The example makes use of two interactions: 'crosshair' (default) and 'panzoom'. The gear
 * icon can be used to switch between the two.
 */
Ext.define('KitchenSink.view.charts.financial.OHLC', {
    extend: 'Ext.Panel',
    xtype: 'financial-ohlc',
    controller: 'financial-candlestick',

    requires: [
        'Ext.chart.CartesianChart',
        'Ext.chart.series.Line',
        'Ext.chart.axis.Numeric',
        'Ext.draw.modifier.Highlight',
        'Ext.chart.axis.Time',
        'Ext.chart.interactions.ItemHighlight'
    ],

    //<example>
    // Content between example tags is omitted from code preview.
    otherContent: [{
        type: 'Controller',
        path: 'samples//view/charts/financial/CandlestickController.js'
    }, {
        type: 'Store',
        path: 'samples//store/StockPrice.js'
    }],
    //</example>
    profiles: {
        classic: {
            width: 650,
            itemWidth: 270
        },
        neptune: {
            width: 650,
            itemWidth: 270
        },
        graphite: {
            width: 800,
            itemWidth: 400
        },
        'classic-material': {
            width: 800,
            itemWidth: 400
        }
    },
    layout: 'fit',
    width: '${width}',
    tbar: [
        '->',
        {
            text: 'Refresh',
            handler: 'onRefresh'
        },
        {
            xtype: 'segmentedbutton',
            width: '${itemWidth}',
            defaults: {
                ui: 'default-toolbar'
            },
            items: [
                {
                    text: 'Crosshair',
                    pressed: true
                },
                {
                    text: 'Pan'
                },
                {
                    text: 'Zoom'
                }
            ],
            listeners: {
                toggle: 'onModeToggle'
            }
        },
        {
            text: 'Reset pan/zoom',
            handler: 'onPanZoomReset'
        }
    ],
    items: [{
        xtype: 'cartesian',
        reference: 'chart',
        width: '100%',
        height: 500,
        insetPadding: 20,
        store: {
            type: 'stock-price'
        },
        interactions: [
            {
                type: 'panzoom',
                enabled: false,
                zoomOnPanGesture: false,
                axes: {
                    left: {
                        allowPan: false,
                        allowZoom: false
                    },
                    bottom: {
                        allowPan: true,
                        allowZoom: true
                    }
                }
            },
            {
                type: 'crosshair',
                axes: {
                    label: {
                        fillStyle: 'white'
                    },
                    rect: {
                        fillStyle: '#344459',
                        opacity: 0.7,
                        radius: 5
                    }
                }
            }
        ],
        series: {
            type: 'candlestick',
            xField: 'time',
            openField: 'open',
            highField: 'high',
            lowField: 'low',
            closeField: 'close',
            style: {
                ohlcType: 'ohlc',
                barWidth: 10,
                opacity: 0.9,
                dropStyle: {
                    fill: 'rgb(237,123,43)',
                    stroke: 'rgb(237,123,43)'
                },
                raiseStyle: {
                    fill: 'rgb(55,153,19)',
                    stroke: 'rgb(55,153,19)'
                }
            }
        },
        axes: [
            {
                type: 'numeric',
                position: 'left',
                fields: ['open', 'high', 'low', 'close']
            },
            {
                type: 'time',
                position: 'bottom',
                fields: ['time'],
                visibleRange: [0, 0.3]
            }
        ]
    }]

});
