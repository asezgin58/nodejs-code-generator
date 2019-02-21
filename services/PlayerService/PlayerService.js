"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_krax_1 = require("react-krax");
var queryString = require('query-string');
exports.getList = function (params) {
    var optionalParameters = __assign({}, (typeof params.companyKey !== 'undefined' ? { companyKey: params.companyKey } : {}), (typeof params.pageIndex !== 'undefined' ? { pageIndex: params.pageIndex } : {}), (typeof params.pageSize !== 'undefined' ? { pageSize: params.pageSize } : {}));
    return (react_krax_1.krax({
        name: 'Player',
        request: {
            url: 'https://pixage-one-api.apps-int.pcf.dev.kocsistem.com.tr/player/GetList?' + queryString.stringify(__assign({}, optionalParameters)),
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
exports.getPlayerByPrivateKey = function (params) {
    var optionalParameters = __assign({}, (typeof params.privateKey !== 'undefined' ? { privateKey: params.privateKey } : {}));
    return (react_krax_1.krax({
        name: 'Player',
        request: {
            url: 'https://pixage-one-api.apps-int.pcf.dev.kocsistem.com.tr/player?' + queryString.stringify(__assign({}, optionalParameters)),
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
exports.getPlayerStatus = function (params) {
    var optionalParameters = __assign({}, (typeof params.playerCode !== 'undefined' ? { playerCode: params.playerCode } : {}), (typeof params.privateKey !== 'undefined' ? { privateKey: params.privateKey } : {}));
    return (react_krax_1.krax({
        name: 'Player',
        request: {
            url: 'https://pixage-one-api.apps-int.pcf.dev.kocsistem.com.tr/player/GetPlayerStatus?' + queryString.stringify(__assign({}, optionalParameters)),
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
exports.registerRequest = function (params) {
    var optionalParameters = __assign({}, (typeof params.register !== 'undefined' ? { register: params.register } : {}));
    return (react_krax_1.krax({
        name: 'Player',
        request: {
            url: 'https://pixage-one-api.apps-int.pcf.dev.kocsistem.com.tr/player/RegisterRequest',
            method: 'POST',
            body: __assign({}, optionalParameters),
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
exports.register = function (params) {
    var optionalParameters = __assign({}, (typeof params.register !== 'undefined' ? { register: params.register } : {}));
    return (react_krax_1.krax({
        name: 'Player',
        request: {
            url: 'https://pixage-one-api.apps-int.pcf.dev.kocsistem.com.tr/player/Register',
            method: 'POST',
            body: __assign({}, optionalParameters),
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
