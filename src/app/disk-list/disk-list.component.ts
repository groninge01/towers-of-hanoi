import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-disk-list',
  templateUrl: './disk-list.component.html',
  styleUrls: ['./disk-list.component.scss']
})

export class DiskListComponent implements OnInit {

  numbers = [5,6,7,8,9,10];

  selectedNumber: number;

  constructor() { }

  ngOnInit() {
  }

}
