// function dateTime(){
//     var d = new Date();
//     console.log(d);
// }

// dateTime();

//-----------------------------------------------

// function greetUser(){
//     var firstName = prompt("Enter your First name: ");
//     var lastName = prompt("Enter your Last name: ");

//     alert("So many greetings to you "+firstName+" "+lastName);
// }

// greetUser();

//-----------------------------------------------

// function addation(){
//     var num1 = +prompt("Enter 1st number ");
//     var num2 = +prompt("Enter 2nd number ");

//     return num1 + num2
// }

// var sum = addation()
// console.log(sum)

//----------------------------------------------

// function calc(){
//     var num1 = +prompt("Enter 1st number: ");
//     var num2 = +prompt("Enter 2nd number: ");
//     var opr = prompt("Enter operator: ");

//     if(opr==="+"){
//         return num1 + num2;
//     }
//     else if(opr==="-"){
//         return num1 - num2;
//     }
//     else if(opr==="*"){
//         return num1*num2;
//     }
//     else if(opr==="/"){
//         return num1/num2;
//     }
//     else{
//         alert("An error");
//     }
// }

// var result = calc();
// console.log(result)

//----------------------------------------------------

// function square(num){
//     return console.log(num * num);
// }

// square(10);

//------------------------------------------------------
// function factorialize(num) {
//     if (num < 0) 
//           return -1;
//     else if (num == 0) 
//         return 1;
//     else {
//         return (num * factorialize(num - 1));
//     }
//   }
//   var total = factorialize(5);
//   console.log(total);

//----------------------------------------------

            // start and end number

//---------------------------------------------

// function calcAngle(){
//     var hyp , base, per;
//     return console.log(hyp*hyp)
// }

//--------------------------------------------

// function calcArea(width,height){
//     var area,width,height;

//     return area = width * height;
// }

// var total = calcArea(2,2)
// console.log(total)

// var w = 2
// var h = 9
// var total2 = calcArea(w,h);
// console.log(total2);

//-------------------------------

//palindrome

//------------------------------

function uppercase(str)
{
  var array1 = str.split(' ');
  var newarray1 = [];
    
  for(var x = 0; x < array1.length; x++){
      newarray1.push(array1[x].charAt(0).toUpperCase()+array1[x].slice(1));
  }
  return newarray1.join(' ');
}
console.log(uppercase("the quick brown fox"));

//------------------------------

// function find_longest_word(str)
// {
//   var array1 = str.match(/\w[a-z]{0,}/gi);
//   var result = array1[0];

//   for(var x = 1 ; x < array1.length ; x++)
//   {
//     if(result.length < array1[x].length)
//     {
//     result = array1[x];
//     } 
//   }
//   return result;
// }
// console.log(find_longest_word('Web Development Tutorial'));

//---------------------------

//.13

//--------------------------------

// function calcCircumference(radius){
//     var radius;
//     var circle = 2 * 3.142 * radius;
//     return circle;
// }

// var total = calcCircumference(3.178)
// console.log(total);

// function areaOfCircle(){
//     var area = 3.142 * (calcCircumference(3.187) * 2 );
//     return area;
// }

// var total = areaOfCircle();
// console.log(total);