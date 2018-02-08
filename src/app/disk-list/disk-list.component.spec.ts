import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';

import { DiskListComponent } from './disk-list.component';
import { TowerOfHanoiComponent } from '../tower-of-hanoi/tower-of-hanoi.component';

describe('DiskListComponent', () => {
  let component: DiskListComponent;
  let fixture: ComponentFixture<DiskListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ FormsModule ],
      declarations: [
        DiskListComponent,
        TowerOfHanoiComponent
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DiskListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
