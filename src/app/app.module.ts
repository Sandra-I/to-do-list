import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { Routes, RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { AddTaskComponent } from './add-task/add-task.component';
import { ToDoTasksListComponent } from './to-do-tasks-list/to-do-tasks-list.component';
import { DoneTasksListComponent } from './done-tasks-list/done-tasks-list.component';
import { ContentComponent } from './content/content.component';
import { TaskService } from './services/task.service';
import { TaskInProgressComponent } from './current-tasks-list/task-in-progress/task-in-progress.component';
import { CurrentTasksListComponent } from './current-tasks-list/current-tasks-list.component';
import { SigninComponent } from './auth/signin/signin.component';
import { SignupComponent } from './auth/signup/signup.component';
import { TaskDoneComponent } from './done-tasks-list/task-done/task-done.component';
import { TaskToDoComponent } from './to-do-tasks-list/task-to-do/task-to-do.component';
import { AuthService } from './services/auth.service';
import { AuthGardService } from './services/auth-gard.service';
import { OupsComponent } from './oups/oups.component';

const appRoutes: Routes = [
  { path: 'my-to-do-list', component: ContentComponent },
  { path: 'auth/signin', component: SigninComponent },
  { path: 'auth/signup', component: SignupComponent },
  // { path: '', component: HomePageComponent },
  { path: 'not-found', component: OupsComponent },
  //  Cette path doit toujours être à la fin pour ne pas qu'il se déclenche avant les autres
  // Angular regarde les routes dans l'ordre
  //  / permet la redirection
  { path: '**', redirectTo: '/not-found'}
]

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
    CurrentTasksListComponent,
    SigninComponent,
    SignupComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule
  ],
  providers: [
    TaskService,
    AuthService,
    AuthGardService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
