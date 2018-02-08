import { Component, OnInit, Input } from '@angular/core';
import { Disk } from '../disk-list/disk';

@Component({
  selector: 'app-tower-of-hanoi',
  templateUrl: './tower-of-hanoi.component.html',
  styleUrls: ['./tower-of-hanoi.component.css']
})
export class TowerOfHanoiComponent implements OnInit {

  @Input() disk: Disk;

  constructor() { }

  ngOnInit() {
  }

}
