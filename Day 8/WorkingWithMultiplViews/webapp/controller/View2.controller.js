sap.ui.define([
    'tcs/fin/payroll/controller/BaseController'
], function(BaseController) {
    'use strict';
    return BaseController.extend("tcs.fin.payroll.controller.View2",{
        onInit: function(){
            
        },
        onBack: function(){
            this.getView().getParent().to("idView1");
        }
    });
});