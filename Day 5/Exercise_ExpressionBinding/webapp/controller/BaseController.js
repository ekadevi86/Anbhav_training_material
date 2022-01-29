sap.ui.define([
    'sap/ui/core/mvc/Controller'
], function(Controller) {
    'use strict';
    return Controller.extend("mickey.controller.BaseController",{
        onInit: function(){
            //Base class constructor
            alert("Base class onInit was called");
        },
        oCore: sap.ui.getCore(),
        myReuseFunction: function(){
            return "";
        },
        addNumbers: function(a,b){
            return a + b;
        }
    });
});