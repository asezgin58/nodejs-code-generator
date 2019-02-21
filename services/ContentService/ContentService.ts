import * as IContentService from './IContentService';
import {krax} from "react-krax";
const queryString = require('query-string');

  	...(typeof params.name !== 'undefined' ? {name: params.name} : {}),
		...(typeof params.contentFolderKey !== 'undefined' ? {contentFolderKey: params.contentFolderKey} : {})                    
    };
    
    return (
        krax({
            name: 'Content',
            request: {
                url: 'https://pixage-one-api.apps-int.pcf.dev.kocsistem.com.tr/content/FileUpload',
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
                url: 'https://pixage-one-api.apps-int.pcf.dev.kocsistem.com.tr/content/MoveContent',
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

