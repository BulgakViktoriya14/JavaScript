var input = document.getElementById('email');
var arr = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0','q',
 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', 'a', 's', 'd', 'f', 'g', 'h', 'j',
  'k', 'l', 'z', 'x', 'c', 'v', 'b', 'n', 'm', 'Q', 'W','E', 'R', 'T', 'Y', 
  'U', 'I', 'O', 'P', 'A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', 'Z', 'X', 'C', 
  'V', 'B', 'N', 'M', '-', '_', '.','@'];
input.addEventListener('keydown', function(e){
	var bool = false;
	for(var i = 0; i < arr.length; i++){
		if(e.key == arr[i] || e.key == "Backspace"){
			bool = true;
			break;
		}
	}	
	if(!bool){
		e.preventDefault();
	}
});
input.addEventListener('input',function(){
	var dog;
	for(var j=0; j<input.value.length;j++){
		if(input.value[j]=="@"){
			dog=true;
			break;
		}
		if(input.value[j]!="@"){
			dog=false;
		}
	}
	console.log("dog: "+dog);
	console.log(input.value);
	if(!dog){
		var k;
		for(var i = 0; i < arr.length; i++){
			k=true;
			if(arr[i]!="@"){
				k=false;	
			}
		}
		console.log(k);
		if(!k){
			arr.push("@");
		}
	}
	else{
		for(var i = 0; i < arr.length; i++){
			if(arr[i]=="@"){
				arr.pop();
			}
		}
	}
	console.log(arr);
});