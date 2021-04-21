//
// L18S01 - Nested loops
//
for (var i = 0; i < 5; i++) { //Outer loop
  for (var j = 0; j < 3; j++) { //Inner loop 
    gs.info('i=' + i + ' j=' + j); //Value pairs of i, j logged
  }
}
gs.info('Done i=' + i + ' j=' + j); // Final statement logged
