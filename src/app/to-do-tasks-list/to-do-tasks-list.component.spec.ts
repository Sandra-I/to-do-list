import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ToDoTasksListComponent } from './to-do-tasks-list.component';

describe('ToDoTasksListComponent', () => {
  let component: ToDoTasksListComponent;
  let fixture: ComponentFixture<ToDoTasksListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ToDoTasksListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ToDoTasksListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
