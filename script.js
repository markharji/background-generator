var input = document.getElementById("userinput");
var button = document.getElementById("enterbutton");
var ul = document.getElementById("ulist");

function createListElement(){
	var li = document.createElement("li");
	li.appendChild(document.createTextNode(input.value));
	ul.appendChild(li);
	input.value="";

}

function addListAfterClick(){
	if(input.value!==""){
	createListElement();
}
}
function addListAfterKeypress(event){
	if(input.value!=="" && event.keyCode === 13){
	 createListElement();
	}
}

button.addEventListener("click",addListAfterClick);
input.addEventListener("keypress",addListAfterKeypress);

//TERNARY OPERATOR
// condition ? expr1 : expr2

//Switch
