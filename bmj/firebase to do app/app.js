var list = document.getElementById("unorderlist");


    firebase.database().ref("todos").on("child_added",function(data){
        //list
    var li = document.createElement("li");
    var liText = document.createTextNode(data.val().val);
    li.appendChild(liText);
    
    //ul merge with li
    list.appendChild(li);

    //edit button
    var edit = document.createElement("button");
    var editText = document.createTextNode("Edit");
    edit.appendChild(editText);
    li.appendChild(edit)
    edit.setAttribute('id',data.val().key);
    edit.setAttribute("onclick","editBtn(this)")
    
    //delete button
    var del = document.createElement("button");
    var delText = document.createTextNode("Delete");
    del.appendChild(delText);
    li.appendChild(del)
    del.setAttribute("onclick","delBtn(this)")
    del.setAttribute("id",data.val().key)

    })




function addItems(){
    var data = document.getElementById("data");
    
    var key = firebase.database().ref("todos").push().key;
    var database = firebase.database().ref("todos");

    var objj = {
        val : data.value,
        key:key
    };

    database.child(key).set(objj)

    data.value = ""
}

function deleteAll(){
    firebase.database().ref("todos").remove();
    list.innerHTML = ""
}

function delBtn(del){
    del.parentNode.remove()
    firebase.database().ref("todos").child(del.id).remove()
}

function editBtn(edit){
    var editText = prompt("Enter new value",edit.parentNode.firstChild.nodeValue);
    edit.parentNode.firstChild.nodeValue = editText

    firebase.database().ref("todos").child(edit.id).set({
        val : editText,
        key:edit.id
    })
    // console.log(editText)

}