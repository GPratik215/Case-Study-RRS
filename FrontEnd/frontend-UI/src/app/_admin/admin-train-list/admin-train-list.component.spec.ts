import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminTrainListComponent } from './admin-train-list.component';

describe('AdminTrainListComponent', () => {
  let component: AdminTrainListComponent;
  let fixture: ComponentFixture<AdminTrainListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminTrainListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminTrainListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
