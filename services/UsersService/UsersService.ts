import * as IUsersService from './IUsersService';
import {krax} from "react-krax";
const queryString = require('query-string');

export const changePassword = (params: IUsersService.IChangePasswordParams) => {        
    
	let optionalParameters: any = {
    	...(typeof params.model !== 'undefined' ? {model: params.model} : {})                    
    };

        
    return (
        krax({
            name: 'User',
            request: {
                url: 'undefined/users/change-password',
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

export const emailActivation = (params: IUsersService.IEmailActivationParams) => {        
    
	let optionalParameters: any = {
    	...(typeof params.stamp !== 'undefined' ? {stamp: params.stamp} : {}),
		...(typeof params.uniquekey !== 'undefined' ? {uniquekey: params.uniquekey} : {})                    
    };

    let queryParams: any = queryString.stringify({...optionalParameters});
    if (queryParams.length > 0) {
        queryParams = '?' + queryParams;
    }
    
    return (
        krax({
            name: 'User',
            request: {
                url: 'undefined/users/activation' + queryParams,
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

export const userDetailChangePassword = (params: IUsersService.IUserDetailChangePasswordParams) => {        
    
	let optionalParameters: any = {
    	...(typeof params.model !== 'undefined' ? {model: params.model} : {})                    
    };

        
    return (
        krax({
            name: 'User',
            request: {
                url: 'undefined/users/userdetailchangepassword',
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

export const forgotPassword = (params: IUsersService.IForgotPasswordParams) => {        
    
	let optionalParameters: any = {
    	...(typeof params.model !== 'undefined' ? {model: params.model} : {})                    
    };

        
    return (
        krax({
            name: 'User',
            request: {
                url: 'undefined/users/forgotpassword',
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

export const login = (params: IUsersService.ILoginParams) => {        
    
	let optionalParameters: any = {
    	...(typeof params.model !== 'undefined' ? {model: params.model} : {})                    
    };

        
    return (
        krax({
            name: 'User',
            request: {
                url: 'undefined/users/login',
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

export const logout = () => {        
    
        
    return (
        krax({
            name: 'User',
            request: {
                url: 'undefined/users/logout',
                method: 'POST',
                
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

export const register = (params: IUsersService.IRegisterParams) => {        
    
	let optionalParameters: any = {
    	...(typeof params.model !== 'undefined' ? {model: params.model} : {})                    
    };

        
    return (
        krax({
            name: 'User',
            request: {
                url: 'undefined/users/register',
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

export const updateUserDetail = (params: IUsersService.IUpdateUserDetailParams) => {        
    
	let optionalParameters: any = {
    	...(typeof params.userModel !== 'undefined' ? {userModel: params.userModel} : {})                    
    };

        
    return (
        krax({
            name: 'User',
            request: {
                url: 'undefined/users/updateuserdetail',
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

export const userDetail = () => {        
    
        
    return (
        krax({
            name: 'User',
            request: {
                url: 'undefined/users/userdetail',
                method: 'POST',
                
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

export const getUserTimeZone = () => {        
    
        
    return (
        krax({
            name: 'User',
            request: {
                url: 'undefined/users/usertimezone',
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

