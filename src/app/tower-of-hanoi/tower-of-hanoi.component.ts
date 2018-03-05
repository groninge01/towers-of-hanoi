import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { animate, animation, query, style, transition, trigger } from '@angular/animations';

// import { fadeAnimation } from './animations';

@Component({
  selector: 'app-tower-of-hanoi',
  templateUrl: './tower-of-hanoi.component.html',
  styleUrls: ['./tower-of-hanoi.component.scss'],
  animations: [
    trigger('fadeOutIn', [
      transition('* => *', [
        query(':enter', animation(
          [
            style({ opacity: 0 }),
            animate('1s ease-in', style({ opacity: 1 }))
          ]), { optional: true }),
        query(':leave', animation(
          [
            style({ opacity: 1 }),
            animate('1s ease-out', style({ opacity: 0 }))
          ]), { optional: true })
      ])
    ])
  ]
})

export class TowerOfHanoiComponent implements OnInit {

  numbers = [5, 6, 7, 8, 9, 10];

  selectedNumber: number;

  pegA = [];
  pegB = [];
  pegC = [];

  pegs = [this.pegA, this.pegB, this.pegC];

  disk = '';

  constructor(private ref: ChangeDetectorRef) {

  }

  ngOnInit() {

  }

  createStack() {
    for (let i = 0; i < this.selectedNumber; i++) {
      this.pegA[i] = i;
    }
  }

  moveTopDisk() {
    const destPeg = 1;
    const sourcePeg = 0;
    const disk = this.pegs[sourcePeg][0];

    this.pegs[destPeg].unshift(this.pegs[sourcePeg].shift());

    console.log(disk, this.pegA, this.pegB);
  }

  solveHanoi(numDisks, source, destination) {

    let pegs = this.pegs;
    const disk = pegs[source][0];

    // base case; there are no disks to move
    if (numDisks === 0) {
      return;
    }

    // recursive case
    // keep track of which peg is the spare
    const spare = 3 - source - destination;

    this.solveHanoi(numDisks - 1, source, spare);

    pegs[source].shift();
    pegs[destination].unshift(disk);

    console.log(disk, pegs);
    console.log('---');

    // this.pegA = [...this.pegA];
    // this.pegB = [...this.pegB];
    // this.pegC = [...this.pegC];
    // this.pegs[source] = [...this.pegs[source]];
    // this.pegs[destination] = [...this.pegs[destination]];
    this.pegs = pegs;
    this.ref.markForCheck();

    this.solveHanoi(numDisks - 1, spare, destination);

  }

}
