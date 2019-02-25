import * as IContentService from './IContentService';
import {krax} from "react-krax";
const queryString = require('query-string');

export const fileUploadAsync = (params: IContentService.IFileUploadAsyncParams) => {        
    
	let optionalParameters: any = {
    	...(typeof params.name !== 'undefined' ? {name: params.name} : {}),
		...(typeof params.contentFolderKey !== 'undefined' ? {contentFolderKey: params.contentFolderKey} : {})                    
    };

        
    return (
        krax({
            name: 'Content',
            request: {
                url: 'undefined/content/FileUpload',
                method: 'POST',
                body: {
                    file: params.file,
					companyKey: params.companyKey,
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

export const moveContent = (params: IContentService.IMoveContentParams) => {        
    
	let optionalParameters: any = {
    	...(typeof params.contentFolderKey !== 'undefined' ? {contentFolderKey: params.contentFolderKey} : {})                    
    };

        
    return (
        krax({
            name: 'Content',
            request: {
                url: 'undefined/content/MoveContent',
                method: 'PUT',
                body: {
                    contentKey: params.contentKey,
					companyKey: params.companyKey,
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

export const getContentLibraryStatus = () => {        
    
        
    return (
        krax({
            name: 'Content',
            request: {
                url: 'undefined/content/GetContentLibraryStatus',
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

