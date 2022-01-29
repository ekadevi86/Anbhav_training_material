sap.ui.define([
    
], function() {
    'use strict';
    return {
        createJSONModel: function(sPath){
            //Step 1 : Create a brand new model object
                var oModel = new sap.ui.model.json.JSONModel();
            //Step 2 : Set or Load data into the model
                //oModel.setData();
                oModel.loadData(sPath);
            //Step 3: return the model object out of function
            return oModel;
        },
        createXMLModel: function(){

        },
        createResourceModel: function(){

        }    
    };
});