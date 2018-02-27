import { Component, OnInit, Input } from '@angular/core';
import { useAnimation, state, style, transition, trigger } from '@angular/animations';

import { fadeAnimation } from './animations';

@Component({
  selector: 'app-tower-of-hanoi',
  templateUrl: './tower-of-hanoi.component.html',
  styleUrls: ['./tower-of-hanoi.component.scss'],
  animations: [
    trigger('fadeOutIn', [
      // state('in', style({opacity: 1})),
      transition('peg-a => *, peg-b => *, peg-c => *', [
        useAnimation(fadeAnimation, {
          params: {
          from: 1,
          to: 0,
          time: '1s'
          }
        })
      ]),
      transition('* => peg-a, * => peg-b, * => peg-c', [
        useAnimation(fadeAnimation, {
          params: {
          from: 0,
          to: 1,
          time: '1s'
          }
        })
      ])
    ])
]})

export class TowerOfHanoiComponent implements OnInit {

  Arr = Array; // Array type captured in a variable

  pegs = ['peg-a', 'peg-b', 'peg-c'];

  @Input() number: number;

  disks = [];

  constructor() {
    for (let i = 1; i < this.number; i++) {
      this.disks.push({
        id: i,
        state: 'in'
      });
    }
  }

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

    const destPeg = this.pegs[destination];
    const elDestPeg = document.getElementById(destPeg);

    const sourcePeg = this.pegs[source];
    const elSourcePeg = document.getElementById(sourcePeg);

    const disk = 'disk-' + numDisks;
    const elDiskToMove = document.getElementById(disk);

    this.solveHanoi(numDisks - 1, source, spare);

    this.disks[numDisks].state = sourcePeg;
    elSourcePeg.removeChild(elDiskToMove);

    console.log(disk, ': ', sourcePeg, ' --> ', destPeg);

    this.disks[numDisks].state = destPeg;
    elDestPeg.insertBefore(elDiskToMove, elDestPeg.childNodes[0]);

    this.solveHanoi(numDisks - 1, spare, destination);

  }

}
