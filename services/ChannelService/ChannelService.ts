import * as IChannelService from './IChannelService';
import {krax} from "react-krax";
const queryString = require('query-string');

..(typeof params.channelExtendDto !== 'undefined' ? {channelExtendDto: params.channelExtendDto} : {})                    
    };
    
    return (
        krax({
            name: 'Channel',
            request: {
                url: 'https://pixage-one-api.apps-int.pcf.dev.kocsistem.com.tr/channel',
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

export const getChannel = () => {        
        
    return (
        krax({
            name: 'Channel',
            request: {
                url: 'https://pixage-one-api.apps-int.pcf.dev.kocsistem.com.tr/channel',
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

export const getList = (params: IChannelService.IGetListParams) => {        
    
	let optionalParameters: any = {
    	...(typeof params.companyKey !== 'undefined' ? {companyKey: params.companyKey} : {}),
		...(typeof params.pageIndex !== 'undefined' ? {pageIndex: params.pageIndex} : {}),
		...(typeof params.pageSize !== 'undefined' ? {pageSize: params.pageSize} : {})                    
    };
    
    return (
        krax({
            name: 'Channel',
            request: {
                url: 'https://pixage-one-api.apps-int.pcf.dev.kocsistem.com.tr/channel/GetList?' + queryString.stringify({...optionalParameters}),
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

