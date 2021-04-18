//
// L12S01 - The ternary operator
//
// Could have written...
var valveOpen = true;
var openStatusString;
if (valveOpen)
  openStatusString = 'open';
else
  openStatusString = 'closed';
  gs.info('1: Valve is currently ' + openStatusString);

// Introducing a shortcut way...
var openStatusString = (valveOpen) ? 'open' : 'closed';
gs.info('2: Valve is currently ' + openStatusString);

//Evaluating string output
var isOpenString = 'true';

if (isOpenString = 'true') { // evaluation condition needs to refer to the string value, but...
  gs.info('This is open')
}

//... we can introduce a Booelan variable using the Ternary operator
var isOpenString = 'true';

var isOpen = (isOpenString == 'true') ? true : false //short version for setting the values of isOpen Boolean using an IF statement

if (isOpen) {
  gs.info('This is open')
}
