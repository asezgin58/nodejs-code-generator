var capitalize = function (str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
};
var lowerLetter = function (str) {
    return str.charAt(0).toLowerCase() + str.slice(1);
};
module.exports.capitalize = capitalize;
module.exports.lowerLetter = lowerLetter;
