import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mail-list',
  templateUrl: './mail-list.component.html',
  styleUrls: ['./mail-list.component.css']
})
export class MailListComponent implements OnInit {
  name="kavya";
  projects = [
    {name:"chat app", key:"ca", type:"Team-managed software", lead:"dinesh"},
    {name:"sim management", key:"sm", type:"Team-managed software", lead:"dinesh"},
    {name:"kiosk", key:"ki", type:"Team-managed software", lead:"dinesh"},
    {name:"insite", key:"in", type:"Team-managed software", lead:"dinesh"}
   ]

  constructor() { }

  ngOnInit(): void {
  }

}
