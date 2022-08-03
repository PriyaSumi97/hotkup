import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
//import { ModulesComponent } from './modules/modules.component';
import { TasksComponent } from './modules/home/tasks/tasks.component';
import { ChatComponent } from './modules/chat/chat.component';
import { ReportsComponent } from './modules/reports/reports.component';
import { DashboardsComponent } from './modules/dashboards/dashboards.component';
import { CalendarComponent } from './modules/calendar/calendar.component';
import { ChannelsComponent } from './modules/channels/channels.component';
import { SettingsComponent } from './modules/settings/settings.component';
import { NavbarComponent } from './navbar/navbar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CoreModule } from './core/core.module';
import { HomeComponent } from './modules/home/home.component';
import { MailListComponent } from './modules/home/tasks/mail-list/mail-list.component';
import { MailDetailsComponent } from './modules/home/tasks/mail-list/mail-details/mail-details.component';
import { MdbAccordionModule } from 'mdb-angular-ui-kit/accordion';
@NgModule({
  declarations: [
    AppComponent,
    //ModulesComponent,
    TasksComponent,
    ChatComponent,
    ReportsComponent,
    DashboardsComponent,
    CalendarComponent,
    ChannelsComponent,
    SettingsComponent,
    NavbarComponent,
    HomeComponent,
    MailListComponent,
    MailDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    CoreModule,
    MdbAccordionModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 
  
}
