import { Component, OnInit, Input } from '@angular/core';
import { Disk } from '../disk-list/disk';

@Component({
  selector: 'app-tower-of-hanoi',
  templateUrl: './tower-of-hanoi.component.html',
  styleUrls: ['./tower-of-hanoi.component.scss']
})
export class TowerOfHanoiComponent implements OnInit {

  Arr = Array; // Array type captured in a variable

  pegs = ['peg-a', 'peg-b', 'peg-c'];

  @Input() disk: Disk;

  constructor() { }

  ngOnInit() {
  }

  solveHanoi(numDisks, source, destination) {

    // base case; there are no disks to move
    if (numDisks === 0) {
      return;
    }

    // recursive case
    // keep track of which peg is the spare
    const spare = 3 - source - destination;

    const peg = this.pegs[destination];

    this.solveHanoi(numDisks - 1, source, spare);

    const destPeg = document.getElementById(peg);
    const disk = 'disk-' + numDisks;

    console.log('disk: ' + disk, 'peg: ' + destPeg.id);

    destPeg.insertBefore(document.getElementById(disk), destPeg.childNodes[0]);

    this.solveHanoi(numDisks - 1, spare, destination);

  }

}
