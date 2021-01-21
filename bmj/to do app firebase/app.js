// function saveData(){
//     var name = document.getElementById("name")
//     var roll = document.getElementById("roll")
    
//     var key = firebase.database().ref("student").push().key //key pass by object
    
//     var student = {
//         name : name.value,
//         roll : roll.value,
//         keyProperty:key
//     }

//     //key method by own
//     //var key1 =  Math.random() * 78316548544;

//     //key method by firebase
//     // var key = firebase.database().ref("student").push().key

//     firebase.database().ref("students/" + key).set(student)
// }

// function getFirebaseData(){

//     firebase.database().ref("students").on("child_added",function(data){
//         console.log(data.val() ) 
//     })

// }

// getFirebaseData()

// // function removeFirebaseData(){
// //     firebase.database().ref("students").remove()
// // }


// // removeFirebaseData()

// function editFirebaseData(){
//     firebase.database().ref("students/-MMAmIBuBHD3xLfdcqdR").set({
//         key: "-MMAmIBuBHD3xLfdcqdR",
//         name:"nakk",
//         roll : 09089
//     })
// }

// editFirebaseData()



var list = document.getElementById("unorderlist");

    firebase.database().ref("todos").on("child_added",function(data){
        var li = document.createElement("li");
        var liText = document.createTextNode(data.val().value)
    
        li.appendChild(liText)
    
        list.appendChild(li)
        
        data.value = ""
    
        var editBtn = document.createElement("button");
        var editBtnText = document.createTextNode("Edit");
        editBtn.appendChild(editBtnText);
    
        var delBtn = document.createElement("button");
        var delBtnText = document.createTextNode("Delete");
        delBtn.appendChild(delBtnText);
    
        li.appendChild(editBtn)
        li.appendChild(delBtn)
    
        editBtn.setAttribute("onclick","editButton(this)")
        editBtn.setAttribute("id",data.val().key)
        delBtn.setAttribute("id",data.val().key)
        delBtn.setAttribute("onclick","deleteButton(this)")
    })

function addItems(){
    var todo_item = document.getElementById("data");   //get value
    
    var database = firebase.database().ref("todos")   //firebase shortcut
    
    var key = database.push().key;   //create key

    var todo = {
        value : todo_item.value,  //pass value as an object
        key : key               //pass key as an object
    }
    
    database.child(key).set(todo)      //make a key as an child as students/key & pass object

    todo_item.value = " "
}

function deleteAll(){
    firebase.database().ref("todos").remove()
    list.innerHTML = ""
}

function editButton(e,id){
    
    var val = prompt("Enter your change data",e.parentNode.firstChild.nodeValue)

    var editTodo={
        value : val,
        key:e.id
    }
    
    firebase.database().ref("todos").child(e.id).set(editTodo)
    e.parentNode.firstChild.nodeValue = val;

}

function deleteButton(e,id){

    firebase.database().ref("todos").child(e.id).remove()
    e.parentNode.remove()
    
}