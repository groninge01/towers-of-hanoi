import { Component, OnInit, Input } from '@angular/core';
import { Disk } from '../disk-list/disk';

@Component({
  selector: 'app-tower-of-hanoi',
  templateUrl: './tower-of-hanoi.component.html',
  styleUrls: ['./tower-of-hanoi.component.scss']
})
export class TowerOfHanoiComponent implements OnInit {

  Arr = Array; // Array type captured in a variable

  @Input() disk: Disk;

  constructor() { }

  ngOnInit() {
  }


}
