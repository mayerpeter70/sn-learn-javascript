//
// L17S01 - do-while
//
var i = 0;
gs.info('start');//Starting message printed 
do { //Action: this to be carried out -> at least once this loop will run because condition is checked afterwards
  gs.info('i=' + i);
  ++i;
} while (i < 5); //Condition: until this conditions IS fulfilled
gs.info('done i=' + i);
