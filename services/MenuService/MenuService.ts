import {krax} from "react-krax";

export const getMenu = () => {        
        
    return (
        krax({
            name: 'Menu',
            request: {
                url: 'https://pixage-one-api.apps-int.pcf.dev.kocsistem.com.tr/menu',
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

