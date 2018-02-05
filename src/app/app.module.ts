import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DiskListComponent } from './disk-list/disk-list.component';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    DiskListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
