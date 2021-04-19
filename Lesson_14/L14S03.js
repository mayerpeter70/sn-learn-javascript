//
// L14S03 - Truthy and Falsy
//

// Take a look at strings
//
var string1;
var string2 = null;
var string3 = 'Hello, world!';
gs.info('string1=' + ((string1) ? 'true' : 'false')); // False - the variable is not defined
gs.info('string2=' + ((string2) ? 'true' : 'false')); // False - the variable is defined as empty (null) 
gs.info('string3=' + ((string3) ? 'true' : 'false')); //True - the variable is defined and has a value 
