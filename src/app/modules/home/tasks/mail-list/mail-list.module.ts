import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MailDetailsComponent } from './mail-details/mail-details.component';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
  declarations: [
    MailDetailsComponent 
  ],
  imports: [
    CommonModule,
    BrowserModule
  ]
})
export class MailListModule { }
