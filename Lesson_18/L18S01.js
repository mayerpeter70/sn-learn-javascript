//
// L18S01 - Nested loops
//
for (var i = 0; i < 5; i++) { //Outer loop
  for (var j = 0; j < 3; j++) { //Inner loop 
    gs.info('i=' + i + ' j=' + j); //Value pairs of i, j logged
  }
}
gs.info('Done i=' + i + ' j=' + j); // Final statement logged

//Lab extended - to work on

var fin = ['Laura', 'Peter', 'John', 'Anna', 'Mike']; 
var dev = ['Zoe', 'Paul', 'Mary', 'Theresa', 'Ike'];
var cust = ['Lily', 'Albert', 'George', 'Donald', 'Kelly'];
var mark = ['Esther', 'Kathy', 'Louis', 'Bob', 'Bill'];

for (i = 0; i < 5; i++) {
    window("team_" + i) = new Array(fin[i], dev[i], cust[i], mark[i]);
}
gs.info(team_1);
gs.info(team_2);
gs.info(team_3);
gs.info(team_4);
gs.info(team_5);
