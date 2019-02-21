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
(typeof params.channelExtendDto !== 'undefined' ? { channelExtendDto: params.channelExtendDto } : {});
;
return (react_krax_1.krax({
    name: 'Channel',
    request: {
        url: 'https://pixage-one-api.apps-int.pcf.dev.kocsistem.com.tr/channel',
        method: 'PUT',
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
;
exports.getChannel = function () {
    return (react_krax_1.krax({
        name: 'Channel',
        request: {
            url: 'https://pixage-one-api.apps-int.pcf.dev.kocsistem.com.tr/channel',
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
exports.getList = function (params) {
    var optionalParameters = __assign({}, (typeof params.companyKey !== 'undefined' ? { companyKey: params.companyKey } : {}), (typeof params.pageIndex !== 'undefined' ? { pageIndex: params.pageIndex } : {}), (typeof params.pageSize !== 'undefined' ? { pageSize: params.pageSize } : {}));
    return (react_krax_1.krax({
        name: 'Channel',
        request: {
            url: 'https://pixage-one-api.apps-int.pcf.dev.kocsistem.com.tr/channel/GetList?' + queryString.stringify(__assign({}, optionalParameters)),
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
