import * as IChannelService from './IChannelService';
import {krax} from "react-krax";
const queryString = require('query-string');

export const getChannel = () => {        
    
        
    return (
        krax({
            name: 'Channel',
            request: {
                url: 'undefined/channel',
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

export const setChannel = (params: IChannelService.ISetChannelParams) => {        
    
	let optionalParameters: any = {
    	...(typeof params.channel !== 'undefined' ? {channel: params.channel} : {})                    
    };

        
    return (
        krax({
            name: 'Channel',
            request: {
                url: 'undefined/channel',
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

export const getList = (params: IChannelService.IGetListParams) => {        
    
	let optionalParameters: any = {
    	...(typeof params.companyKey !== 'undefined' ? {companyKey: params.companyKey} : {}),
		...(typeof params.pageIndex !== 'undefined' ? {pageIndex: params.pageIndex} : {}),
		...(typeof params.pageSize !== 'undefined' ? {pageSize: params.pageSize} : {})                    
    };

    let queryParams: any = queryString.stringify({...optionalParameters});
    if (queryParams.length > 0) {
        queryParams = '?' + queryParams;
    }
    
    return (
        krax({
            name: 'Channel',
            request: {
                url: 'undefined/channel/GetList' + queryParams,
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

export const getChannelStatus = () => {        
    
        
    return (
        krax({
            name: 'Channel',
            request: {
                url: 'undefined/channel/GetChannelStatus',
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

