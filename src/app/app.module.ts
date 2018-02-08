import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { DiskListComponent } from './disk-list/disk-list.component';
import { TowerOfHanoiComponent } from './tower-of-hanoi/tower-of-hanoi.component';

@NgModule({
  declarations: [
    AppComponent,
    DiskListComponent,
    TowerOfHanoiComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
