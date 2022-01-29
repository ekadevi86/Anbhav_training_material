sap.ui.define([
    'mickey/controller/BaseController',
    'mickey/model/models'
], function(Controller, models) {
    'use strict';
    return Controller.extend("mickey.controller.MyView",{
        //Global for the current controller only
        //oCore: sap.ui.getCore(),
        //like constructor of a class, as controller is a class
        //Initialization code which is executed only once
        onInit: function(){
            //Code to call base class contructor - commented code
            //Controller.prototype.onInit.apply(this);
            //alert(this.addNumbers(10,2));
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
            // this.getView().byId("idCurr").bindValue("/empStr/currency");
            //Next syntax of doing same thing with other method 
            // this.getView().byId("idSmk").bindProperty("selected", "/empStr/smoker");     
            
            
            // Dynamic Aggregation Binding
            var oTable = this.getView().byId("idEmployeeTable");
            // oTable.bindRows("/empTab");
            oTable.bindAggregation("rows", {
                path: '/empTab'
            });


            // XML Model
            debugger;
            var oXMLModel = models.createXMLModel();
            this.oCore.setModel(oXMLModel, 'xml');


            // Resource Model
            var oResource = models.createResourceModel();
            this.oCore.setModel(oResource, "i18n");
        },
        onChange: function(){
            //Step 1 : we had set the model at App level, we can obtain the object 
            //of the model from the app again
            var oModel = this.oCore.getModel();
            //We are changing data in the model, which will reflect the change on UI
            alert(this.oCore.getModel().getProperty("/empStr/empName"));
            oModel.setProperty("/empStr/empName", "Sonam");
        },
        onRowSelect: function(oSpiderman){
            //Step 1: Get the address of the element selected
            var sAddressOfMyMemory = oSpiderman.getParameter("rowContext").getPath();
            console.log(sAddressOfMyMemory);
            //Step 2: Get Simple form Object
            var oSimple = this.getView().byId("idEmployeeForm");
            //Step 3: Bind the element to simple form
            oSimple.bindElement(sAddressOfMyMemory);
            
            //debugger;
            //alert("aa gaya (it has come)");
        }
    });
});