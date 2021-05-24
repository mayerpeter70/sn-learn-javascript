//
// L15S03 - Continue - jumping back to the while condition
//
var i = 0;
var done = false;
while (!done) { //negaive statement -> false is not true [-(-)] -> statement is true, loop is going on  
  if (i < 5) {
    ++i;
    gs.info(i + ' done=' + done);
    continue;
  }
  gs.info('I think we are done');
  done = true;
}
gs.info(i);
