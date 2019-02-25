import * as IPlaylistfolderService from './IPlaylistfolderService';
import {krax} from "react-krax";
const queryString = require('query-string');

export const getPlaylistFolder = () => {        
    
        
    return (
        krax({
            name: 'PlaylistFolder',
            request: {
                url: 'undefined/playlistfolder',
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

export const setPlaylistFolder = (params: IPlaylistfolderService.ISetPlaylistFolderParams) => {        
    
	let optionalParameters: any = {
    	...(typeof params.playlistFolder !== 'undefined' ? {playlistFolder: params.playlistFolder} : {})                    
    };

        
    return (
        krax({
            name: 'PlaylistFolder',
            request: {
                url: 'undefined/playlistfolder',
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

export const getPlaylistFolderById = (params: IPlaylistfolderService.IGetPlaylistFolderByIdParams) => {        
    
    let queryParams: any = queryString.stringify({id: params.id});
    if (queryParams.length > 0) {
        queryParams = '?' + queryParams;
    }
    
    return (
        krax({
            name: 'PlaylistFolder',
            request: {
                url: 'undefined/playlistfolder' + queryParams,
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

export const removePlaylistFolder = (params: IPlaylistfolderService.IRemovePlaylistFolderParams) => {        
    
    let queryParams: any = queryString.stringify({id: params.id});
    if (queryParams.length > 0) {
        queryParams = '?' + queryParams;
    }
    
    return (
        krax({
            name: 'PlaylistFolder',
            request: {
                url: 'undefined/playlistfolder' + queryParams,
                method: 'DELETE',
                
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

export const getPlaylistTreeAsync = () => {        
    
        
    return (
        krax({
            name: 'PlaylistFolder',
            request: {
                url: 'undefined/playlistfolder/GetPlaylistTree',
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

export const updatePlaylistFolder = (params: IPlaylistfolderService.IUpdatePlaylistFolderParams) => {        
    
	let optionalParameters: any = {
    	...(typeof params.playlistFolder !== 'undefined' ? {playlistFolder: params.playlistFolder} : {})                    
    };

        
    return (
        krax({
            name: 'PlaylistFolder',
            request: {
                url: 'undefined/playlistfolder',
                method: 'PUT',
                body: {
                    playlistFolderKey: params.playlistFolderKey,
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

