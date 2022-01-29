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
        onSearch: function(oEvent){
            //Step 1: Need to know the value entered by user on screen in search
            var query = oEvent.getParameter("query");
            //Step 2: Construct a filter condition
            var oFilter1 = new Filter("name", FilterOperator.Contains, query);
            var oFilter2 = new Filter("type", FilterOperator.Contains, query);
            var oFilter = new Filter({
                filters: [oFilter1, oFilter2],
                and: false
            });
            //Step 3: Inject this filter inside the List to filter items
            this.getView().byId("idList").getBinding("items").filter(oFilter);

        },
        onSelectionChange: function(oEvent) {
            debugger;
            var sPath = oEvent.getParameter("listItem").getBindingContextPath();
            var oAppCon = this.getView().getParent();
            var oView2 = oAppCon.getPage("idView2");
            oView2.bindElement(sPath);
            oAppCon.to("idView2");
        },
        onNext: function(){
            //Step 1: Get the app container control object
            var oAppCon = this.getView().getParent();
            //Step 2: From the parent App Con, navigate to view2
            oAppCon.to("idView2");
        }
    });
});