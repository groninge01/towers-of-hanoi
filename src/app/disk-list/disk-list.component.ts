import { Component, OnInit } from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import { Disk } from './disk';
import { DISKS } from './disks';

@Component({
  selector: 'app-disk-list',
  templateUrl: './disk-list.component.html',
  styleUrls: ['./disk-list.component.scss']
})

export class DiskListComponent implements OnInit {

  disks = DISKS;

  selectedDisk: Disk;

  constructor() { }

  ngOnInit() {
  }

  onSelect(disk: Disk): void {
    this.selectedDisk = disk;
  }

}
