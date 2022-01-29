sap.ui.define([
    'tcs/fin/payroll/controller/BaseController'
], function(BaseController) {
    'use strict';
    return BaseController.extend("tcs.fin.payroll.controller.View1",{
        onInit: function(){
            
        },
        onNext: function(){
            //Step 1: Get the app container control object
            var oAppCon = this.getView().getParent();
            //Step 2: From the parent App Con, navigate to view2
            oAppCon.to("idView2");
        }
    });
});