var unorderList = document.getElementById("unorderList");
var data = document.getElementById("data");

function addItems(){
    
    var liTag = document.createElement("li");
    var liText = document.createTextNode(data.value);
    liTag.appendChild(liText)
    
    unorderList.appendChild(liTag)

    var editBtnTag = document.createElement("button");
    var editBtnText = document.createTextNode("Edit");
    editBtnTag.appendChild(editBtnText)
    
    liTag.appendChild(editBtnTag)

    var delBtnTag = document.createElement("button");
    var delBtnText = document.createTextNode("Delete");
    delBtnTag.appendChild(delBtnText)

    liTag.appendChild(delBtnTag)

    editBtnTag.setAttribute("onclick","edit(this)")
    delBtnTag.setAttribute("onclick","deleteToDo(this)")

        


    data.value = ""
}

function deleteAll(){
    unorderList.innerHTML = ""
}

function deleteToDo(e){
    e.parentNode.remove() 
}

function edit(e){
    var edits = prompt("Enter Change Text")
    e.parentNode.firstChild.nodeValue = edits 
    
    
    
    
    
    // console.log()
}