var users = [];

function Users(email, password) {
    this.email = email
    this.password = password
}

function signUp() {
    var email = document.getElementById('email').value
    var password = document.getElementById('password').value
    var userNotExist = false
    document.getElementById('email').value = ""
    document.getElementById('password').value = ""
    var userData = onGetStorage()

    if (!userData) {
        var user = new Users(email, password)
        users.push(user)
        onSetStorage()
    } else {
        for (i = 0; i < userData.length; i++) {
            if (userData[i].email === email) {
                alert("Email Already Register")
            } else {
                userNotExist = true
            }
        }
    }
    
    if (userNotExist === true) {
        var user = new Users(email, password)
        users.push(user)
        onSetStorage()
    }
}

function login() {
    var email = document.getElementById('email').value
    var password = document.getElementById('password').value
    document.getElementById('email').value = ""
    document.getElementById('password').value = ""
    var userData = onGetStorage()
    var flag = false

    for (i = 0; i < userData.length; i++) {
        if (userData[i].email === email && userData[i].password === password) {
            flag = true
        }
    }
    if (flag === true) {
        alert("User Successfully Login")
    } else {
        alert("Incorrect Username or Password")
    }
}

function onSetStorage() {
    var newUser = users
    var converted = JSON.stringify(newUser)
    localStorage.setItem("usersData", converted)
}

function onGetStorage() {
    var data = localStorage.getItem("usersData")
    var parseData = JSON.parse(data)
    return parseData
}