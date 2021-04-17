//
// L10S01 - Arithmetic Operators
//
var a = 0;
var b = 1;
gs.info(a < b); //returns true or false -> result may be saved into a variable 

var n = '3';
var i = 3;
gs.info(n == i); // REALLY?!! -> == equal comparison vs. = assignment
gs.info(n != i); // REALLY?!! -> != non-equal comparison 

gs.info(i = 4); // WATCH OUT!!!

var p = 5 //Integer
var q = '5' //String
gs.log(p == q) //compares value -> true
gs.log(p === q) //compares value and variable type -> false 
