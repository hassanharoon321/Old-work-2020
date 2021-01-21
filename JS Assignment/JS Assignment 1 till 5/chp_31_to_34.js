var date = new Date();
console.log(date);

//------------------------------------------------------

var months = ["Jan","Feb","mar","apr","may","jun","jul","aug","sep","oct","now","dec"];
var d = new Date();
var currentMonth = d.getMonth();

console.log("Current month: "+months[currentMonth]);

//---------------------------------------------------------

var days = ["sun","mon","tue","wed","thur","fri","sat"];
var d = new Date();
var currentDays = d.getDay();

console.log("Today is "+days[currentDays]);

//----------------------------------------------------------

var days = ["sun","mon","tue","wed","thur","fri","sat"];
var d = new Date();
var currentDays = d.getDay();

if(days[currentDays]===days[0]){
console.log("Today is "+days[currentDays]+ " & is funday");
}
else if(days[currentDays]===days[6]){
    console.log("Today is "+days[currentDays]+ " & is funday");
}else{
    console.log("Not a good day")
}    

//----------------------------------------------------------

var emp = [];
var d = new Date(15);
var currentDays = d.getDate();

for(var i = 0; i<15; i++){
    var x = emp[currentDays];
    console.log(x);
}

//-------------------------------------------------------

var d = new Date();
var currentTime = d.getTime();
var min = d.getMinutes(currentTime);

console.log(d);
console.log("Elapsed milisceonds since January 1, 1970"+currentTime);
console.log("Elapsed minutes since January 1, 1970"+min)

//----------------------------------------------------------

var d = new Date();
var hours = d.getHours();
console.log(hours)

//---------------------------------------------------

var d = new Date();
console.log("Current date: "+d)

var e = new Date();
console.log( e.setFullYear(1970,11,3) );
// console.log("100 years back "+yearsBack);









//---------------------------------------------------

var d = new Date();
var userBirthYear = prompt("Enter your birthYear");
var currentYear = d.getFullYear();
var age = currentYear - userBirthYear  ;
console.log("user age is "+age);
console.log("User Birth year is "+userBirthYear);


//--------------------------------------------------------

var months = ["Jan","Feb","mar","apr","may","jun","jul","aug","sep","oct","now","dec"];
var d = new Date();
var userName = "Hassan";
var month = d.getMonth();
var numberOfUnits = 400;
var perUnit = 16;
var dueDate = numberOfUnits * perUnit;
var latePayment = 350;
var afterDate = dueDate + latePayment;

console.log("Username is: "+userName);
console.log("Month is: "+months[month]);
console.log("Numbers of units by user: "+numberOfUnits);
console.log("Per Unit Amount: "+perUnit);
console.log("Amount upto Due Date: "+dueDate);
console.log("Late Payment Surcharge: "+latePayment);
console.log("Late Payment of Amount After Due Date: "+afterDate);