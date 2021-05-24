//
// L15S02 - breaking out of a while loop
//
var i = 0;
while (true) { //While loop executes until the test condition is true -> (true) is always true -> infinite looop...
  if (i == 5) //... unless break stops the loop when the if condition is fulfilled
    break;
  gs.info(i);
  ++i; //can become infinita loop is steps 2 value (++i; ++i;) -> jumps over 5 -> safety solution is (i >= 5)!!! 
}
gs.info('done');
