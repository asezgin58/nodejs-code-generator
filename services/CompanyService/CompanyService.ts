import * as ICompanyService from './ICompanyService';
import {krax} from "react-krax";
const queryString = require('query-string');

export const getCompanyNuxeoInfoCompanyByCompanyKey = (params: ICompanyService.IGetCompanyNuxeoInfoCompanyByCompanyKeyParams) => {        
    
	let optionalParameters: any = {
    	...(typeof params.companyKey !== 'undefined' ? {companyKey: params.companyKey} : {})                    
    };

    let queryParams: any = queryString.stringify({...optionalParameters});
    if (queryParams.length > 0) {
        queryParams = '?' + queryParams;
    }
    
    return (
        krax({
            name: 'Company',
            request: {
                url: 'undefined/company/GetCompanyNuxeoInfo' + queryParams,
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

export const getCompany = () => {        
    
        
    return (
        krax({
            name: 'Company',
            request: {
                url: 'undefined/company',
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

