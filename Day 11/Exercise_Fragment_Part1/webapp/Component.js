sap.ui.define([
    'sap/ui/core/UIComponent'
], function(UIComponent) {
    'use strict';
    return UIComponent.extend("tcs.fin.payroll.Component",{
        metadata: {
            manifest: "json"
        },
        init: function(){
            //create the base class object
            sap.ui.core.UIComponent.prototype.init.apply(this);
            //Step 1 : get the router object
            var oRouter = this.getRouter();
            //Step 2: Inialize
            oRouter.initialize();
        },
        destroy: function(){

        }
    });
});