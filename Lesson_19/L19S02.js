//
// L19S02 - Function with a parameter
//
function toCelsius(fahrenheit) { //farenheit is the parameter

    var c = (5 / 9) * (fahrenheit - 32);

    gs.info(c); // gs.info(c + ' fok')
}
toCelsius(32);
toCelsius(100);
