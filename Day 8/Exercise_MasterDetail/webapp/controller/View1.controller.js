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
        onDeleteItem: function(){
            //Step 1: get the list control object
            var oList = this.getView().byId("idList");
            //Step 2: Get each item object which was selected by user
            var aSelItems = oList.getSelectedItems();
            //Step 3: loop over and delete them one by one
            for (let i = 0; i < aSelItems.length; i++) {
                const oItem = aSelItems[i];
                oList.removeItem(oItem);
            }
        },
        onSelectItem: function(oEvent){
            //Step 1: get the object of selected item
            var oSelectedItem = oEvent.getParameter("listItem");
            //Step 2: Get the path of the element of this item
            var sPath = oSelectedItem.getBindingContextPath();
            //Step 3: get the view 2 object
            var oSplitApp = this.getView().getParent().getParent();
            var oView2 = oSplitApp.getDetailPages()[0];
            //Step 4: Bind the view2 with this element
            oView2.bindElement(sPath);
            this.onNext();
        },
        onDelete: function(oEvent) {
            //Step 1: Get the object of the item selected by the user
            var oItemToBeDeleted = oEvent.getParameter("listItem");
            //Step 2: Get the list Control object
            var oList = oEvent.getSource();
            //Step 3: use the list object to remove the item 
            oList.removeItem(oItemToBeDeleted);
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
        onNext: function(){
            //Step 1: Get the app container control object
            var oAppCon = this.getView().getParent();
            //Step 2: From the parent App Con, navigate to view2
            oAppCon.to("idView2");
        }
    });
});