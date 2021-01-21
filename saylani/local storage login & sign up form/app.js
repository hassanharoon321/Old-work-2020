var users = [];



function signUp(){
    var email = document.getElementById("email").value
    var password = document.getElementById("password").value

    document.getElementById("email").value === ""
    document.getElementById("password").value === ""

    var userData = onGetStorage()
    console.log(userData)

    if(userData === email && userData === password){
        alert("sign up")
    }
}

function login(){

}

function onSetStorage(){
    var newUser = users;
    var convertValue = JSON.stringify(newUser);
    localStorage.setItem("userData",convertValue);
    // console.log(localStorage);
}

function onGetStorage(){
    var data = localStorage.getItem("userData");
    var parseData = JSON.parse(data);
    return parseData;
}