/* 
Towers of Hanoi

It consists of three rods (labeled A, B & C) and a number of disks of different sizes, which can slide onto any rod. 
The puzzle starts with the disks in a neat stack in ascending order of size on one rod, the smallest at the top, 
thus making a conical shape.

Rules:
- Only one disk can be moved at a time.
- Each move consists of taking the upper disk from one of the stacks and placing it on top of another stack.
- No disk may be placed on top of a smaller disk.
*/

// number of disks on rod A
var n = 15;

// rod A, B & C are empty
var rodA = [];
var rodB = [];
var rodC = [];

// put n disks on rod A

for (var i = n; i > 0; i--) {
    rodA.push(i);
}

// [[disks on rod A], [disks on rod B], [disks on rod C]]
var disks = [rodA, rodB, rodC];

console.log(disks);

solveHanoi(disks[0].length, disks, 0, 1);

function solveHanoi(numDisks, disks, source, dest) {
    // base case; there are no disks to move
    if (numDisks===0) {
        return;
    }

    // recursive case
    // keep track of which rod is the spare
    var spare = 3 - source - dest;

    solveHanoi(numDisks-1, disks, source, spare);
    disks[dest].push(disks[source].pop());
    console.log(disks);
    solveHanoi(numDisks-1, disks, spare, dest);

}
