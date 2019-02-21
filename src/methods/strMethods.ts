//For First Letter
let capitalize: Function = (str: string): string => {
    return str.charAt(0).toUpperCase() + str.slice(1);
};
//For First Letter
let lowerLetter: Function = (str: string): string => {
    return str.charAt(0).toLowerCase() + str.slice(1);
};
module.exports.capitalize = capitalize;
module.exports.lowerLetter = lowerLetter;