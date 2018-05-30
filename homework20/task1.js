var App = {
	variables: {
		array: [],
		content: document.getElementById("content")
	},

	const: {
		DB: firebase.database(),
		REF: firebase.database().ref("/news/"),
	},

	start: function() {
		App.const.REF.on("value", function(v) { 
			v.forEach(function(elem) {
				var val = elem.val();
				App.variables.array.push(val);
			})
		App.createNews(App.variables.array);
		})  
		App.changeNews();
	},
	
	createNews: function(arr) {
		var i = 1;
		arr.forEach(function(elem) {
			var divNews = document.createElement("div");
			divNews.setAttribute("class","news");
			divNews.innerHTML = `<h3>${elem.name}</h3>
			<p>${elem.discription}</p>
			<h5>${elem.date}</h5>
			<button class="change" >Изменить новость</button>
			<button class="save" id="${i++}">Сохранить изменения</button>`;
			App.variables.content.appendChild(divNews);
		})	
	},

	changeNews: function() {
		App.variables.content.addEventListener("click", function(e) {
			if(e.target.getAttribute("class") == "change") {
				e.target.parentNode.children[0].setAttribute("contenteditable", "true");
				e.target.parentNode.children[1].setAttribute("contenteditable", "true");
			}
			if(e.target.getAttribute("class") == "save") {
				let current = e.target.parentNode;
				current.children[0].removeAttribute("contenteditable");	
				current.children[1].removeAttribute("contenteditable");	
				let actualName = current.children[0].outerText;
				let actualDiscr = current.children[1].outerText;
				let actualDate = current.children[3].outerText;
				console.log(actualName);
				console.log(actualDiscr);
				console.log(actualDate);
				let id = e.target.getAttribute("id");
				console.log(id);
				firebase.database().ref(`/news/new${id}`).set({
					name: actualName,
					discription: actualDiscr,
					date:  actualDate,
				})
			}
		})
	}
}  

App.start();