var contener = document.getElementById("contener");
var tbody = document.getElementById("tbody");

function ajaxLoad(path, callback) { 
	var xhr = new XMLHttpRequest;
	xhr.open("GET", path, true);
	xhr.onload = function() {
		callback(xhr.responseText);
	}
	xhr.send( null );
} 

ajaxLoad("employees.csv", function(text) { 
	var csvText = text;
	var lines = csvText.split("\n");
	var items = lines.map(function(line){
		return line.split(",");
	})
	createTable(items);
})

var createTable = function(obj) {
	obj.forEach(function (element, index) {
		var column = 0;
   		var tr = document.createElement("tr");
   		if (index == 0) {
   		 	createHeader(tr, element, index, column);
		} else {
   			createMainPart(tr, element, index, column);
   		}
   		tbody.appendChild(tr);
	});
}

var createHeader = function(tr, elem, index, column) {
	for(let emp of elem) {
		let td = document.createElement("td");
		td.innerText = emp;
		td.setAttribute("class", `column${column}`);
		let button = document.createElement("button");
		button.setAttribute("class", "sort");
		button.innerText = "Отсортировать";
		td.appendChild(button);
		tr.appendChild(td);
		column++;
	}
}

var createMainPart = function(tr, elem, index, column) {
	for(let emp of elem) {
	 	let td = document.createElement("td");
		td.innerText = emp;
		td.setAttribute("class", `column${column}`);
		tr.appendChild(td);
		column++;
	}
}

var sortAscending = function(arr, arrTr) {
	let len = arr.length;
	let lenTr = arrTr.length;
		for (let i = 1; i < lenTr ; i++) {
			for(let j = 1; j < len-1; j++){
			let temp = 0;
			if (arr[j].outerText > arr[j + 1].outerText) {
				temp = arrTr[j + 1].outerHTML;
				arrTr[j + 1].innerHTML = arrTr[j].outerHTML;
				arrTr[j].innerHTML = temp;
			}
		}
	}
}

var sortDate = function(arr, arrTr) {
	let len = arr.length;
	let lenTr = arrTr.length;
	for (let i = 1; i < lenTr ; i++) {
		for(let j = 1; j < len-1; j++){
			let a = new Date(arr[j].outerText);
			let b = new Date(arr[j+1].outerText);
			let temp = 0;
			if (a > b) {
				temp = arrTr[j + 1].outerHTML;
				arrTr[j + 1].innerHTML = arrTr[j].outerHTML;
				arrTr[j].innerHTML = temp;
			}
		}
	}
}

contener.addEventListener("click", function(e){
	if(e.target.getAttribute("class") == "sort"){
		let buff = e.target.parentNode.getAttribute("class");
		console.log(buff)
		var arrColumnn = document.getElementsByClassName(buff);
		var arrTr = document.querySelectorAll("tr");
		if(buff == "column2" || buff == "column3") {
			sortDate(arrColumnn, arrTr);
		} else {
			sortAscending(arrColumnn, arrTr);
		}
	}
})


