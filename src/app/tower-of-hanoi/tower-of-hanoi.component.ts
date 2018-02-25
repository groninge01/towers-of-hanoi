import { Component, OnInit, Input } from '@angular/core';
import { useAnimation, state, style, transition, trigger } from '@angular/animations';

import { fadeAnimation } from './animations';
import { Disk } from '../disk-list/disk';

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

  bindingVar = '';

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

    const destPeg = this.pegs[destination];
    const elDestPeg = document.getElementById(destPeg);

    const sourcePeg = this.pegs[source];
    const elSourcePeg = document.getElementById(sourcePeg);

    const disk = 'disk-' + numDisks;
    const elDiskToMove = document.getElementById(disk);

    this.solveHanoi(numDisks - 1, source, spare);

    this.bindingVar = sourcePeg;
    elSourcePeg.removeChild(elDiskToMove);

    console.log(disk, ': ', sourcePeg, ' --> ', destPeg);

    const rectBefore = elDiskToMove.getBoundingClientRect();

    this.bindingVar = destPeg;
    elDestPeg.insertBefore(elDiskToMove, elDestPeg.childNodes[0]);

    const rectAfter = elDiskToMove.getBoundingClientRect();

    // console.log('before: ' + rectBefore.top, 'after: ' + rectAfter.top);

    this.solveHanoi(numDisks - 1, spare, destination);

  }

}
