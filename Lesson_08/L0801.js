//
//  L08S01 - Changing and detecting variable types
//
var i = 5;
var iStr = i.toString(); //turns any variable into a string (numeric, Boolean)
gs.info(typeof i); //typeOf returns the type of the specified var 
gs.info(typeof iStr);

var n = parseInt(iStr); //convert string into an integer
var f = parseFloat(iStr); //convert string into a floating point number 
gs.info(typeof n + ' n=' + n);

//-----StringLab
var dog = 'kutya'
var cat = 'macska'
var rat = 'patkany'

gs.log(dog.length)
gs.log(cat.length) 
gs.log(rat.length) 

var animals = dog + '\n' + cat + '\n' + rat
gs.log(animals)
gs.log(animals.length)

//-----StringLab returns

*** Script: 5
*** Script: 6
*** Script: 7
*** Script: kutya
macska
patkany
*** Script: 20
