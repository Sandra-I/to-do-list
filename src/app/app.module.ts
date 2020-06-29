import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { AddTaskComponent } from './add-task/add-task.component';
import { ToDoTasksListComponent } from './to-do-tasks-list/to-do-tasks-list.component';
import { DoneTasksListComponent } from './done-tasks-list/done-tasks-list.component';
import { TaskDoneComponent } from './task-done/task-done.component';
import { TaskToDoComponent } from './task-to-do/task-to-do.component';
import { ContentComponent } from './content/content.component';
import { TaskService } from './service/task.service';
import { TaskInProgressComponent } from './task-in-progress/task-in-progress.component';
import { CurrentTasksListComponent } from './current-tasks-list/current-tasks-list.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AddTaskComponent,
    ToDoTasksListComponent,
    DoneTasksListComponent,
    TaskDoneComponent,
    TaskToDoComponent,
    ContentComponent,
    TaskInProgressComponent,
    CurrentTasksListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    NgbModule
  ],
  providers: [TaskService],
  bootstrap: [AppComponent]
})
export class AppModule { }
