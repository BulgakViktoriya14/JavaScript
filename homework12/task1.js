var k=0;
var xhr=new XMLHttpRequest;
xhr.open("GET","task1.txt",true);
xhr.onload=function(){
	var table=document.createElement("table");
	document.body.appendChild(table);
	var tbody=document.createElement("tbody");
	table.appendChild(tbody);
	var N=this.responseText;
	for(var i=0; i<N;i++){
	var tr=document.createElement("tr");
	tbody.appendChild(tr);
	for(var j=0; j<N;j++){
		var td=document.createElement("td");
		var number=++k;
		for(var n=1; n<=10;n++){
			td.innerText+=number+"*"+n+"="+number*n+"\n";
		}
		tr.appendChild(td);
		}
	}
}
xhr.send(null);
