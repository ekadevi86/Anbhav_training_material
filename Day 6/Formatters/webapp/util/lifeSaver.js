sap.ui.define([
    "sap/ui/core/format/NumberFormat"
], function(NumberFormat) {
    'use strict';
    return {
        //tunnel
        convertName: function(inp){
            if(inp){
                return inp.toUpperCase();
            }
        },
        formatMyCurrency: function(amount, curr){
            var oCurrencyFormat = NumberFormat.getCurrencyInstance({
                                        currencyCode: false
                                    });
            return oCurrencyFormat.format(amount, curr);
        }
    };
});