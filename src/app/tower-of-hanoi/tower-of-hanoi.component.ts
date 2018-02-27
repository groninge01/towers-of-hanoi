import { Component, OnInit, Input, ChangeDetectorRef } from '@angular/core';
import { useAnimation, state, style, transition, trigger } from '@angular/animations';

import { fadeAnimation } from './animations';
import { Disk } from '../disk-list/disk';

@Component({
  selector: 'app-tower-of-hanoi',
  templateUrl: './tower-of-hanoi.component.html',
  styleUrls: ['./tower-of-hanoi.component.scss'],
  animations: [
    trigger('fadeOutIn', [
      state('in', style({opacity: 1})),
      transition('void => *', [
        useAnimation(fadeAnimation, {
          params: {
          from: 0,
          to: 1,
          time: '3s'
          }
        })
      ]),
      transition('* => void', [
        useAnimation(fadeAnimation, {
          params: {
          from: 1,
          to: 0,
          time: '3s'
          }
        })
      ])
    ])
]})

export class TowerOfHanoiComponent implements OnInit {

  Arr = Array; // Array type captured in a variable

  pegs = ['peg-a', 'peg-b', 'peg-c'];

  disks = {};

  @Input() disk: Disk;

  constructor() {

  }

  ngOnInit() {

  }

  moveOneDisk() {

    const destPeg = this.pegs[1];
    const elDestPeg = document.getElementById(destPeg);

    const sourcePeg = this.pegs[0];
    const elSourcePeg = document.getElementById(sourcePeg);

    const disk = 'disk-1';
    const elDiskToMove = document.getElementById(disk);

    // elSourcePeg.removeChild(elDiskToMove);

    console.log(disk, ': ', sourcePeg, ' --> ', destPeg);

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

    console.log(this.disk.peg);

    this.disk.peg = sourcePeg;
    elSourcePeg.removeChild(elDiskToMove);
    // this.ref.detectChanges();

    // console.log(disk, ': ', sourcePeg, ' --> ', destPeg);

    this.disk.peg = destPeg;
    elDestPeg.insertBefore(elDiskToMove, elDestPeg.childNodes[0]);
    // this.ref.detectChanges();

    this.solveHanoi(numDisks - 1, spare, destination);

  }

}
