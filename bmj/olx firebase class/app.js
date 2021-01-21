function saveData(){
   var name = document.getElementById("name");
   var roll = document.getElementById("roll");

   var key = firebase.database().ref("student").push().key 
   var student = {
        name : name.value,
        roll : roll.value,
        key:key
    }

    firebase.database().ref('student/'+ key).set(student);
}

function getFirebaseData(){

    firebase.database().ref("student").on("child_added",function(data){
        console.log(data.val())
    })
}

getFirebaseData()

function removeFirebaseData(){
    firebase.database().ref("student/-MM1VwG2AxrPwnWemzMF").remove()
}

removeFirebaseData()

function editFirebaseData(){
    firebase.database().ref("student/-MM1TJsGevmwhBit5ceO").set({
        key:"-MM1TJsGevmwhBit5ceO",
        name:"basit",
        roll:"23423423"
    })
}

editFirebaseData()