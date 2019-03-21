const {bus} = require('../eventBus');
const request = require('../request');
const {capitalize} = require('./format');
module.exports = (path, baseURL, login = null) => {
  let URL = `${baseURL}/api/${path}`;
  if (login) URL = `${URL}?login=${login}`;
  const xhr = request("GET", URL, null);
  xhr.onload = function () {
    const arr = JSON.parse(xhr.responseText);
    path = capitalize(path); //example : "timetables" -> "Timetables"
    bus.$emit(`load${path}`, arr);
  };
}
