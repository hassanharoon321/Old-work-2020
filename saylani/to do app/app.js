const parentList = document.getElementById("parentList");


function addItems(){

    const data = document.getElementById("data");

    //Li Element with Input Data
    var li = document.createElement("li");
    var liText = document.createTextNode(data.value);
    li.appendChild(liText);

    parentList.appendChild(li)

    //Edit Button
    var buttonEdit = document.createElement("button");
    var buttonEditText = document.createTextNode("Edit");
    buttonEdit.appendChild(buttonEditText);
    li.appendChild(buttonEdit)

    //Edit Button Functionality
    buttonEdit.setAttribute("onclick","edit(this)")

    //Delete button
    var buttonDelete = document.createElement("button");
    var buttonDeleteText = document.createTextNode("Delete");
    buttonDelete.appendChild(buttonDeleteText);
    li.appendChild(buttonDelete)

    //Edit Button Functionality
    buttonDelete.setAttribute("onclick","deleteList(this)")

    data.value = ""
    
}

function edit(e){
    var editNode = prompt("Enter New Value",e.parentNode.firstChild.nodeValue)
    e.parentNode.firstChild.nodeValue = editNode
}

function deleteList(e){
    e.parentNode.remove()
}

function deleteItems(){
    parentList.innerHTML = ""
}