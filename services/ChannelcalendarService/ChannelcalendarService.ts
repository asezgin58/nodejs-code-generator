import * as IChannelcalendarService from './IChannelcalendarService';
import {krax} from "react-krax";
const queryString = require('query-string');

   
    
	let optionalParameters: any = {
    	...(typeof params.channelKey !== 'undefined' ? {channelKey: params.channelKey} : {})                    
    };
    
    return (
        krax({
            name: 'ChannelCalender',
            request: {
                url: 'https://pixage-one-api.apps-int.pcf.dev.kocsistem.com.tr/channelcalendar/GetChannelList?' + queryString.stringify({...optionalParameters}),
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

export const getChannelByDate = (params: IChannelcalendarService.IGetChannelByDateParams) => {        
    
	let optionalParameters: any = {
    	...(typeof params.channelKey !== 'undefined' ? {channelKey: params.channelKey} : {}),
		...(typeof params.startDate !== 'undefined' ? {startDate: params.startDate} : {}),
		...(typeof params.endDate !== 'undefined' ? {endDate: params.endDate} : {})                    
    };
    
    return (
        krax({
            name: 'ChannelCalender',
            request: {
                url: 'https://pixage-one-api.apps-int.pcf.dev.kocsistem.com.tr/channelcalendar/GetChannelByDate?' + queryString.stringify({...optionalParameters}),
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

