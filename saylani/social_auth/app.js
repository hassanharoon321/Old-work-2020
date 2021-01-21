const facebook_login = () =>{
    var provider = new firebase.auth.FacebookAuthProvider();


    firebase.auth().signInWithPopup(provider)
        .then(function(result) {
            var user = result.user;
            console.log("user===>",user)
        }).catch(function(error) {
            console.log(error.message) 
        });



}