sap.ui.define([
    'sap/ui/model/json/JSONModel',
    'sap/ui/model/xml/XMLModel',
    'sap/ui/model/resource/ResourceModel'
], function(JSONModel, XMLModel, ResourceModel) {
    'use strict';
    return {
        createJSONModel: function(sPath){
            //Step 1 : Create a brand new model object
                var oModel = new JSONModel();
            //Step 2 : Set or Load data into the model
                //oModel.setData();
                oModel.loadData(sPath);
            //Step 3: return the model object out of function
            return oModel;
        },
        createXMLModel: function(){
            var oModel = new XMLModel();
            oModel.loadData("model/mockdata/mydata.xml");
            return oModel;
        },
        createResourceModel: function(){
            var oModel = new ResourceModel({
                "bundleUrl": "i18n/i18n.properties"
            });
            return oModel;
        }    
    };
});