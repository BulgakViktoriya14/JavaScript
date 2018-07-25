const setNulls = require('./format');
module.exports.getDate = () => {
    const date = new Date();
    return `${setNulls(date.getDate())}-${setNulls(date.getMonth() + 1)}-${setNulls(date.getFullYear())}`;
}
module.exports.getTime = () => {
    const date = new Date();
    return `${setNulls(date.getHours())}:${setNulls(date.getMinutes())}`;
}