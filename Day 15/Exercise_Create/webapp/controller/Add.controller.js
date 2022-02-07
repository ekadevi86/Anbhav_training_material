sap.ui.define([
    'tcs/fin/payroll/controller/BaseController',
    'sap/ui/model/json/JSONModel',
    'sap/m/MessageToast',
    'sap/m/MessageBox'
], function(BaseController, JSONModel, MessageToast, MessageBox) {
    'use strict';
    return BaseController.extend("tcs.fin.payroll.controller.Add",{
        onInit: function(){
            this.oLocalData = new JSONModel();
            this.oLocalData.setData({
                "productData": {
                        "PRODUCT_ID": "",
                        "TYPE_CODE": "PR",
                        "CATEGORY": "Notebooks",
                        "NAME": "",
                        "DESCRIPTION": "",
                        "SUPPLIER_ID": "0100000046",
                        "SUPPLIER_NAME": "SAP",
                        "PRICE": "",
                        "CURRENCY_CODE": "EUR",
                        "DIM_UNIT": "CM",
                        "PRODUCT_PIC_URL": "/sap/public/bc/NWDEMO_MODEL/IMAGES/PO-1000.jpg"
                    }
            });
            this.getView().setModel(this.oLocalData, "local");
        },
        onSave: function(){
            //Step 1: Prepare payload to send
            var payload = this.oLocalData.getProperty("/productData");

            //Step 2: get the odata model object (default)
            var oDataModel = this.getView().getModel();

            //Step 3: Fire a POST Request - .create
            oDataModel.create("/ProductSet", payload, {
                success: function(){
                    MessageToast.show("Wow!! You made it Amigo");
                },
                error: function(oError){
                    MessageBox.error(JSON.parse(oError.responseText).error.innererror.errordetails[0].message);
                }
            });

        }

    });
});