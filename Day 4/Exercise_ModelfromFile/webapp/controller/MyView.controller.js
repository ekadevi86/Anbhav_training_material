sap.ui.define([
    'sap/ui/core/mvc/Controller',
    'mickey/model/models'
], function(Controller, models) {
    'use strict';
    return Controller.extend("mickey.controller.MyView",{
        //like constructor of a class, as controller is a class
        //Initialization code which is executed only once
        onInit: function(){
            //Step call the method to create json model
            //this is a factory which can produce multiple model objects, i just need to give path
                var oModel = models.createJSONModel("model/mockdata/mydata.json");
                //oModel.setDefaultBindingMode("OneWay");
                var oModel2 = models.createJSONModel("model/mockdata/mydata2.json");
            //Step 3 : Make the model aware to the application/view/control so they can load data from model
                //our first model is set as a default model
                sap.ui.getCore().setModel(oModel);
                //setting only @ view level
                //this.getView().setModel(oModel);
                //second model is set as a named mode with name as got
                sap.ui.getCore().setModel(oModel2, 'got');

        },
        onPrint: function(){
            //Step 1 : we had set the model at App level, we can obtain the object 
            //of the model from the app again
            var oModel = sap.ui.getCore().getModel();
            //step 2: we can use the getProperty and setProperty methods to read/change data
            //in the model by using address of the data
            var oEmpStr =  oModel.getProperty("/empStr");
            console.log(oEmpStr);

        },
        onFlip: function(){
            //Step 1: Get the default model object
            var oModel = sap.ui.getCore().getModel();
            //Step 2: Get the Named model object
            var oModel2 = sap.ui.getCore().getModel('got');
            //Step 3: Flip the models
            sap.ui.getCore().setModel(oModel2);
            sap.ui.getCore().setModel(oModel, 'got');
        },
        onChange: function(){
            //Step 1 : we had set the model at App level, we can obtain the object 
            //of the model from the app again
            var oModel = sap.ui.getCore().getModel();
            //We are changing data in the model, which will reflect the change on UI
            oModel.setProperty("/empStr/empName", "Ananya");
        }
    });
});