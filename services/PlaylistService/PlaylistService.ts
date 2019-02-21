import * as IPlaylistService from './IPlaylistService';
import {krax} from "react-krax";
const queryString = require('query-string');

ers: any = {
    	...(typeof params.name !== 'undefined' ? {name: params.name} : {})                    
    };
    
    return (
        krax({
            name: 'Playlist',
            request: {
                url: 'https://pixage-one-api.apps-int.pcf.dev.kocsistem.com.tr/playlist/GetByName?' + queryString.stringify({...optionalParameters}),
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

export const getByUniqueKeyPlaylistByUniqueKey = (params: IPlaylistService.IGetByUniqueKeyPlaylistByUniqueKeyParams) => {        
    
	let optionalParameters: any = {
    	...(typeof params.uniqueKey !== 'undefined' ? {uniqueKey: params.uniqueKey} : {})                    
    };
    
    return (
        krax({
            name: 'Playlist',
            request: {
                url: 'https://pixage-one-api.apps-int.pcf.dev.kocsistem.com.tr/playlist/GetByUniqueKey?' + queryString.stringify({...optionalParameters}),
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

export const getPlaylist = (params: IPlaylistService.IGetPlaylistParams) => {        
    
	let optionalParameters: any = {
    	...(typeof params.pageIndex !== 'undefined' ? {pageIndex: params.pageIndex} : {}),
		...(typeof params.pageSize !== 'undefined' ? {pageSize: params.pageSize} : {})                    
    };
    
    return (
        krax({
            name: 'Playlist',
            request: {
                url: 'https://pixage-one-api.apps-int.pcf.dev.kocsistem.com.tr/playlist?' + queryString.stringify({...optionalParameters}),
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

export const updatePlaylist = (params: IPlaylistService.IUpdatePlaylistParams) => {        
    
	let optionalParameters: any = {
    	...(typeof params.model !== 'undefined' ? {model: params.model} : {})                    
    };
    
    return (
        krax({
            name: 'Playlist',
            request: {
                url: 'https://pixage-one-api.apps-int.pcf.dev.kocsistem.com.tr/playlist',
                method: 'PUT',
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

export const setPlaylist = (params: IPlaylistService.ISetPlaylistParams) => {        
    
	let optionalParameters: any = {
    	...(typeof params.playlistCreate !== 'undefined' ? {playlistCreate: params.playlistCreate} : {})                    
    };
    
    return (
        krax({
            name: 'Playlist',
            request: {
                url: 'https://pixage-one-api.apps-int.pcf.dev.kocsistem.com.tr/playlist',
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

export const getPlaylistStatusPlaylistByCompanyKey = (params: IPlaylistService.IGetPlaylistStatusPlaylistByCompanyKeyParams) => {        
    
	let optionalParameters: any = {
    	...(typeof params.companyKey !== 'undefined' ? {companyKey: params.companyKey} : {})                    
    };
    
    return (
        krax({
            name: 'Playlist',
            request: {
                url: 'https://pixage-one-api.apps-int.pcf.dev.kocsistem.com.tr/playlist/GetPlaylistStatus?' + queryString.stringify({...optionalParameters}),
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

