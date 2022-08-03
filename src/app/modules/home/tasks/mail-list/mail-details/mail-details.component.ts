import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mail-details',
  templateUrl: './mail-details.component.html',
  styleUrls: ['./mail-details.component.css']
})
export class MailDetailsComponent implements OnInit {
  sub_task = [
    {taskId:"#5421", title:"Please fix my computer network connection", dependencyTask:"#1425, #1521", dueDate:"03-Dec-2021", status:"Assigned", color:"red", image:"sabari.png", dependency:"no"},
    {taskId:"#2421", title:"Create mobile responsive prototype", dependencyTask:"New", dueDate:"07-Dec-2021", status:"Completed", color:"green", image:"vignesh.png", dependency:"Plus.png"},
    {taskId:"#3421", title:"Please book a flight ticket to salem on 29th July 2022", dependencyTask:"#4567", dueDate:"21-Jul-2022", status:"Assigned", color:"yellow", image:"Raju.png", dependency:"no"},
    {taskId:"#1421", title:"Please fix my computer network connection", dependencyTask:"New", dueDate:"24-AUG-2022", status:"New", color:"red", image:"Karthi.png", dependency:"Plus.png"}
   ]
   reminders = [
    {s_no:"1", title:"Code Review of Flutter Application", image:"sabari.png", subTitle:"Reminder set for sabarinathan",  type:"Email",  date_time:"03-Dec-2021, 03:40PM", actions:"cancel"},
    {s_no:"2", title:"Client Demo", image:"vignesh.png", subTitle:"Reminder set for vignesh",  type:"App Notification",  date_time:"03-Dec-2021, 03:40PM", actions:"cancel"},
    {s_no:"3", title:"Product Review", image:"Raju.png", subTitle:"Reminder set for raju",  type:"Email",  date_time:"03-Dec-2021, 03:40PM", actions:"cancel"},
    {s_no:"4", title:"Test the web and mobile apps", image:"Karthi.png", subTitle:"Reminder set for karthi",  type:"App Notification",  date_time:"03-Dec-2021, 03:40PM", actions:"cancelled"}
   ]
   timeLog = [
    {s_no:"1", description:"Code Review of Flutter Application", duration:"3 days", actions: "cancel"},
    {s_no:"2", description:"Client Demo", duration:"4 hours", actions: "cancel"},
    {s_no:"3", description:"Product Review", duration:"2 days", actions: "cancel"},
    {s_no:"4", description:"Test the web and mobile apps", duration:"3 weeks", actions: "cancelled"}
   ]
   transitions = [
    {s_no:"1", transition:"New", from:"24-07-2022 09:01 AM", to: "31-07-2022 11:11 AM", by:"Pawan", duration:"7 days 2 hrs 10min"},
    {s_no:"2", transition:"Assigned", from:"24-07-2022 09:01 AM", to: "31-07-2022 11:11 AM", by:"Vignesh", duration:"7 days 2 hrs 10min"},
    {s_no:"3", transition:"Stage 3", from:"24-07-2022 09:01 AM", to: "31-07-2022 11:11 AM", by:"Sabari", duration:"7 days 2 hrs 10min"},
   ]
   forms = [
    {form_name:"interview Hybrid Form", attached_on:"24-07-2022 09:01 AM", attached_by:"Pawan", assigned: "Chris Do", status:"Submitted", actions:"View Data"},
    {form_name:"interview Candidates", attached_on:"24-07-2022 09:01 AM", attached_by:"Vignesh", assigned: "James Clear", status:"Open", actions:"Submit Form"},
    {form_name:"interview Hybrid Form", attached_on:"24-07-2022 09:01 AM", attached_by:"Sabari", assigned: "Adam Smith", status:"Open", actions:"Submit Form"}
   ]
   hooks = [
    {type:"Customers", type_name:"POP"},
    {type:"Customers", type_name:"Branch name1, Branch name2"}
   ]

   checklist = [
    {s_no:"01", description:"Create Mobile Responsive type for Task Bench", img:"plain_tick.png"},
    {s_no:"02", description:"Update Style Guides in the Logo Design", img:"plain_tick.png"},
    {s_no:"03", description:"Rest Computer Network Connection", img:"plain_tick.png"},
    {s_no:"04", description:"Create Wireframe for Hotkup Android App", img:"green_tick.png"},
    {s_no:"05", description:"Slack Logo Design", img:"green_tick.png"},
    {s_no:"06", description:"App Icon Design for App store and Play store", img:"plain_tick.png"},
   ]
   activities = [
    {s_no:"5", name:"Pawan Kalyan", description:"added a new checklist item", duration:"Yesterday, 1:30 PM", mytab:"line1"},
    {s_no:"4", name:"Karthick Anbu", description:"added a new checklist item", duration:"3 days ago", mytab:"line2"},
    {s_no:"3", name:"James Wing", description:'commented "Check our content repository for better idea"', duration:"4 days ago", mytab:"line3"},
    {s_no:"2", name:"Aadhira Padthi", description:"added a new reminder", duration:"1 month ago", mytab:"line4"},
    {s_no:"1", name:"Mukesh Kalyan", description:"create a Task", duration:"1 month ago", mytab:"line5"}
   ]
 
mycity:any;
myline:any;
 openCity(evt:any, cityname:any) {
  var i, tabcontent, tablinks;
  tabcontent = document.querySelectorAll<HTMLElement>('.tabcontent');
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display= 'none'
  }
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  this.mycity= document.getElementById(cityname);
  this.mycity.style.display = "block";
  evt.currentTarget.className += " active";
}
disbutton() {
  document.getElementById("act_button")?.setAttribute("class", "click_button");
  document.getElementById("activity_button")?.setAttribute("class", "activity_button")
}
postbutton() {
  document.getElementById("activity_button")?.setAttribute("class", "clicks_button");
  document.getElementById("act_button")?.setAttribute("class", "act_button")
}




  constructor() { }

  ngOnInit(): void {
  }


  checkAll(state:boolean) {
    console.log(state, "state")
    console.log("hello")
    document.getElementById("checkbox")?.setAttribute("class", "checkbox")
}

}
