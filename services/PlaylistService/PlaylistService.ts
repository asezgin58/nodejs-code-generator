import * as IPlaylistService from './IPlaylistService';
import {krax} from "react-krax";
const queryString = require('query-string');

export const getByNamePlaylistByName = (params: IPlaylistService.IGetByNamePlaylistByNameParams) => {        
    
	let optionalParameters: any = {
    	...(typeof params.name !== 'undefined' ? {name: params.name} : {})                    
    };

    let queryParams: any = queryString.stringify({...optionalParameters});
    if (queryParams.length > 0) {
        queryParams = '?' + queryParams;
    }
    
    return (
        krax({
            name: 'Playlist',
            request: {
                url: 'undefined/playlist/GetByName' + queryParams,
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

export const getPlaylistStatus = () => {        
    
        
    return (
        krax({
            name: 'Playlist',
            request: {
                url: 'undefined/playlist/GetPlaylistStatus',
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

    let queryParams: any = queryString.stringify({...optionalParameters});
    if (queryParams.length > 0) {
        queryParams = '?' + queryParams;
    }
    
    return (
        krax({
            name: 'Playlist',
            request: {
                url: 'undefined/playlist/GetByUniqueKey' + queryParams,
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

    let queryParams: any = queryString.stringify({...optionalParameters});
    if (queryParams.length > 0) {
        queryParams = '?' + queryParams;
    }
    
    return (
        krax({
            name: 'Playlist',
            request: {
                url: 'undefined/playlist' + queryParams,
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
                url: 'undefined/playlist',
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
                url: 'undefined/playlist',
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

