import { Component, OnInit } from '@angular/core';
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

  // numbers = [1, 2, 3, 4];
  selectedNumber: number;
  pegs = [[], [], []];
  disk = '';
  callStack = [];

  constructor() {

  }

  ngOnInit() {

  }

  resetStack() {
    this.pegs = [[], [], []];
  }

  createStack() {
    for (let i = 0; i < this.selectedNumber; i++) {
      this.pegs[0][i] = i;
    }
  }

  moveDisk(from, to) {
    const disk = this.pegs[from][0];
    this.pegs[from].shift();
    this.pegs[to].unshift(disk);
  }

  solveIt(numDisks, source, destination) {

    this.solveHanoi(numDisks, source, destination);

    this.moveDisks();
  }

  moveDisks() {
    if (this.callStack.length === 0) {
      return;
    }

    const param = this.callStack.shift();
    const source = param[0];
    const destination = param[1];

    this.pegs[destination].unshift(this.pegs[source].shift());

    setTimeout(() => {
      this.moveDisks();
      }, 2000);

  }

  solveHanoi(numDisks, source, destination) {

    // base case; there are no disks to move
    if (numDisks === 0) {
      return;
    }

    // recursive case
    // keep track of which peg is the spare
    const spare = 3 - source - destination;

    this.solveHanoi(numDisks - 1, source, spare);

    this.callStack.push([source, destination]);

    this.solveHanoi(numDisks - 1, spare, destination);

  }

}
