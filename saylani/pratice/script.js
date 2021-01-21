function date(){
    var firstName = document.getElementById("sub").value
    var lastName = document.getElementById("sub2").value
    var email = document.getElementById("sub3").value
    var age = document.getElementById("sub4").value


    function Assignment(firstName,lastName,email,age){
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.age = age;
    }

    var studentsData = new Assignment(firstName,lastName,email,age);
    var arr = [studentsData];    
}

