var N = prompt("Введите N: ");
var table=document.createElement("table");
var tbody=document.createElement(tbody);
document.body.appendChild(table);
table.appendChild(tbody);
for(var i = 0; i < N; i++){
	var tr = document.createElement("tr");
	for(var j = 0; j < N; j++){
		var td = document.createElement("td");
		tr.appendChild(td);
		}
	tbody.appendChild(tr)
}
var arr=["red","green","blue","pink","yellow"];

tbody.addEventListener("mouseover",function(e){
	if(e.target.nodeName=="TD"){
		e.target.style.background=arr[Math.round(Math.random()*(arr.length-1))];;
	}
})
tbody.addEventListener("mouseout",function(e){
	if(e.target.nodeName=="TD"){
		e.target.style.background="white";
	}
})
