import * as IPlayerService from './IPlayerService';
import {krax} from "react-krax";
const queryString = require('query-string');

export const getList = (params: IPlayerService.IGetListParams) => {        
    
	let optionalParameters: any = {
    	...(typeof params.companyKey !== 'undefined' ? {companyKey: params.companyKey} : {}),
		...(typeof params.pageIndex !== 'undefined' ? {pageIndex: params.pageIndex} : {}),
		...(typeof params.pageSize !== 'undefined' ? {pageSize: params.pageSize} : {})                    
    };
    
    return (
        krax({
            name: 'Player',
            request: {
                url: 'https://pixage-one-api.apps-int.pcf.dev.kocsistem.com.tr/player/GetList?' + queryString.stringify({...optionalParameters}),
                method: 'GET',
                
                headers: {}
            },                
            onSuccess: (state: any) => {
                console.log('Success...');
                console.log('State : ', state);
            },
            onError: (state: any, err: any) => {
                console.log('Error :', err);
                console.log('State :', state);
            },
            onBefore: (state: any) => {
                console.log('onBefore-State : ', state);
            }
        })
	);
};

export const getPlayerByPrivateKey = (params: IPlayerService.IGetPlayerByPrivateKeyParams) => {        
    
	let optionalParameters: any = {
    	...(typeof params.privateKey !== 'undefined' ? {privateKey: params.privateKey} : {})                    
    };
    
    return (
        krax({
            name: 'Player',
            request: {
                url: 'https://pixage-one-api.apps-int.pcf.dev.kocsistem.com.tr/player?' + queryString.stringify({...optionalParameters}),
                method: 'GET',
                
                headers: {}
            },                
            onSuccess: (state: any) => {
                console.log('Success...');
                console.log('State : ', state);
            },
            onError: (state: any, err: any) => {
                console.log('Error :', err);
                console.log('State :', state);
            },
            onBefore: (state: any) => {
                console.log('onBefore-State : ', state);
            }
        })
	);
};

export const getPlayerStatus = (params: IPlayerService.IGetPlayerStatusParams) => {        
    
	let optionalParameters: any = {
    	...(typeof params.playerCode !== 'undefined' ? {playerCode: params.playerCode} : {}),
		...(typeof params.privateKey !== 'undefined' ? {privateKey: params.privateKey} : {})                    
    };
    
    return (
        krax({
            name: 'Player',
            request: {
                url: 'https://pixage-one-api.apps-int.pcf.dev.kocsistem.com.tr/player/GetPlayerStatus?' + queryString.stringify({...optionalParameters}),
                method: 'GET',
                
                headers: {}
            },                
            onSuccess: (state: any) => {
                console.log('Success...');
                console.log('State : ', state);
            },
            onError: (state: any, err: any) => {
                console.log('Error :', err);
                console.log('State :', state);
            },
            onBefore: (state: any) => {
                console.log('onBefore-State : ', state);
            }
        })
	);
};

export const registerRequest = (params: IPlayerService.IRegisterRequestParams) => {        
    
	let optionalParameters: any = {
    	...(typeof params.register !== 'undefined' ? {register: params.register} : {})                    
    };
    
    return (
        krax({
            name: 'Player',
            request: {
                url: 'https://pixage-one-api.apps-int.pcf.dev.kocsistem.com.tr/player/RegisterRequest',
                method: 'POST',
                body: {                    
                    ...optionalParameters
                },
                headers: {}
            },                
            onSuccess: (state: any) => {
                console.log('Success...');
                console.log('State : ', state);
            },
            onError: (state: any, err: any) => {
                console.log('Error :', err);
                console.log('State :', state);
            },
            onBefore: (state: any) => {
                console.log('onBefore-State : ', state);
            }
        })
	);
};

export const register = (params: IPlayerService.IRegisterParams) => {        
    
	let optionalParameters: any = {
    	...(typeof params.register !== 'undefined' ? {register: params.register} : {})                    
    };
    
    return (
        krax({
            name: 'Player',
            request: {
                url: 'https://pixage-one-api.apps-int.pcf.dev.kocsistem.com.tr/player/Register',
                method: 'POST',
                body: {                    
                    ...optionalParameters
                },
                headers: {}
            },                
            onSuccess: (state: any) => {
                console.log('Success...');
                console.log('State : ', state);
            },
            onError: (state: any, err: any) => {
                console.log('Error :', err);
                console.log('State :', state);
            },
            onBefore: (state: any) => {
                console.log('onBefore-State : ', state);
            }
        })
	);
};

