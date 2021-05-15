//
// L19S03 - Function with a return value
//
function toCelsius(fahrenheit) {

    return (5 / 9) * (fahrenheit - 32); //return keeps the last value in the system 

}
var c = toCelsius(32); //declare and define var c  
gs.info(c);
c = toCelsius(212); //redefine var c 
gs.info(c);
