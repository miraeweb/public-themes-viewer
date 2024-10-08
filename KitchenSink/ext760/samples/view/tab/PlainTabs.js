/**
 * Demonstrates a tab panel with no background on the tab strip.
 */
Ext.define('KitchenSink.view.tab.PlainTabs', {
    extend: 'Ext.tab.Panel',
    xtype: 'plain-tabs',
    controller: 'tab-view',

    //<example>
    requires: [
        'KitchenSink.view.tab.TabController'
    ],
    otherContent: [{
        type: 'Controller',
        path: 'samples//view/tab/TabController.js'
    }],
    exampleTitle: 'Plain Tabs',
    //</example>

    width: 500,
    height: 300,
    plain: true,
    defaults: {
        bodyPadding: 10,
        scrollable: true
    },
    items: [{
        title: 'Active Tab',
        html: KitchenSink.DummyText.longText
    }, {
        title: 'Inactive Tab',
        html: KitchenSink.DummyText.extraLongText
    }, {
        title: 'Closable Tab',
        html: 'Closable',
        closable: true
    }, {
        title: 'Disabled Tab',
        disabled: true
    }],

    listeners: {
        tabchange: 'onTabChange'
    }
});
