//For First Letter
var capitalize = function (str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
};
//For First Letter
var lowerLetter = function (str) {
    return str.charAt(0).toLowerCase() + str.slice(1);
};
var editNameWithSymbol = function (str) {
    if (str.includes('-')) {
        var strArray = str.split('-');
        str = '';
        var l = 1;
        str = str + strArray[0];
        for (l = 1; l < strArray.length; l++) {
            str = str + capitalize(strArray[l]);
        }
        editNameWithSymbol(str);
    }
    return str;
};
module.exports.capitalize = capitalize;
module.exports.lowerLetter = lowerLetter;
module.exports.editNameWithSymbol = editNameWithSymbol;
