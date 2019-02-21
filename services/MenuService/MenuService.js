"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_krax_1 = require("react-krax");
exports.getMenu = function () {
    return (react_krax_1.krax({
        name: 'Menu',
        request: {
            url: 'https://pixage-one-api.apps-int.pcf.dev.kocsistem.com.tr/menu',
            method: 'GET',
            headers: {}
        },
        onSuccess: function (state) {
            console.log('Success...');
            console.log('State : ', state);
        },
        onError: function (state, err) {
            console.log('Error :', err);
            console.log('State :', state);
        },
        onBefore: function (state) {
            console.log('onBefore-State : ', state);
        }
    }));
};
