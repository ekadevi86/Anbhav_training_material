sap.ui.define([
    'tcs/fin/payroll/controller/BaseController',
    'sap/m/MessageBox',
    'sap/m/MessageToast'
], function(BaseController,MessageBox,MessageToast) {
    'use strict';
    return BaseController.extend("tcs.fin.payroll.controller.View2",{
        onInit: function(){
            debugger;
        },
        onBack: function(){
            this.getView().getParent().to("idView1");
        }
    });
});