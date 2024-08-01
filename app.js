const inputBox = document.getElementByID("inputBox");
const listcontainer = document.getElementByID("list-container");
function addTask(){
    if(inputBox.value === ''){
        alert("you must write something!");

    }
    else{
        let li=document.createElement("li");
        li.innerHTML = inputBox.value;
        listcontainer.appendchild(li);
    }
    inputBox.value="";
}