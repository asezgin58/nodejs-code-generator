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
exports.getChannelListChannelCalenderByChannelKey = function (params) {
    var optionalParameters = __assign({}, (typeof params.channelKey !== 'undefined' ? { channelKey: params.channelKey } : {}));
    return (react_krax_1.krax({
        name: 'ChannelCalender',
        request: {
            url: 'https://pixage-one-api.apps-int.pcf.dev.kocsistem.com.tr/channelcalendar/GetChannelList?' + queryString.stringify(__assign({}, optionalParameters)),
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
exports.getChannelByDate = function (params) {
    var optionalParameters = __assign({}, (typeof params.channelKey !== 'undefined' ? { channelKey: params.channelKey } : {}), (typeof params.startDate !== 'undefined' ? { startDate: params.startDate } : {}), (typeof params.endDate !== 'undefined' ? { endDate: params.endDate } : {}));
    return (react_krax_1.krax({
        name: 'ChannelCalender',
        request: {
            url: 'https://pixage-one-api.apps-int.pcf.dev.kocsistem.com.tr/channelcalendar/GetChannelByDate?' + queryString.stringify(__assign({}, optionalParameters)),
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
