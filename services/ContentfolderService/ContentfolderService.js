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
(typeof params.contentFolderUpdate !== 'undefined' ? { contentFolderUpdate: params.contentFolderUpdate } : {});
;
return (react_krax_1.krax({
    name: 'ContentFolder',
    request: {
        url: 'https://pixage-one-api.apps-int.pcf.dev.kocsistem.com.tr/contentfolder',
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
exports.setContentFolder = function (params) {
    var optionalParameters = __assign({}, (typeof params.contentFolderCreate !== 'undefined' ? { contentFolderCreate: params.contentFolderCreate } : {}));
    return (react_krax_1.krax({
        name: 'ContentFolder',
        request: {
            url: 'https://pixage-one-api.apps-int.pcf.dev.kocsistem.com.tr/contentfolder',
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
exports.getContentFolder = function () {
    return (react_krax_1.krax({
        name: 'ContentFolder',
        request: {
            url: 'https://pixage-one-api.apps-int.pcf.dev.kocsistem.com.tr/contentfolder',
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
exports.getContentFolderById = function (params) {
    return (react_krax_1.krax({
        name: 'ContentFolder',
        request: {
            url: 'https://pixage-one-api.apps-int.pcf.dev.kocsistem.com.tr/contentfolder?' + queryString.stringify({ id: params.id }),
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
exports.getContentTreeAsync = function () {
    return (react_krax_1.krax({
        name: 'ContentFolder',
        request: {
            url: 'https://pixage-one-api.apps-int.pcf.dev.kocsistem.com.tr/contentfolder/GetContentTree',
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
exports.removeContentFolder = function (params) {
    var optionalParameters = __assign({}, (typeof params.contentFolderDelete !== 'undefined' ? { contentFolderDelete: params.contentFolderDelete } : {}));
    return (react_krax_1.krax({
        name: 'ContentFolder',
        request: {
            url: 'https://pixage-one-api.apps-int.pcf.dev.kocsistem.com.tr/contentfolder/DeleteContentFolder',
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
