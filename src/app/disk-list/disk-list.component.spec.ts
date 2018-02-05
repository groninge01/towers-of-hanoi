import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DiskListComponent } from './disk-list.component';

describe('DiskListComponent', () => {
  let component: DiskListComponent;
  let fixture: ComponentFixture<DiskListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DiskListComponent ]
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
