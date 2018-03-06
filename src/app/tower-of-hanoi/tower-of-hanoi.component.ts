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

  selectedNumber: number;

  pegs = [[], [], []];

  disk = '';

  constructor() {

  }

  ngOnInit() {

  }

  createStack() {
    for (let i = 0; i < this.selectedNumber; i++) {
      this.pegs[0][i] = i;
    }
  }

  moveTopDisk() {
    const destPeg = 1;
    const sourcePeg = 0;
    const disk = this.pegs[sourcePeg][0];

    this.pegs[destPeg].unshift(this.pegs[sourcePeg].shift());

    console.log(disk, this.pegs[sourcePeg], this.pegs[destPeg]);
  }

  solveHanoi(numDisks, source, destination) {

    const pegsReducer = (state, action, value) => {
      switch (action.type) {
        case 'copyPeg':
        return Object.assign([...state], { [action.index]: [...value] });
      }
    };

    // base case; there are no disks to move
    if (numDisks === 0) {
      return;
    }

    // recursive case
    // keep track of which peg is the spare
    const spare = 3 - source - destination;

    setTimeout(function(){
      this.solveHanoi(numDisks - 1, source, spare)
    }, 2000);

    const disk = this.pegs[source][0];

    this.pegs[source].shift();
    // this.pegs = pegsReducer(this.pegs, {type: 'copyPeg', index: source}, this.pegs[source]);

    this.pegs[destination].unshift(disk);
    // this.pegs = pegsReducer(this.pegs, {type: 'copyPeg', index: destination}, this.pegs[destination]);

    console.log('disk: ', disk, 'A: ', this.pegs[0], 'B: ', this.pegs[1], 'C: ', this.pegs[2]);
    console.log('---');

    setTimeout(function(){
      this.solveHanoi(numDisks - 1, spare, destination)
    }, 2000);

  }

}
