var list = document.getElementById("list");

function addToDo(){
        var todo_item = document.getElementById("todo-item");
        
        //create li tag with text node
        var li = document.createElement("li");
        var litext = document.createTextNode(todo_item.value);
        li.appendChild(litext);

        //create delete button
        var delBtn = document.createElement("button");
        var delText = document.createTextNode("Delete");
        delBtn.setAttribute("class","btn");
        delBtn.setAttribute("onclick","deleteItem(this)")
        delBtn.appendChild(delText);

        //create edit button
        var editBtn = document.createElement("button");
        var editText = document.createTextNode("Edit");
        editBtn.appendChild(editText);
        editBtn.setAttribute("onclick","editItem(this)")

        li.appendChild(delBtn);
        li.appendChild(editBtn);
        
        
        
        list.appendChild(li);
        todo_item.value = ""
}

function deleteItem(a){
    a.parentNode.remove()
}

function deleteAll(){
    list.innerHTML = ""
}

function editItem(e){
    var editValue = prompt("Enter Edit Value",e.parentNode.firstChild.nodeValue)
    e.parentNode.firstChild.nodeValue = editValue

}