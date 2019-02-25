import {krax} from "react-krax";

export const externalDllsPath = () => {        
    
        
    return (
        krax({
            name: 'Test',
            request: {
                url: 'undefined/test/testExternalDllsPath',
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

