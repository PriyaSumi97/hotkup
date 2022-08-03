import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TasksComponent } from './tasks/tasks.component';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home.component';
const routes: Routes = [
//   {path: 'home', component:HomeComponent,
//   children: [
//     {path: 'tasks', component:TasksComponent}
//   ]

// }
  
]

  @NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
export class HomeRoutingModule { }
