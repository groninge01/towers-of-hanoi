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
      transition(':leave', [
        useAnimation(fadeAnimation, {
          params: {
          from: 1,
          to: 0,
          time: '1s'
          }
        })
      ]),
      transition(':enter', [
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

  pegs = ['peg-a', 'peg-b', 'peg-c'];

  numbers = [5, 6, 7, 8, 9, 10];

  selectedNumber: number;

  disks = [];

  constructor() {

  }

  ngOnInit() {

  }

  createStack() {
    for (let i = 0; i < this.selectedNumber; i++) {
      this.disks[i] = {
        id: i + 1,
        state: 'in'
      };
    }
  }

  moveOneDisk() {
    const destPeg = this.pegs[1];
    const elDestPeg = document.getElementById(destPeg);

    const sourcePeg = this.pegs[0];
    const elSourcePeg = document.getElementById(sourcePeg);

    const disk = 'disk-1';
    const elDiskToMove = document.getElementById(disk);

    this.disks[0].state = sourcePeg;
    elSourcePeg.removeChild(elDiskToMove);

    console.log(disk, ': ', sourcePeg, ' --> ', destPeg);

    this.disks[0].state = destPeg;
    elDestPeg.insertBefore(elDiskToMove, elDestPeg.childNodes[0]);
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

    this.disks[numDisks - 1].state = sourcePeg;
    elSourcePeg.removeChild(elDiskToMove);

    // console.log(disk, ': ', sourcePeg, ' --> ', destPeg);

    this.disks[numDisks - 1].state = destPeg;
    elDestPeg.insertBefore(elDiskToMove, elDestPeg.childNodes[0]);

    this.solveHanoi(numDisks - 1, spare, destination);

  }

}
