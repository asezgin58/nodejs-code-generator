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
(typeof params.name !== 'undefined' ? { name: params.name } : {}),
;
(typeof params.contentFolderKey !== 'undefined' ? { contentFolderKey: params.contentFolderKey } : {});
;
return (react_krax_1.krax({
    name: 'Content',
    request: {
        url: 'https://pixage-one-api.apps-int.pcf.dev.kocsistem.com.tr/content/FileUpload',
        method: 'POST',
        body: __assign({ file: params.file, companyKey: params.companyKey }, optionalParameters),
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
exports.moveContent = function (params) {
    var optionalParameters = __assign({}, (typeof params.contentFolderKey !== 'undefined' ? { contentFolderKey: params.contentFolderKey } : {}));
    return (react_krax_1.krax({
        name: 'Content',
        request: {
            url: 'https://pixage-one-api.apps-int.pcf.dev.kocsistem.com.tr/content/MoveContent',
            method: 'PUT',
            body: __assign({ contentKey: params.contentKey, companyKey: params.companyKey }, optionalParameters),
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
