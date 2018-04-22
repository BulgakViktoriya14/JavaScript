var butBold=document.getElementById("bold");
var butItal=document.getElementById("italics");
var butUnder=document.getElementById("underline");
var butIndent=document.getElementById("indent");
var butCreatLink=document.getElementById("createlink");
var butDelLink=document.getElementById("deletelink");
var butAddIm=document.getElementById("addimage");
var butDelete=document.getElementById("delete");
var butColor=document.getElementById("colortext");
var butSize=document.getElementById("sizetext");
var butBackground=document.getElementById("background");
var butFont=document.getElementById("fonttext");
var buttons=document.querySelector(".buttons")

butBold.addEventListener("click",function(e){
	document.execCommand("bold", false, null);
})

butItal.addEventListener("click",function(e){
	document.execCommand("italic", false, null);
})

butUnder.addEventListener("click",function(e){
	document.execCommand("underline", false, null);
})

butIndent.addEventListener("click",function(e){
	document.execCommand("indent", false, null);
})

butCreatLink.addEventListener("click",function(e){
	var url=prompt("Введите ссылку");
	document.execCommand("createlink", false, url);
})

butDelLink.addEventListener("click",function(e){
	document.execCommand("unlink", false, null);
})

butAddIm.addEventListener("click",function(e){
	var img=prompt("Введите путь к картинке");
	document.execCommand("insertImage", false, img);
})

butDelete.addEventListener("click",function(e){
	document.execCommand("delete", false, null);
})

butColor.addEventListener("click",function(e){
	var color=document.getElementById("color");
	color.setAttribute("placeholder",butColor.value);
	document.execCommand("foreColor", false, color.getAttribute("placeholder"));
})

butSize.addEventListener("click",function(e){
	var textSize=document.getElementById("size");
	textSize.setAttribute("placeholder",butSize.value);
	document.execCommand("fontSize", false, textSize.getAttribute("placeholder"));
})

butBackground.addEventListener("click",function(e){
	var background=document.getElementById("ground");
	background.setAttribute("placeholder",butBackground.value);
	document.execCommand("backColor", false, background.getAttribute("placeholder"));
})

butFont.addEventListener("click",function(e){
	var textFont=document.getElementById("font");
	textFont.setAttribute("placeholder",butFont.value);
	document.execCommand("fontName", false, textFont.getAttribute("placeholder"));
})

buttons.addEventListener("click",function(e){
	if(e.target.nodeName=="BUTTON" || e.target.nodeName=="OPTION"|| e.target.nodeName=="SELECT"){
		e.target.classList.toggle("active");
	}
})