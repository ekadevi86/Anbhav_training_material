sap.ui.define([
    'tcs/fin/payroll/controller/BaseController',
    'tcs/fin/payroll/util/formatter',
    'sap/ui/model/Filter',
    'sap/ui/model/FilterOperator'
], function(BaseController, formatter, Filter, FilterOperator) {
    'use strict';
    return BaseController.extend("tcs.fin.payroll.controller.View1",{
        formatter: formatter,
        onInit: function(){
            
        },
        onNext: function(){
            //Step 1: Get the app container control object
            var oAppCon = this.getView().getParent();
            //Step 2: From the parent App Con, navigate to view2
            oAppCon.to("idView2");
        },
        onDelete:function(oEvent){
            //Step 1: which item user want to delete
            var itemToBeDeleted = oEvent.getParameter("listItem");
            //Step 2: We get the list object
            var oList = oEvent.getSource();
            //Step 3: Delete the item from list
            oList.removeItem(itemToBeDeleted);

        }
    });
});
