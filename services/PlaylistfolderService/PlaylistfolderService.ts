import * as IPlaylistfolderService from './IPlaylistfolderService';
import {krax} from "react-krax";
const queryString = require('query-string');

export const setPlaylistFolder = (params: IPlaylistfolderService.ISetPlaylistFolderParams) => {        
    
	let optionalParameters: any = {
    	...(typeof params.playlistFolder !== 'undefined' ? {playlistFolder: params.playlistFolder} : {})                    
    };
    
    return (
        krax({
            name: 'PlaylistFolder',
            request: {
                url: 'https://pixage-one-api.apps-int.pcf.dev.kocsistem.com.tr/playlistfolder',
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

export const removePlaylistFolder = (params: IPlaylistfolderService.IRemovePlaylistFolderParams) => {        
        
    return (
        krax({
            name: 'PlaylistFolder',
            request: {
                url: 'https://pixage-one-api.apps-int.pcf.dev.kocsistem.com.tr/playlistfolder?' + queryString.stringify({id: params.id}),
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
                url: 'https://pixage-one-api.apps-int.pcf.dev.kocsistem.com.tr/playlistfolder/GetPlaylistTree',
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

export const getPlaylistFolderById = (params: IPlaylistfolderService.IGetPlaylistFolderByIdParams) => {        
        
    return (
        krax({
            name: 'PlaylistFolder',
            request: {
                url: 'https://pixage-one-api.apps-int.pcf.dev.kocsistem.com.tr/playlistfolder?' + queryString.stringify({id: params.id}),
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
                url: 'https://pixage-one-api.apps-int.pcf.dev.kocsistem.com.tr/playlistfolder',
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

export const getPlaylistFolder = () => {        
        
    return (
        krax({
            name: 'PlaylistFolder',
            request: {
                url: 'https://pixage-one-api.apps-int.pcf.dev.kocsistem.com.tr/playlistfolder',
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

