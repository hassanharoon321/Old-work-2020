var getList = document.getElementById("get-list")
var getData = document.getElementById("gettodo")

function addItems(){

    //Add Items to the list Start
    var getData = document.getElementById("gettodo")

    emptyString()

    var liTag = document.createElement("li")
    var liTextNode = document.createTextNode(getData.value)
    liTag.setAttribute("class","type-non")

    liTag.appendChild(liTextNode)

    getList.appendChild(liTag)
    //Add Items to the list end

    //clear an input start
    getData.value = " "
    //clear an input end

    //create a delete button on li tag start
    var deleteButtonLi = document.createElement("button");
    var deleteButtonLiText = document.createTextNode("DELETE");

    deleteButtonLi.appendChild(deleteButtonLiText)

    liTag.appendChild(deleteButtonLi)

    deleteButtonLi.setAttribute("class","btn btn-outline-success deleteBtn-style")

    deleteButtonLi.setAttribute("onclick","deleteItems(this)")
    //create a delete button on li tag end



    //create a edit button on li tag start
    
    var editButton = document.createElement("button");
    var editButtonText = document.createTextNode("EDIT")

    editButton.appendChild(editButtonText);

    liTag.appendChild(editButton)
    editButton.setAttribute("class","btn btn-outline-warning editBtn-style")
    editButton.setAttribute("onclick","edit(this)")
    
    //create a edit button on li tag end

}

function deleteItems(getListData){
    getListData.parentNode.remove()
}

function deleteAll(){
    getList.innerHTML = " "

}

function edit(editText){
    var x = editText.parentNode.firstChild;
    var editData = prompt("Enter Edit Value: ",x.nodeValue);
    x.nodeValue = editData
    
}

function emptyString(){
    if(getData.value === "")
    {
        liTag.setAttribute('disabled', 'disabled');
        
    }
}
