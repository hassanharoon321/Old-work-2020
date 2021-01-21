function expand(){
    var large = document.getElementById("loris");
    large.setAttribute("class","expand2")
}


function checkAddress(fieldId) {
    if (document.getElementById(fieldId).value === "") {
    alert("Email address required.");
    }
}


function fillCity() {
     var cityName;
     var zipEntered = document.getElementById("zip").value;
        switch (zipEntered)
        {
        case "60608" :
        cityName = "Chicago";
        break;
        case "68114" :
        cityName = "Omaha";
        break;
        case "53212" :
        cityName = "Milwaukee";
        }
     document.getElementById("city").value = cityName;
 }

function expandLoris() {
     var expandedParagraph = "Slow lorises are a, group of several species of trepsirrhine primates which make up the genus Nycticebus They have a round head narrow snout large eyes  and a variety of distinctive coloration patterns that are species dependent The hands and feet of slow lorises have several adaptations that give them a pincer like grip and enable them to grasp branches for long periods of time Slow lorises have a toxic bite a rare trait among mammals"
     document.getElementById("slowLoris").innerHTML = expandedParagraph
     }

function placeAList() {
    var listToPlace = "<ol><li>Slow loris</li><li>    <button>Fast loris</button>    </li><li>Just-right loris</li></ol>";
    document.getElementById("lorisList").innerHTML = listToPlace;
}

function makeInvisible() {
    document.getElementById("ugly").className = "hidden";
}

function swapPic() {
    document.getElementById("before").src = "after-pic.jpg";
}

function swapPic(eId, newPic) {
    document.getElementById(eId).src = newPic;
}

var par = document.getElementsByTagName("p").style.color = "red";
par[1].innerHTML;