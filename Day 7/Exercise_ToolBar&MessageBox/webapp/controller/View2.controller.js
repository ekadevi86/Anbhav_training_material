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
        onSave: function () {
            debugger;
            MessageBox.confirm("Would like to save?",{
                title: "Confirmation",
                onClose: this.onCloseMsg
            });
        },
        onCloseMsg : function(status){
            if(status === "OK"){
                MessageToast.show("The sales order XXXX has been created successfully!");
            }else{
                MessageBox.error("Action was cancelled");
            }
        },
        onBack: function(){
            this.getView().getParent().to("idView1");
        }
    });
});