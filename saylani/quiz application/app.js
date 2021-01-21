function check(){
    score = 0;
    var right_answer = document.getElementById("q1-a1");
    var q1_answer_2 = document.getElementById("q1-a2");
    var q1_answer_3 = document.getElementById("q1-a3");
    var q1_answer_4 = document.getElementById("q1-a4");
    if(right_answer.checked == true){
        score+=3;
        alert("Answer 1 is right")
    }else{
        alert("Answer 1 is wrong")
    }


    var right_answer_2 = document.getElementById("q2-a3");
    var q1_answer_2 = document.getElementById("q2-a1");
    var q1_answer_3 = document.getElementById("q2-a2");
    var q1_answer_4 = document.getElementById("q2-a4");
    if(right_answer_2.checked == true){
        score+=4;
        alert("Answer 2 is right")
    }else{
        alert("Answer 2 is wrong")
    }

    var right_answer_3 = document.getElementById("q3-a2");
    var q1_answer_2 = document.getElementById("q3-a1");
    var q1_answer_3 = document.getElementById("q3-a3");
    var q1_answer_4 = document.getElementById("q3-a4");
    if(right_answer_3.checked == true){
        score+=3;
        alert("Answer 3 is right")
    }else{
        alert("Answer 2 is wrong")
    }

    alert(`your score is ${score}/10`)

}