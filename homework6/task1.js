var text1=document.getElementById("t1");
var text2=document.getElementById("t2");
var but1=document.getElementById("but1");
var but2=document.getElementById("but2");
function pressmark (arr,new_arr,text){
			for(var i=0; i<arr.length; i++){
				var k=arr[i].split("").reverse().join("");
				new_arr.push(k);
			}
			var str=new_arr.join(" ");
			text.value=str;
		}
but1.addEventListener("click",function(){
		var new_arr1=new Array();
		var buf1=text1.value;
		var array1=buf1.split(" ");
		pressmark(array1,new_arr1,text2);
	})
but2.addEventListener("click",function(){
		var new_arr2=new Array();
		var buf2=text2.value;
		var array2=buf2.split(" ");
		pressmark(array2,new_arr2,text1);
	})