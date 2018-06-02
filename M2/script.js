var App = {
	variables : {
		contener : document.getElementById("contener"),
		tbody : document.getElementById("tbody"),
		divInfo : document.getElementById("info"),
		chooseCount : document.createElement("h5"),
		avgAge : document.createElement("h5"),
		sumSalary :	document.createElement("h5"),
		svgSalary :	document.createElement("h5"),
		sumPension : document.createElement("h5"),
		svgTimeWork : document.createElement("h5"),
		array : [],
		newArray : []
	},

	start : function() {
		App.ajaxLoad("employees.csv", function(text) { 
			var csvText = text;
			var lines = csvText.split("\n");
			var items = lines.map(function(line){
				return line.split(",");
			})
			App.createTable(items);
		}),

		App.variables.contener.addEventListener("click", function(e) {
			if(e.target.getAttribute("class") == "sort"){
				let buff = e.target.parentNode.getAttribute("class");
				var [arrColumnn, arrTr] = [document.getElementsByClassName(buff), document.querySelectorAll("tr")];
				if(buff == "column2" || buff == "column3") {
					App.sortDate(arrColumnn, arrTr);
				} else {
					App.sortAscending(arrColumnn, arrTr);
				}
			}
		})

		App.variables.contener.addEventListener("click", function(e) {
			if(e.target.getAttribute("type") == "checkbox") {
				if(!e.target.getAttribute("checked")){
					e.target.setAttribute("checked","checked");
					let [buffArr, parent] = [ [], e.target.parentNode.parentNode];
					for(var o of parent.childNodes){
						buffArr.push(o.outerText);
					}
					App.variables.newArray.push(buffArr);
					App.fillDivInfo(App.variables.newArray);
				} else {
					e.target.removeAttribute("checked","checked");
					let buff = App.variables.newArray.indexOf(e.target.parentNode.parentNode.outerText)
					App.variables.newArray.splice(buff, 1);
					App.fillDivInfo(App.variables.newArray);
					if(App.variables.newArray.length == 0) {
						App.fillDivInfo(App.variables.array);
					}
				}
			}
		})
	},

	ajaxLoad : function(path, callback) {
		var xhr = new XMLHttpRequest;
		xhr.open("GET", path, true);
		xhr.onload = function() {
			callback(xhr.responseText);
		}
		xhr.send( null );
	},

	createTable : function(obj) {
		obj.forEach(function (element, index) {
			var column = 0;
	   		var tr = document.createElement("tr");
	   		if (index == 0) {
	   		 	App.createHeader(tr, element, index, column);
			} else {
	   			App.createMainPart(tr, element, index, column);
	   			
	   		}
	   		tbody.appendChild(tr);
		})

		for(var i = 1; i < obj.length; i++) {
			App.variables.array.push(obj[i]);
		}
		App.fillDivInfo(App.variables.array);
	},

	createHeader : function(tr, elem, index, column) {
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
	},

	createMainPart : function(tr, elem, index, column) {
		for(let emp of elem) {
		 	let td = document.createElement("td");
			td.innerText = emp;
			td.setAttribute("class", `column${column}`);
			tr.appendChild(td);
			if(column == 0) {
				var input = document.createElement("input");
				input.setAttribute("class", "checkbox");
				input.setAttribute("type", "checkbox");
				td.appendChild(input);
			}
			column++;
		}
	},

	sortAscending : function(arr, arrTr) {	
		let len = arr.length;
		let lenTr = arrTr.length;
		for (let i = 1; i < lenTr; i++) {
			for(let j = 1; j < len-1; j++) {
				let temp = 0;
				if (arr[j].outerText > arr[j + 1].outerText) {
					temp = arrTr[j + 1].outerHTML;
					arrTr[j + 1].innerHTML = arrTr[j].outerHTML;
					arrTr[j].innerHTML = temp;
				}
			}
		}
	},

	sortDate : function(arr, arrTr) {
		let len = arr.length;
		let lenTr = arrTr.length;
		for (let i = 1; i < lenTr ; i++) {
			for(let j = 1; j < len - 1; j++) {
				let a = Date.parse(arr[j].outerText);
				let b = Date.parse(arr[j+1].outerText);
				let temp = 0;
				if (a > b) {
					temp = arrTr[j].outerHTML;
					arrTr[j].innerHTML = arrTr[j + 1].outerHTML;
					arrTr[j + 1].innerHTML = temp;
				}
			}
		}
	},

	fillDivInfo : function(array) {
		var [now, count, age, salary, timeWork, allPension] = [new Date(), 0, 0, 0, 0, 0];
		array.forEach(function(el) {
			count++;
			let [date, pension] = [Date.parse(el[2]), 0];
			var year = Math.floor((now - date)/(1000*60*60*24*365));
			age += Number(el[1]);
			salary += Number(el[4]);
			pension = Number(el[4])* 0.01 *year;
			timeWork +=year;
			allPension += pension;
		})
		let buff = App.variables.divInfo;
		App.variables.chooseCount.innerText = count;
		buff.children[0].appendChild(App.variables.chooseCount);
		App.variables.avgAge.innerText = Math.round(age/count);
		buff.children[1].appendChild(App.variables.avgAge);
		App.variables.sumSalary.innerText = salary;
		buff.children[2].appendChild(App.variables.sumSalary);
		App.variables.svgSalary.innerText = Math.round(salary/count);
		buff.children[3].appendChild(App.variables.svgSalary);
		App.variables.svgTimeWork.innerText = Math.round(timeWork/count);
		buff.children[4].appendChild(App.variables.svgTimeWork);
		App.variables.sumPension.innerText = allPension;
		buff.children[5].appendChild(App.variables.sumPension);
	}


}

App.start();


