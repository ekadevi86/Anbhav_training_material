sap.ui.define([
    'tcs/fin/payroll/controller/BaseController',
    'sap/m/MessageBox',
    'sap/m/MessageToast'
], function(BaseController,MessageBox,MessageToast) {
    'use strict';
    return BaseController.extend("tcs.fin.payroll.controller.View2",{
        onInit: function(){
            //get the router object
            this.oRouter = this.getOwnerComponent().getRouter();
            //use the router object to tell router, i want to call a function
            //whenever route changes, route can change because
            //1. when i click an item on left
            //2. when user press browser navigation btns
            //3. user can manually change route
            //hey my Router, whenever route change call a method herculis
            this.oRouter.getRoute("detail").attachMatched(this.herculis, this);
        },
        onItemPress: function(){
            MessageBox.confirm("I confirm to ANubhav that i will implement the 3rd view" +
            "and navigate to the supplier details on weekend");
        },
        onF4Help: function (oEvent) {
            var sId = oEvent.getSource().getId();
            MessageBox.confirm("we clicked on " + sId + " this functionality is under construction, please check later");
        },
        onFilter: function (oEvent) {
            MessageBox.confirm("This functionality is also under construction, action starts next week :)")  ;
        },
        herculis: function(oEvent){
            //now the route changed
            //Step 1: what is fruit id selected by user
            var sIndex = oEvent.getParameter("arguments").fruitId;
            //step 2: construct the path for element binding
            var sPath = '/fruits/' + sIndex;
            //Step 3: perform the element binding with current view
            this.getView().bindElement(sPath);
        },
        onSave: function () {
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