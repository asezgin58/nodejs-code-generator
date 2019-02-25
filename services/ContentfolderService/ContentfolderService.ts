import * as IContentfolderService from './IContentfolderService';
import {krax} from "react-krax";
const queryString = require('query-string');

export const getContentFolder = () => {        
    
        
    return (
        krax({
            name: 'ContentFolder',
            request: {
                url: 'undefined/contentfolder',
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

export const updateContentFolder = (params: IContentfolderService.IUpdateContentFolderParams) => {        
    
	let optionalParameters: any = {
    	...(typeof params.contentFolderUpdate !== 'undefined' ? {contentFolderUpdate: params.contentFolderUpdate} : {})                    
    };

        
    return (
        krax({
            name: 'ContentFolder',
            request: {
                url: 'undefined/contentfolder',
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

export const setContentFolder = (params: IContentfolderService.ISetContentFolderParams) => {        
    
	let optionalParameters: any = {
    	...(typeof params.contentFolderCreate !== 'undefined' ? {contentFolderCreate: params.contentFolderCreate} : {})                    
    };

        
    return (
        krax({
            name: 'ContentFolder',
            request: {
                url: 'undefined/contentfolder',
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

export const getContentFolderById = (params: IContentfolderService.IGetContentFolderByIdParams) => {        
    
    let queryParams: any = queryString.stringify({id: params.id});
    if (queryParams.length > 0) {
        queryParams = '?' + queryParams;
    }
    
    return (
        krax({
            name: 'ContentFolder',
            request: {
                url: 'undefined/contentfolder' + queryParams,
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

export const getContentTreeAsync = () => {        
    
        
    return (
        krax({
            name: 'ContentFolder',
            request: {
                url: 'undefined/contentfolder/GetContentTree',
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

export const removeContentFolder = (params: IContentfolderService.IRemoveContentFolderParams) => {        
    
	let optionalParameters: any = {
    	...(typeof params.contentFolderDelete !== 'undefined' ? {contentFolderDelete: params.contentFolderDelete} : {})                    
    };

        
    return (
        krax({
            name: 'ContentFolder',
            request: {
                url: 'undefined/contentfolder/DeleteContentFolder',
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

