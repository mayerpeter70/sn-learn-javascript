//
// L19S04 - Local variables scope
//
function toCelsius(fahrenheit) {

    // c is only known in the function toCelsius()
    var c = (5 / 9) * (fahrenheit - 32 //c is defined in local scope, within the function only 

    return c;
}
gs.info(c); // here c is not known as we are outside of the function 

// Solution -> define outside of the function 
    
function toCelsius(fahrenheit) {

    // c is only known in the function toCelsius()
    var c = (5 / 9) * (fahrenheit - 32 //c is defined in local scope, within the function only 


    return c;
}
var c = toCelsius(100); //defined c outside of the function on global scope 
gs.info(c); // now c is known and can be used 
