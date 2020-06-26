import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DoneTasksListComponent } from './done-tasks-list.component';

describe('DoneTasksListComponent', () => {
  let component: DoneTasksListComponent;
  let fixture: ComponentFixture<DoneTasksListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DoneTasksListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DoneTasksListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
