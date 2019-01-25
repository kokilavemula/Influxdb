import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import { AddTaskComponent } from './add-task/add-task.component';
import { TaskListComponent } from './task-list/task-list.component';


const root:Routes = [{

  path : 'add',
  component : AddTaskComponent
},
{
  path : 'list',
  component : TaskListComponent
},

]
@NgModule({
  imports: [
    RouterModule.forRoot(root),
    CommonModule
  ],
  declarations: []
})
export class AppRoutingModule { }
