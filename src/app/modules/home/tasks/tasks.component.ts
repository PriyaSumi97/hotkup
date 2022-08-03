import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {

  constructor(private router: Router) { }


  ngOnInit(): void {
    this.router.navigate(['/home/tasks/send/mail-details']);
  }

}