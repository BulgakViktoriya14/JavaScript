const {bus} = require('../eventBus');

module.exports = (nameView) => { 
	const path = require(`../json/${nameView}`);
	const xhr = new XMLHttpRequest();
    xhr.withCredentials = true;
    xhr.open("GET",path,true);
    xhr.send();
	xhr.onload = function () {
   		//const arr = JSON.parse(xhr.responseText);
   		const arr = path;
   		bus.$emit("fillArray",arr);
  	};

}