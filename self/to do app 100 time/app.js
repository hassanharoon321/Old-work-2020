const unorderList = document.getElementById("unorderList");

function addItems(){
    const data = document.getElementById("data");

    var list = document.createElement("li");
    var listValue = document.createTextNode(data.value);
    list.appendChild(listValue);
    unorderList.appendChild(list)

    var editBtn = document.createElement("button");
    var editBtnValue = document.createTextNode("Edit");
    editBtn.appendChild(editBtnValue);
    list.appendChild(editBtn)

    editBtn.setAttribute("onclick","editFunctionality(this)")

    var delBtn = document.createElement("button");
    var delBtnValue = document.createTextNode("Delete");
    delBtn.appendChild(delBtnValue);
    list.appendChild(delBtn)

    delBtn.setAttribute("onclick","delFunctionality(this)")

    


    data.value =""

}

function deleteAll(){
    unorderList.innerHTML = ""
}

function editFunctionality(e){
    var editInput = prompt("Enter value",e.parentNode.firstChild.nodeValue)
    e.parentNode.firstChild.nodeValue = editInput
    // console.log(e.parentNode.firstChild.nodesValue)
}

function delFunctionality(e){
    e.parentNode.remove()
}