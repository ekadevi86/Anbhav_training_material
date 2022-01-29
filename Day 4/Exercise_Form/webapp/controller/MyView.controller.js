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
            alert(this.getView().byId("myField").getValue());
        },
        onLogin: function(){
            var sUser = this.getView().byId("idUser").getValue();
            var sPassword = this.getView().byId("idPassword").getValue();
            if(sUser === sPassword && sUser && sPassword){
                alert("Login success!");
            }else {
                alert("Wrong Credentials");
            }
        }
    });
});