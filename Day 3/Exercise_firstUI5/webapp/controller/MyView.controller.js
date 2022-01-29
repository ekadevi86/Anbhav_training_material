sap.ui.define([
    'sap/ui/core/mvc/Controller'
], function(Spiderman) {
    'use strict';
    //extend means we are inheriting from parent module
    return Spiderman.extend("mickey.controller.MyView",{
        //since its a module (class), we have constructor of this class
        //as onInit which gets called by framework when object of this class is
        //created
        onInit: function(){
            //alert("Controller object is now created");
        },
        onClick: function(){
            alert("Welcome " + this.getView().byId("myField").getValue());
        }
    });
});