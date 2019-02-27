//For First Letter
let capitalize: Function = (str: string): string => {
    return str.charAt(0).toUpperCase() + str.slice(1);
};
//For First Letter
let lowerLetter: Function = (str: string): string => {
    return str.charAt(0).toLowerCase() + str.slice(1);
};
let nameSymbolFilter: Function = (str: string): string => {
    if (str.includes('-')) {
        let strArray: any = str.split('-');
        str = '';
        let l: number = 1;
        str = str + strArray[0];
        for (l = 1; l < strArray.length; l++) {
            str = str + capitalize(strArray[l]);
        }
        nameSymbolFilter(str);
    }
    return str;
};
module.exports.capitalize = capitalize;
module.exports.lowerLetter = lowerLetter;
module.exports.nameSymbolFilter = nameSymbolFilter;