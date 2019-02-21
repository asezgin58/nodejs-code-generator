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
exports.changePassword = function (params) {
    var optionalParameters = __assign({}, (typeof params.model !== 'undefined' ? { model: params.model } : {}));
    return (react_krax_1.krax({
        name: 'User',
        request: {
            url: 'https://pixage-one-api.apps-int.pcf.dev.kocsistem.com.tr/users/change-password',
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
exports.userDetailChangePassword = function (params) {
    var optionalParameters = __assign({}, (typeof params.model !== 'undefined' ? { model: params.model } : {}));
    return (react_krax_1.krax({
        name: 'User',
        request: {
            url: 'https://pixage-one-api.apps-int.pcf.dev.kocsistem.com.tr/users/userdetailchangepassword',
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
exports.emailActivation = function (params) {
    var optionalParameters = __assign({}, (typeof params.stamp !== 'undefined' ? { stamp: params.stamp } : {}), (typeof params.uniquekey !== 'undefined' ? { uniquekey: params.uniquekey } : {}));
    return (react_krax_1.krax({
        name: 'User',
        request: {
            url: 'https://pixage-one-api.apps-int.pcf.dev.kocsistem.com.tr/users/activation?' + queryString.stringify(__assign({}, optionalParameters)),
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
exports.forgotPassword = function (params) {
    var optionalParameters = __assign({}, (typeof params.model !== 'undefined' ? { model: params.model } : {}));
    return (react_krax_1.krax({
        name: 'User',
        request: {
            url: 'https://pixage-one-api.apps-int.pcf.dev.kocsistem.com.tr/users/forgotpassword',
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
exports.login = function (params) {
    var optionalParameters = __assign({}, (typeof params.model !== 'undefined' ? { model: params.model } : {}));
    return (react_krax_1.krax({
        name: 'User',
        request: {
            url: 'https://pixage-one-api.apps-int.pcf.dev.kocsistem.com.tr/users/login',
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
exports.logout = function () {
    return (react_krax_1.krax({
        name: 'User',
        request: {
            url: 'https://pixage-one-api.apps-int.pcf.dev.kocsistem.com.tr/users/logout',
            method: 'POST',
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
    var optionalParameters = __assign({}, (typeof params.model !== 'undefined' ? { model: params.model } : {}));
    return (react_krax_1.krax({
        name: 'User',
        request: {
            url: 'https://pixage-one-api.apps-int.pcf.dev.kocsistem.com.tr/users/register',
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
exports.updateUserDetail = function (params) {
    var optionalParameters = __assign({}, (typeof params.userModel !== 'undefined' ? { userModel: params.userModel } : {}));
    return (react_krax_1.krax({
        name: 'User',
        request: {
            url: 'https://pixage-one-api.apps-int.pcf.dev.kocsistem.com.tr/users/updateuserdetail',
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
exports.userDetail = function () {
    return (react_krax_1.krax({
        name: 'User',
        request: {
            url: 'https://pixage-one-api.apps-int.pcf.dev.kocsistem.com.tr/users/userdetail',
            method: 'POST',
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
exports.getUserTimeZone = function () {
    return (react_krax_1.krax({
        name: 'User',
        request: {
            url: 'https://pixage-one-api.apps-int.pcf.dev.kocsistem.com.tr/users/usertimezone',
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
