import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TasksComponent } from './modules/home/tasks/tasks.component';
import { HomeComponent } from './modules/home/home.component';
import { MailListComponent } from './modules/home/tasks/mail-list/mail-list.component';
import { MailDetailsComponent } from './modules/home/tasks/mail-list/mail-details/mail-details.component';
const routes: Routes = [
  // {
  //   path: 'home', 
  //   loadChildren: () => import("./modules/home/home.module").then(x => x.HomeModule),
  //   data: { preload: false, delay: false }
  // },
  // { path: '**', redirectTo: 'home' }
  { path: 'home', component:HomeComponent,
    children: [
      { path: 'tasks', component:TasksComponent,
      children: [
        { path: 'send', component:MailListComponent,  
          children: [
            {path: 'mail-details', component:MailDetailsComponent}
          ]
      }
        
      ]
    }, 
    ]},
  { path: '', component:HomeComponent},
  { path: '**', redirectTo: 'home'}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
