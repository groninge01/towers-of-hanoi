import {Component, NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import { Disk } from './disk';

@Component({
  selector: 'app-my-disk-list',
  templateUrl: './diskList.component.html'
})

export class DiskListComponent {
  selectedDisk: Disk = new Disk(5, 'Five' );
  disks = [
    new Disk(5, 'Five' ),
    new Disk(6, 'Six' ),
    new Disk(7, 'Seven' ),
    new Disk(8, 'Eight' ),
    new Disk(9, 'Nine'),
    new Disk(10, 'Ten')
  ];
  onSelect(diskId) {
    this.selectedDisk = null;
    for (let i = 0; i < this.disks.length; i++) {
      if (this.disks[i].id === diskId) {
        this.selectedDisk = this.disks[i];
      }
    }
}
}
