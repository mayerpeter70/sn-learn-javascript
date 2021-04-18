//
// S11S01 - If Statements
//
var a = 1;
var b = 3;
var c = 5;
if (a < b) { // This block only starts if the condition is fulfilled - by default it runs the next statement only (until next semicolon)
  gs.info('a is less than b');
  gs.info('Two statements only if put into a block'); 
} //Curly braces define the block, in this case all block is run

//Variation with the condition put into a Boolean variable 
var a = 1;
var b = 3;
var c = 5;
var bool = (a < b); 
if (bool == true) { // Shorter version: <if (bool)> 
  gs.info('a is less than b');
  gs.info('Two statements only if put into a block'); 
} //Curly braces define the block, in this case all block is run


// else
if (a < b)
  gs.info('a is less than b');
else
  gs.info('a is greater than or equal to b');

// Else if and else
if (a < b) { // Curly braces technically not required because only one line of code but more clear to read 
  gs.info('a is less than b');
} else if (a > b) {
  gs.info('a is greater than b');
} else if (a == b) {
  gs.info('a equals b');
} else
  gs.info('Uh-oh');
}

if (a < b) {
  if (b < c) {
      gs.info('a b c are in order');
      gs.info('that means a is less than c')
  } else {
      gs.info('a is equal or greater than b'
}
              
//IF statement with Booelan operators
var valveOpen = true;
if (valveOpen == true) /* if (valveOpen) */  { 
        gs.info('valve is currently open')
      }
    else {
        gs.info('valve is currently closed')
      }
