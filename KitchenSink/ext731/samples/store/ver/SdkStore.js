Ext.define('KitchenSink.store.ver.SdkStore',{
    extend : 'Ext.data.Store',
    storeId : 'SdkStore',
    autoLoad : true,
    proxy: {
        type : 'ajax',
        url : 'resources/sdk.json',
        reader : {
            type : 'json'
        }
    }

})