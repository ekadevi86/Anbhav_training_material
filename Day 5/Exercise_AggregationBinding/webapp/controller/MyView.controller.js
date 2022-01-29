sap.ui.define([
    'sap/ui/core/mvc/Controller',
    'mickey/model/models'
], function(Controller, models) {
    'use strict';
    return Controller.extend("mickey.controller.MyView",{
        //Global for the current controller only
        oCore: sap.ui.getCore(),
        //like constructor of a class, as controller is a class
        //Initialization code which is executed only once
        onInit: function(){
            //Code to call base class contructor - commented code
            //Controller.prototype.onInit.apply(this);
            //Step call the method to create json model
            //this is a factory which can produce multiple model objects, i just need to give path
                var oModel = models.createJSONModel("model/mockdata/mydata.json");
                //oModel.setDefaultBindingMode("OneWay");
                var oModel2 = models.createJSONModel("model/mockdata/mydata2.json");

            //Step 3 : Make the model aware to the application/view/control so they can load data from model
                //our first model is set as a default model
                this.oCore.setModel(oModel);
                //setting only @ view level
                //this.getView().setModel(oModel);
                //second model is set as a named mode with name as got
                this.oCore.setModel(oModel2, 'got');

            //Binding approaches for doing same thing using JS
            this.getView().byId("idCurr").bindValue("/empStr/currency");
            //Next syntax of doing same thing with other method 
            this.getView().byId("idSmk").bindProperty("selected", "/empStr/smoker");            

        },
        onPrint: function(){
            //Step 1 : we had set the model at App level, we can obtain the object 
            //of the model from the app again
            var oModel = this.oCore.getModel();
            //step 2: we can use the getProperty and setProperty methods to read/change data
            //in the model by using address of the data
            var oEmpStr =  oModel.getProperty("/empStr");
            console.log(oEmpStr);

        },
        onFlip: function(){
            //Step 1: Get the default model object
            var oModel = this.oCore.getModel();
            //Step 2: Get the Named model object
            var oModel2 = this.oCore.getModel('got');
            //Step 3: Flip the models
            this.oCore.setModel(oModel2);
            this.oCore.setModel(oModel, 'got');
        },

        onChange: function(){
            //Step 1 : we had set the model at App level, we can obtain the object 
            //of the model from the app again
            var oModel = this.oCore.getModel();
            //We are changing data in the model, which will reflect the change on UI
            oModel.setProperty("/empStr/empName", "Ananya");
        }
    });
});