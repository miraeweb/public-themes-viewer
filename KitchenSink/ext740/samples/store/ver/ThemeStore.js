Ext.define('KitchenSink.store.ver.ThemeStore',{
    extend : 'Ext.data.Store',
    storeId : 'ThemeStore',
    autoLoad : true,
    proxy: {
        type : 'ajax',
        url : 'resources/theme.json',
        reader : {
            type : 'json'
        }
    }
});