/* 
Towers of Hanoi

It consists of three pegs (labeled A, B & C) and a number of disks of different sizes, which can slide onto any peg. 
The puzzle starts with the disks in a neat stack in ascending order of size on one peg, the smallest at the top, 
thus making a conical shape.

Rules:
- Only one disk can be moved at a time.
- Each move consists of taking the upper disk from one of the stacks and placing it on top of another stack.
- No disk may be placed on top of a smaller disk.
*/

// number of disks on peg A
var n = 15;

// peg A, B & C are empty
var pegA = [];
var pegB = [];
var pegC = [];

// put n disks on peg A

for (var i = n; i > 0; i--) {
    pegA.push(i);
}

// [[disks on peg A], [disks on peg B], [disks on peg C]]
var disks = [pegA, pegB, pegC];

console.log(disks);

solveHanoi(disks[0].length, disks, 0, 1);

function solveHanoi(numDisks, disks, source, dest) {
    // base case; there are no disks to move
    if (numDisks===0) {
        return;
    }

    // recursive case
    // keep track of which peg is the spare
    var spare = 3 - source - dest;

    solveHanoi(numDisks-1, disks, source, spare);
    disks[dest].push(disks[source].pop());
    console.log(disks);
    solveHanoi(numDisks-1, disks, spare, dest);

}
