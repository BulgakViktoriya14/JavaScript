module.exports.setNulls = (number) => {
    return number.toString().padStart(2, '0');
}
module.exports.capitalize = (str) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
}