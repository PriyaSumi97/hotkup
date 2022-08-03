import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MailListComponent } from './mail-list/mail-list.component';
import { BrowserModule } from '@angular/platform-browser';


@NgModule({
  declarations: [
    MailListComponent
  ],
  imports: [
    CommonModule,
    BrowserModule
  ]
})
export class TasksModule { }
